const express = require('express');
const router = express.Router();

const addschedulecontroller = require('/NCKH/OnlineClinic/src/app/controllers/AddScheduleController');

router.get('/create',addschedulecontroller.create);

module.exports = router;