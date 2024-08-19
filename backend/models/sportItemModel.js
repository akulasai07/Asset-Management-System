const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  sport_name: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    enum: ['New', 'Good', 'Fair', 'Poor'], // Adjust conditions as needed
    required: true
  },
  last_maintenance_date: {
    type: Date,
    required: true
  },
  quantity_on_hand: {
    type: Number,
    required: true,
    min: 0
  },
  reorder_level: {
    type: Number,
    required: true,
    min: 0
  },
  usage_history: [{
    date: {
      type: Date
    },
    quantity_used: {
      type: Number
    },
    purpose: {
      type: String
    }
  }],
  location: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Sport', SportSchema);