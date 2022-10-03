// // import '../css/table.c';
// import { useState } from "react";


// export default function getToddlers() {

//     fetch(`http://localhost:3010/Babies`)
//         .then(Response => {
//             if (Response.ok && Response.status === 200) {
//                 return Response.json();
//             }
//         })
//         .then(data => {
//             if (data) {
//                 ShowDetails(data)
//                 //    console.log(data)
//             }
//             else {
//                 alert("error");
//             }
//         });
// }

// function ShowDetails(arryData) {
//     console.log(arryData)
//     return (
//         <div>
//             <table>
//                 <tr>
//                     <th>FullName</th>
//                     <th>Email</th>
//                 </tr>
//                 {arryData.map((val, key) => {
//                     return (
//                         <tr key={key}>
//                             <div>{console.log(val.FullName)}</div>
//                             <td>{val.FullName}</td>
//                             <div>{console.log(val.Email)}</div>
//                             <td>{val.Email}</td>
//                         </tr>
//                     )
//                 })}
//             </table>
//         </div>
//     );


// }