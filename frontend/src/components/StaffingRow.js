
import React from 'react';



// function StaffingRow({staff}) {

//     return(

//         <tr>
//             <td>
//                 <img src={staff.picture.thumbnail} alt="Random staff member picture"/>
//             </td>
//             <td>
//                 <a href="mailto:${staff.email}"/>
//                 {staff.name.first}
//                 {staff.name.last}
//             </td>
//             <td>{staff.phone}</td>
//             <td>{staff.location.city}</td>        
//         </tr>

//     )
// }

// export default StaffingRow;



function StaffingRow({ person }) {
    return (
        <tr>
            <td>
                <img src={person.picture.thumbnail} alt="Random staff member picture" />
            </td>
            <td>
                <a href={`mailto:${person.email}`}>
                    {person.name.first} {person.name.last}
                </a>
            </td>
            <td>{person.phone}</td>
            <td>{person.location.city}</td>
        </tr>
    )
}



export default StaffingRow;



















