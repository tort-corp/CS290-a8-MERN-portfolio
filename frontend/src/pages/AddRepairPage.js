import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddRepairPage = () => {

    const [notes, setNotes]       = useState('');
    const [date, setDate]         = useState('');
    const [mileage, setMileage] = useState('');
    
    const redirect = useNavigate();

    const addRepair = async () => {
        const newRepair = { notes, date, mileage };
        const response = await fetch('/repairs', {
            method: 'post',
            body: JSON.stringify(newRepair),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Repair document added`);
            redirect("/");
        } else {
            alert(`Repair document not added status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a repair to the collection</h2>
            <p>This page adds a repair to the list of repairs.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which repair are you adding?</legend>
                    <label for="notes">Repair Notes</label>
                    <input
                        type="text"
                        placeholder="Notes"
                        value={notes}
                        onChange={e => setNotes(e.target.value)} 
                        id="notes" />
                    
                    <label for="date">Date repaired</label>
                    <input
                        type="date"
                        value={date}
                        pattern="\d{2}-\d{2}-\d{2}"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="mileage">Vehicle Mileage</label>
                    <input
                        type="number"
                        placeholder="Vehicle Mileage"
                        value={mileage}
                        onChange={e => setMileage(e.target.value)} 
                        id="mileage" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addRepair}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddRepairPage;