import 'dotenv/config';
import express from 'express';
import * as repairs from './repairs-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/repairs', (req,res) => { 
    repairs.createRepair(
        req.body.notes, 
        req.body.date, 
        req.body.mileage
        )
        .then(repair => {
            res.status(201).json(repair);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of a repair document failed.' });
        });
});


// RETRIEVE controller ****************************************************
// always returns an array. How many elements or if empty depends on how
// many documents match the filter. 
// currrently the function dosnt have filters setup. 
// Watch video 13:40 to setup?
app.get('/repairs', (req, res) => {
    repairs.retrieveRepairs()
        .then(repair => { 
            if (repair !== null) {
                res.json(repair);
            } else {
                res.status(404).json({ Error: 'Repair document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Request to retrieve repair document failed.' });
        });
});


// RETRIEVE by ID controller
// retruns 1  movie or a null value
app.get('/repairs/:_id', (req, res) => {
    repairs.retrieveRepairByID(req.params._id)
    .then(repair => { 
        if (repair !== null) {
            res.json(repair);
        } else {
            res.status(404).json({ Error: 'Repair document not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Request to retrieve repair document failed.' });
    });

});


// UPDATE controller ************************************
// expects request to have all properties
app.put('/repairs/:_id', (req, res) => {
    repairs.updateRepair(
        req.params._id, 
        req.body.notes, 
        req.body.date, 
        req.body.mileage
    )
    .then(repair => {
        res.json(repair);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Repair document update failed.' });
    });
});


// DELETE Controller ******************************
app.delete('/repairs/:_id', (req, res) => {
    repairs.deleteRepairById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Repair document no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a repair document failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});