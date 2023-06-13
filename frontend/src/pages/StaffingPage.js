import React, { useState } from 'react';
import StaffingRow from "../components/StaffingRow.js"




function StaffingPage() {
    const [staff, staffResults] = useState([]);



    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                staffResults(response.results);
            })
            .catch(() => {
                alert("There was a problem trying to access the random user information. Please try agian.")
            });
    };



    return (
        <>
            <h2>Staff</h2>
            <article >
                <p>
                    <button id="callServer" onClick={fetchResults} value="Add 10 Staff">Update table</button>



                    This page generates random staff members and adds them
                    to a table dynamically. Each time you press a button a
                    new staff member will be added to the table by calling
                    the <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">
                        randomuser.me </a> API.
                </p>



                <h3>Generated Staff</h3>
                <table>
                    <caption>Staff and contact information</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name and Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="randomStaffGen">
                        {staff.map((person) => <StaffingRow person={person} key={person.email} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}



export default StaffingPage;
