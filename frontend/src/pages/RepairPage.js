import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//import RepairRow from '../components/RepairRow';
import RepairTable from '../components/RepairTable';

function RepairPage({ setRepair }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    // when use state detects a change it updates the dom tree with the 
    // new data
    const [repairs, setRepairs] = useState([]);

    // RETRIEVE the entire list of repairs
    // fetch returns a promose that will resolve to response object if the 
    //http request is recieves a response
    const loadRepairs = async () => {
        const response = await fetch('/repairs');
        const data = await response.json(); // returns body of response as JSON. .json() also returns a promise that we need to wait for
        setRepairs(data); //setMovies lets react know to update DOM with new data
    } 
    

    // UPDATE a single repair
    const onEditRepair = async repair => {
        setRepair(repair);
        redirect("/update-repair");
    }

    // CREATE a  repair
    const onCreateRepair = async repair => {
        setRepair(repair);
        redirect("/create-repair");
    }


    // DELETE a single repair 
    const onDeleteRepair = async _id => {
        const response = await fetch(`/repairs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/repairs');
            const repairs = await getResponse.json();
            setRepairs(repairs);
        } else {
            console.error(`Failed to delete repair with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the repairs
    // useEffect hook gets called when component is first mounted
    useEffect(() => {
        loadRepairs();
    }, []);

    // DISPLAY the repairs
    return (
        <>
            <h2>List of Repairs</h2>
            <p>Repairs and maintenance log for vehicle.</p>
            <RepairTable 
                repairs={repairs} 
                onEdit={onEditRepair} 
                onDelete={onDeleteRepair} 
                onCreate={onCreateRepair}
            />
        </>
    );
}

export default RepairPage;