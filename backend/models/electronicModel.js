const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ElectronicSchema = new Schema({
    type: { 
        type: String, 
        required: true 
    }, // Computer, Projector, etc.
    brand: { 
        type: String, 
        required: true 
    }, // Brand of the device
    model: { 
        type: String, 
        required: true 
    }, // Model of the device
    specifications: { 
        type: String, 
        required: true 
    }, // Technical specifications (e.g., RAM, processor)
    condition: {
        type: String,
        enum: ['New', 'Good', 'Fair', 'Poor'], // Enum to restrict condition values
        required: true
    },
    installed_software: { 
        type: [String] 
    }, // List of installed software
    service_history: [{
        service_date: { 
            type: Date 
        }, // Date of service
        details: { 
            type: String 
        } // Details of the service performed
    }],
    warranty_information: { 
        type: String 
    }, // Warranty details
    location: { 
        type: String, 
        required: true 
    }, // Location where the device is installed
}, { timestamps: true });

module.exports = mongoose.model('Electronics', ElectronicSchema);
