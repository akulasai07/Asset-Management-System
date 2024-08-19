const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    }, // Vehicle title or name
    model: { 
        type: String, 
        required: true 
    }, // Vehicle model
    year: { 
        type: Number, 
        required: true,
        min: 1886, // The first car was invented in 1886
    }, // Year of manufacture
    license_plate: { 
        type: String, 
        required: true 
    }, // License plate number
    insurance_provider: { 
        type: String, 
        required: true 
    }, // Name of the insurance provider
    policy_number: { 
        type: String, 
        required: true 
    }, // Insurance policy number
    insurance_start_date: { 
        type: Date, 
        required: true 
    }, // Insurance start date
    insurance_end_date: { 
        type: Date, 
        required: true 
    }, // Insurance end date
    maintenance_date: { 
        type: Date 
    }, // Last maintenance date
    fuel_consumption: { 
        type: Number, 
        min: 0 
    }, // Fuel consumption in liters per 100 km (or any other metric)
    daily_usage_log: { 
        type: String 
    }, // Log of daily usage (could be a reference to another model for detailed logs)
    driver_information: { 
        type: String, 
        required: true 
    }, // Information about the driver (could be a reference to a driver model)
    insurance_document: { 
        type: String 
    }, // File path or URL to the insurance document
    vehicle_documents: [{
        document_name: { 
            type: String 
        },
        document_url: { 
            type: String 
        }
    }], // Array of documents associated with the vehicle
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', VehicleSchema);
