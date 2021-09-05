const express = require('express');
const router = express.Router();

const medicalRecordController = require('../app/controllers/MedicalRecordController');


router.post('/handle-form-action', medicalRecordController.handFormAction);
router.patch('/:id/restore', medicalRecordController.restore);
router.delete('/:id/xoa-that', medicalRecordController.destroyThat);
router.get('/:id', medicalRecordController.show);
router.delete('/:id', medicalRecordController.destroy);
module.exports = router;
