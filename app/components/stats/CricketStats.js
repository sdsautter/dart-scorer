// {
// fiveMarkRow() {
//     if (this.state.cricket.fiveMark > 0) {
//         return (
//             <tr>
//                 <td>5 Mark</td>
//                 <td>{this.state.cricket.fiveMark}</td>
//             </tr>
//         )
//     }
// }

// sixMarkRow() {
//     if (this.state.cricket.sixMark > 0) {
//         return (
//             <tr>
//                 <td>6 Mark</td>
//                 <td>{this.state.cricket.sixMark}</td>
//             </tr>
//         )
//     }
// }
// sevenMarkRow() {
//     if (this.state.cricket.sevenMark > 0) {
//         return (
//             <tr>
//                 <td>7 Mark</td>
//                 <td>{this.state.cricket.sevenMark}</td>
//             </tr>
//         )
//     }
// }
// eightMarkRow() {
//     if (this.state.cricket.eightMark > 0) {
//         return (
//             <tr>
//                 <td>8 Mark</td>
//                 <td>{this.state.cricket.eightMark}</td>
//             </tr>
//         )
//     }
// }
// nineMarkRow() {
//     if (this.state.cricket.nineMark > 0) {
//         return (
//             <tr>
//                 <td>9 Mark</td>
//                 <td>{this.state.cricket.nineMark}</td>
//             </tr>
//         )
//     }
// }
// threeBullRow() {
//     if (this.state.cricket.threeBull > 0) {
//         return (
//             <tr>
//                 <td>3 Bull</td>
//                 <td>{this.state.cricket.threeBull}</td>
//             </tr>
//         )
//     }
// }
// fourBullRow() {
//     if (this.state.cricket.fourBull > 0) {
//         return (
//             <tr>
//                 <td>4 Bull</td>
//                 <td>{this.state.cricket.fourBull}</td>
//             </tr>
//         )
//     }
// }
// fiveBullRow() {
//     if (this.state.cricket.fiveBull > 0) {
//         return (
//             <tr>
//                 <td>5 Bull</td>
//                 <td>{this.state.cricket.fiveBull}</td>
//             </tr>
//         )
//     }
// }
// sixBullRow() {
//     if (this.state.cricket.sixBull > 0) {
//         return (
//             <tr>
//                 <td>6 Bull</td>
//                 <td>{this.state.cricket.sixBull}</td>
//             </tr>
//         )
//     }
// }


// renderCricketTable() {
//     return (
//         <table className='cricket-table text-center align-self-center'>
//             <thead>
//                 <tr>
//                     <th scope="col"></th>
//                     <th scope="col">{this.user}</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Wins</td>
//                     <td>{this.state.cricket.wins}</td>
//                 </tr>
//                 <tr>
//                     <td>Total Games</td>
//                     <td>{this.state.cricket.totalGames}</td>
//                 </tr>
//                 <tr>
//                     <td>Win Percent</td>
//                     <td>{`${parseFloat((this.state.cricket.wins / this.state.cricket.totalGames) * 100).toFixed(2)}%`}</td>
//                 </tr>
//                 <tr>
//                     <td>Throws</td>
//                     <td>{this.state.cricket.throws}</td>
//                 </tr>
//                 <tr>
//                     <td>Marks Per Round</td>
//                     <td>{parseFloat(this.state.cricket.mpr.toFixed(2))}</td>
//                 </tr>
//                 {this.fiveMarkRow()}
//                 {this.sixMarkRow()}
//                 {this.sevenMarkRow()}
//                 {this.eightMarkRow()}
//                 {this.nineMarkRow()}
//                 {this.threeBullRow()}
//                 {this.fourBullRow()}
//                 {this.fiveBullRow()}
//                 {this.sixBullRow()}
//             </tbody>
//         </table>
//     )
// }
// }