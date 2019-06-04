var express = require('express');
var router = express.Router();
var path = require('path');
var Campaign = require('../models').Campaign;
var Event = require('../models').Event;
var sequelize = require('../models').sequelize;
const NetValues = require('../lib/NetValues');
var moment = require('moment');



router.post('/', async (req, res, next) => {
  console.log('session get');

  //   console.log('req.session.userid:', req.session.user.id);
  const now_time = moment().valueOf();
  const user_qey = await Campaign.findAll({

    where: {
      id: req.body.campaign_id
    },
    include: [{
      model: Event
    }]
  });
  console.log('req:', user_qey);
  console.log('req:', user_qey.length);
  let data = {};
  if (user_qey.length > 0) {
    data.qery = user_qey;
    data.res = NetValues.REQ_OK;
  } else {
    data.res = NetValues.REQ_NO;
  }
  res.send(data);
});


module.exports = router;
