const express = require('express');
const router = express.Router();
const Equipment = require('../../models/Equipment');
const validateEquipmentInput = require('../../validation/equipment');

router.post('/add', (request, result) => {

  const { errors, isValid } = validateEquipmentInput(request.body);
  if (!isValid) {
    return result.status(400).json(errors);
  }

  Equipment.findOne({ name: request.body.name })
  .then((item) => {
    if (item) {
      return result.status(404).json({
        error: `Equipment is already in use, try modifying '${request.body.name}' instead`
      });
    } else {
      const newItem = new Equipment({
        name: request.body.name,
        amount: request.body.amount,
        rentalRate: request.body.rentalRate,
        category: request.body.category,
        commonName: request.body.commonName,
        storageLocation: request.body.storageLocation,
        exactLocation: request.body.exactLocation,
        serialNumber: request.body.serialNumber,
        status: request.body.status,
        purchaseDate: request.body.purchaseDate,
        pricePerUnit: request.body.pricePerUnit,
        priceTotal: request.body.priceTotal
      });
      newItem.save()
        .then((user) => {
          result.json(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  })
});

router.get('/', (request, result) => {
  Equipment.find()
  .then((item) => {
    result.json(item);
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;