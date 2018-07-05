// /**
//  * Config
//  *
//  * Finds a location for the config file, copies the default there and returns
//  * an nconf instance for the application to consume.
//  * @usage
//  * var Config = require('./config');
//  * var config = Config();
//  *
//  * Saving the configuration: use this.saveConfig instead of calling nconf.save()
//  * directly as we need to alter the line endings for Windows.
//  * @module config
//  */
// /// <reference path="typings/tsd.d.ts" />
// import path        = require('path');
// import fs          = require('fs');
// import _           = require('lodash');
// import g           = require('./globals');
// import i           = require('./interfaces');
// import util        = require('util');
// import winston     = require('winston');
// import { Logger } from './logger';
// import Promise     = require('bluebird');
// _.mixin(require('lodash-deep'));
// var PACKAGE         = path.join(__dirname, '..', 'package.json');
// export class Config{
//   static KEYS = {
//     // See Config.MODE for possible values
//     activationCode:'registration:activationCode',
//     mode:'mode',
//     database:'database',
//     test:'test',
//     log:'log',
//     notify:'notify',
//     port:'port',
//     maps:'maps',
//     backup:'backup'
//   };
//   // Default values for each of the config sections that we'll assume to exist
//   static DEFAULTS: i.Config.Defaults = {
//     database:{
//       rebuild:false,
//       dialect:'postgres'
//     }
//   };
//   private nconf : nconf.Provider;
//   // Contents of package.json
//   public package : {version:string; name: string};
//   public log : winston.LoggerInstance;
//   constructor(overrides?:any){
//       // Initially create without any custom log levels so we can record startup process,
//       // we will update at end of process.
//       this.log = Logger.getInstance();
//       this.package = this.getPackageObject();
//       const configFilename = this.getFullConfigFilename();
//       // If this file needs to be created, halt the server so that the user can
//       // enter in the database credentials.
//       if (this.createConfigFile(configFilename)) {
//         this.log.info('*** FIRST RUN ***');
//         this.log.info('New config file created:');
//         this.log.info(configFilename);
//         this.log.info('IMPORTANT: please edit this file with your settings and restart the server. Server will now stop.');
//         process.exit(0);
//       }
//       this.log.info(`Using config file: ${configFilename}`);
//       nconf.argv({
//           'test:enabled':{
//               alias:'test-mode',
//               describe:'Use the test config part of the config file',
//               demand:false
//           },
//           'database:rebuild':{
//               alias:'rebuild-tables',
//               describe:'Set true to drop and recreate all database tables',
//               demand:false
//           },
//           'log:plain':{
//               alias:'log-plain',
//               describe:'Turn off timestamp prefix and colors when logging',
//               demand:false,
//               default:false
//           },
//           'log:console':{
//               alias:'log-console',
//               describe:'Set the log level for console output',
//               demand:false
//           },
//           'log:file':{
//               alias:'log-file',
//               describe:'Set the log level for file output',
//               demand:false
//           }
//       });
//       // We want to log in warn mode (despite what file says) when in test mode *except*
//       // if user has overridden via command line.
//       var overrides = overrides || {};
//       if(nconf.get('test:enabled') || (overrides.test && overrides.test.enabled) ){
//         overrides.log = (overrides.log || {});
//         overrides.log.console = 'warn';
//       }
//       nconf.overrides(overrides);
//       nconf.file({
//           file: configFilename,
//           format:{
//               parse: yaml.safeLoad,
//               stringify: yaml.safeDump
//           }
//       });
//       nconf.defaults(_.defaultsDeep({system:{productVersion:this.package.version}}, Config.DEFAULTS));
//       // Swap in test settings (if set) when in test mode
//       if(nconf.get('test:enabled')){
//           this.log.info('*** TEST MODE - Using alternate database configuration ***');
//           if(!nconf.get('test:database:name')){
//               console.error('Must specify a test database name (test:database:name)');
//               process.exit(-1);
//           }
//           nconf.set('port', nconf.get('port') + 1);
//           var testConf = nconf.get('test');
//           _.forEach(testConf, function(val, key){
//               nconf.set(key, _.defaults(val, nconf.get(key)));
//           });
//       }
//       this.nconf = nconf;
//       this.log = Logger.getInstance(this);
//   }
//   /**
//    * Serve HTTP GET request
//    */
//   public getData(){
//     return Promise.resolve({
//       maps : this.maps,
//       local : this.localMode,
//       mail : this.mail,
//       productVersion : this.package.version,
//       backup: this.backup
//     });
//   }
//   /**
//    * Allows a user to POST a JSON object, and we'll add in any keys
//    * that were previously missing.
//    */
//   public setData(data){
//     var sanitizedConfig = _.pick(data, <string[]> _.values(Config.KEYS));
//     debug(`Saving settings: ${JSON.stringify(sanitizedConfig)}`);
//     nconf.merge(undefined, sanitizedConfig);
//     debug('New config:', this.nconf.get('backup'));
//     return this.saveConfigFile();
//   }
//   /**
//    * Write out `config.yaml` with platform-appropriate line-endings.
//    */
//   private saveConfigFile(): Promise<void> {
//     const filename = this.getFullConfigFilename();
//     return new Promise<void>((resolve, reject) => {
//       this.nconf.save((err) => {
//         if (err) {
//           debug(`Error saving nconf settings: ${err.message}`);
//           return reject(err);
//         }
//         // All non-Windows architectures are fine with the standard \n line endings.
//         if (process.platform !== 'win32') {
//           return resolve();
//         }
//         fs.readFile(filename, { flag: 'r', encoding: 'utf8' }, (err, data) => {
//           if (err) {
//             debug(`Error reading config file to change line endings: ${err.message}`);
//             return reject(err);
//           }
//           data = data.replace(/(\r\n|\n)/g, '\r\n');
//           fs.writeFile(filename, data, (err) => {
//             if (err) {
//               debug(`Error writing config file to change line endings: ${err.message}`);
//               return reject(err);
//             }
//             resolve();
//           });
//         });
//       });
//     });
//   }
//   /**
//    * Read package.json as an object.
//    */
//   getPackageObject():any{
//       if(!fs.existsSync(PACKAGE)){
//           throw new Error('Could not find: '+PACKAGE);
//       }
//       var contents = fs.readFileSync(PACKAGE, {encoding:'utf8'});
//       return JSON.parse(contents);
//   }
//   get<T>(key):T{
//     return this.nconf.get(key);
//   }
//   set(key,value){
//       this.nconf.set(key,value);
//       this.saveConfigFile();
//   }
//   get notify():i.Config.Notifiers{
//     var settings = this.get<i.Config.Notifiers>(Config.KEYS.notify) || {};
//     _.defaults(settings, Config.DEFAULTS.notify);
//     return settings;
//   }
//   /**
//    * Fetch database settings based on whether in production or test mode.
//    * When in test mode uses keys from 'test:database' with defaults from 'database'.
//    * @returns {any}
//    */
//   get database():i.Config.Database{
//     var result;
//     if(this.nconf.get('test:enabled')){
//       result = _.defaults({},this.get<i.Config.Database>('test:database'), this.get<i.Config.Database>('database'));
//     }
//     else{
//       result = this.get<i.Config.Database>('database');
//     }
//     return _.defaults(result, Config.DEFAULTS.database);
//   }
//   get maps(): i.Config.Maps {
//     return {
//       key: this.nconf.get(Config.KEYS.maps).key || Config.DEFAULTS.maps.key
//     };
//   }
//   get localMode():boolean{
//     return (this.nconf.get(Config.KEYS.mode) == Config.MODE.local);
//   }
//   /**
//    * HTTP port that application is being served on
//    * @returns {number} The HTTP port application should be served on.
//    */
//   get port():number{
//     return nconf.get('port');
//   }
//   /**
//    * Get the mail server settings.
//    * @returns {TResult}
//    */
//   get mail():i.Config.Mail{
//     return <i.Config.Mail>  _.defaults(this.nconf.get('mail'), Config.DEFAULTS.mail);
//   }
//   /**
//    * Return the settings for system backups.
//    */
//   public get backup() {
//     const validators = {
//       enabled: x => _.isBoolean(x),
//       copies:  x => _.isFinite(x) && _.gt(x, 0),
//       path:    x => _.isString(x) && !_.isEmpty(x)
//     };
//     // Examine the values in the config file. Use the default value if not set.
//     // If set but invalid, log an error message and use the default value.
//     _.forEach(Config.DEFAULTS.backup, (defaultValue, name) => {
//       const userValue = this.nconf.get(`backup:${name}`);
//       if (!validators[name](userValue)) {
//         if (!_.isUndefined(userValue)) {
//           this.log.error(`"Backup:${name}" config setting of "${userValue}" is invalid. Using default of ${defaultValue}.`);
//         }
//         this.nconf.set(`backup:${name}`, defaultValue);
//       }
//     });
//     return this.nconf.get('backup');
//   }
//   /**
//    * Create a configuration file (along with its directory) if it doesn't exist
//    * already.
//    *
//    * The contents of that file will come from the file at DEFAULT_CONFIG.
//    *
//    * @return True if a config file was not found and had to be created. If one
//    * already exists, return false.
//    */
//   private createConfigFile(configPath: string): boolean {
//     if (this.fileExists(configPath)) {
//       return false;
//     }
//     const configFolder = path.dirname(configPath);
//     if (!this.folderExists(configFolder)) {
//       this.log.info(`Creating configuration folder: ${configFolder}`);
//       try {
//         fs.mkdirSync(configFolder);
//       }
//       catch (err) {
//         this.log.error(`Could not create configuration folder: ${configFolder}`);
//         throw err;
//       }
//     }
//     const defaultConfigFile = path.resolve(__dirname, DEFAULT_CONFIG);
//     fs.writeFileSync(configPath, fs.readFileSync(defaultConfigFile));
//     return true;
//   }
//   /**
//    * Detect OS and return fully qualified filename to config file in user store
//    * or else place it in root of this app's folder tree.
//    *
//    * The following is used to determine storage location:
//    * 1. CENTRAL_CONFIG env var will override everything
//    * 2. Config.yaml from local application root folder
//    * 2. Else config.yaml in CENTRAL_DATA env var
//    * 3. Else OS specific folder (i.e. ~/.config/cellwatch-central)
//    */
//   getFullConfigFilename():string{
//      // When running as a Windows service we need to be able to specify the absolute location
//      // of the config file.
//      if(process.env[g.ENV.configFilename]){
//        return process.env[g.ENV.configFilename];
//      }
//       var localConfigFile = path.resolve(path.join(__dirname, '..',CONFIG_FILENAME));
//       // Allow user to override config with a local file
//       if(this.fileExists(localConfigFile)){
//         return localConfigFile;
//       }
//       let configFullPath = path.join(this.dataPath, CONFIG_FILENAME);
//       return configFullPath;
//   }
//   /**
//    * Get the absolute path to where configuration, log and backup files should be
//    * located on this system.
//    *
//    * Windows: %USERPROFILE%\.package-name
//    * Unix: %HOME%\.package-name
//    */
//   public get dataPath():string{
//     // CI-474 When on Windows we want to be able to override the default file storage locations
//     if(process.env[g.ENV.dataPath]){
//       return process.env[g.ENV.dataPath];
//     }
//     return path.join((process.env.HOME || process.env.USERPROFILE), '.'+this.package.name);
//   }
//   private folderExists(path){
//     try{
//       var stat = fs.statSync(path);
//     }
//     catch(e){
//       return false;
//     }
//     return stat.isDirectory();
//   }
//   fileExists(path){
//     try{
//       var stat = fs.statSync(path);
//     }
//     catch(e){
//       return false;
//     }
//     return stat.isFile();
//   }
// } 
//# sourceMappingURL=config.js.map