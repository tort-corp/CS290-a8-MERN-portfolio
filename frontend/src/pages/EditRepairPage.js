import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRepairPage = ({ repairToEdit }) => {
 
    const [notes, setNotes]       = useState(repairToEdit.notes);
    const [date, setDate]         = useState(repairToEdit.date);
    const [mileage, setMileage] = useState(repairToEdit.mileage);
    
    const redirect = useNavigate();

    const editRepair = async () => {
        const response = await fetch(`/repairs/${repairToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                notes: notes, 
                date: date, 
                mileage: mileage
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Repair document edited`);
        } else {
            const errMessage = await response.json();
            alert(`Repair document not edited; status ${response.status}. ${errMessage.Error}`);
        }
        redirect("/repair");
    }

    return (
        <>
        <article>
            <h2>Edit a repair in the collection</h2>
            <p>This page edits a repair from the list of repairs.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which repair are you Editing?</legend>
                    <label for="notes">Repair Notes</label>
                    <input
                        type="text"
                        value={notes}
                        class="notes_box"
                        onChange={e => setNotes(e.target.value)} 
                        id="notes" />
                    
                    <label for="date">Date repaired</label>
                    <input
                        type="date"
                        value={date.slice(0,10)}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="mileage">Vehilce Mileage</label>
                    <input
                        type="number"
                        value={mileage}
                        onChange={e => setMileage(e.target.value)} 
                        id="mileage" />

                    <label for="submit">
                    <button
                        onClick={editRepair}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditRepairPage;