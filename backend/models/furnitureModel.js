const mongoose = require('mongoose');

const FurnitureSchema = new mongoose.Schema({
    type: { 
        type: String, 
        required: true 
    }, // Desk, Chair, etc.
    material: { 
        type: String, 
        required: true 
    }, 
    manufacturer: { 
        type: String, 
        required: true 
    }, // Manufacturer name
    condition: [{ 
        type: String,
        enum: ['New', 'Good', 'Fair', 'Poor'], // Adjust conditions as needed
        required: true
    }],
    last_maintenance_date: { 
        type: Date 
    }, // Last date of maintenance
    maintenance_history: [{
        date: { 
            type: Date 
        }, // Date of maintenance
        details: { 
            type: String 
        } // Details of the maintenance work
    }],
    location: { 
        type: String, 
        required: true 
    }, // Location in the school
    purchase_date: { 
        type: Date, 
        required: true 
    }, // Date of purchase
    cost: { 
        type: Number, 
        required: true 
    }, // Cost of the furniture
    vendor_information: { 
        type: String, 
        required: true 
    }, // Information about the vendor
}, {timestamps:true});

module.exports = mongoose.model('Furniture', FurnitureSchema);
