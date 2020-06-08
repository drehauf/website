const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  rentalRate: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Anlagen', 'Kabel', 'Mikrofone', 'Licht', 'Strom'],
    required: true
  },
  commonName: {
    type: String
  },
  storageLocation: {
    type: String,
  },
  exactLocation: {
    type: String
  },
  serialNumber: {
    type: String
  },
  status: {
    type: String
  },
  purchaseDate: {
    type: Date
  },
  pricePerUnit: {
    type: Number,
    min: 0
  },
  priceTotal: {
    type: Number,
    min: 0
  }
});

module.exports = mongoose.model('equipment', EquipmentSchema);