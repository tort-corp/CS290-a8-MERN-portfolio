// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Movies collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const repairSchema = mongoose.Schema({
	notes:    { type: String, required: true },
	date: { type: Date, required: true, min: '2000-01-01', default: Date.now},
	mileage: { type: Number, required: true }
});

// Compile the model from the schema.
const Repair = mongoose.model('Repair', repairSchema);


// CREATE model *****************************************
const createRepair = async (notes, date, mileage) => {
    const repair = new Repair({ 
        notes: notes, 
        date: date, 
        mileage: mileage
    });
    return repair.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveRepairs = async () => {
    const query = Repair.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRepairByID = async (_id) => {
    const query = Repair.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRepairById = async (_id) => {
    const result = await Repair.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRepair = async (_id, notes, date, mileage) => {
    const result = await Repair.replaceOne({_id: _id }, {
        notes: notes, 
        date: date, 
        mileage: mileage
    });
    return { 
        _id: _id, 
        notes: notes, 
        date: date, 
        mileage: mileage
    }
}



// Export our variables for use in the controller file.
export { createRepair, retrieveRepairs, retrieveRepairByID, updateRepair, deleteRepairById }