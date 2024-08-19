const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationalSuppliesSchema = new Schema({
    type: { 
        type: String, 
        required: true 
    }, // Type of supply (e.g., books, markers)
    subject_or_grade: { 
        type: String, 
        required: true 
    }, // Associated subject or grade level
    quantity_on_hand: { 
        type: Number, 
        required: true, 
        min: 0 
    }, // Quantity available
    reorder_level: { 
        type: Number, 
        required: true, 
        min: 0 
    }, // Level at which reordering is needed
    condition: { 
        type: String, 
        enum: ['New', 'Good', 'Fair', 'Poor'], 
        required: true 
    }, // Condition of the supplies
    last_purchase_date: { 
        type: Date 
    }, // Date of the last purchase
    location: { 
        type: String, 
        required: true 
    }, // Location where supplies are stored
}, { timestamps: true });

module.exports = mongoose.model('EducationalSupply', EducationalSuppliesSchema);
