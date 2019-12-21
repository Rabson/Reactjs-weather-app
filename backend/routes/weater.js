const express = require('express');
const router = express.Router();
const services = require('../services/weaterApi')



router.get('/:id', async (req, res, next) => {
  try {
    const resp = await services.forecast(req.params.id ? req.params.id : '');
    res.send(resp);
  } catch (err) {
    console.log(err);
    res.send(err)
  }
});


// https://www.yahoo.com/news/weather/united-states/sunnyvale/sunnyvale-2502265
//  https://www.yahoo.com/news/weather/united-states/sunnyvale/2502265
router.get('/:country/:city/:zipcode', async (req, res, next) =>{
  try {
    const { country, city, zipcode } = req.params;
    if(!country || !city || !zipcode) {
      res.send('Invalid  data');
    }
    const resp = await services.forecastByZIpcode(req.params);
    res.send(resp);
  } catch (err) {
    console.log(err);
    res.send(err)
  }
});

module.exports = router;
