import React from 'react';
import RepairRow from './RepairRow';

function RepairTable({ repairs, onDelete, onEdit }) {
    return (
        <table id="repairs">
            <caption>Add and Edit Repairs</caption>
            <thead>
                <tr>
                    <th>Notes</th>
                    <th>Date</th>
                    <th>Mileage</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    
                </tr>
            </thead>
            <tbody>
                {/*map goes through array repairs and calls the function Repair that creates a repair component for each item in array*/}
                {repairs.map((repair, i) => 
                    <RepairRow
                        repair={repair} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RepairTable;
