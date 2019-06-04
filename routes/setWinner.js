var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Event = require('../models').Event;
const NetValues = require('../lib/NetValues');

/* GET users listing. */
router.post('/', async (req, res, next) => {
  console.log('session get');


  try {
    let data = {};
    let _winner_done = 0;
    if(req.body.email != ''){
      _winner_done = req.body.email.split(',').length;
    }
    await Event.update({
      winner_done: _winner_done,
      winners_id: req.body.email
    }, {
      where: {
        id: req.body.id
      }
    });
    const user_qey = await Event.findAll({
      where: {
        id: req.body.id
      }
    });
    console.log('req:', user_qey);
    data.qery = user_qey;
    data.res = NetValues.REQ_OK;
    res.send(data);
  } catch (e) {
    data.res = NetValues.REQ_LOGOUT;
    res.send(data);
  }
});

module.exports = router;
