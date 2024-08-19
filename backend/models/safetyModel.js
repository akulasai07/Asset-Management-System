const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SafetyAndSecuritySchema = new Schema({
    type: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    certification: {
        type: String
    },
    last_inspection_date: {
        type: Date,
        required: true
    },
    next_inspection_due: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    usage_history: [{
        date: {
            type: Date
        },
        description: {
            type: String
        }
    }],
    warranty_information: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('SafetyAndSecurity', SafetyAndSecuritySchema);
