import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

//displays notes, date, mileage, and delete and edit buttons
function RepairRow({ repair, onEdit, onDelete }) {
    return (
        <tr>
            <td>{repair.notes}</td>
            <td>{repair.date.slice(0,10)}</td>
            <td>{repair.mileage}</td>
            <td><MdDeleteForever onClick={() => onDelete(repair._id)} /></td>
            <td><MdEdit onClick={() => onEdit(repair)} /></td>
        </tr>
    );
}

export default RepairRow;