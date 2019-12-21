const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) =>{
  try {
    const citys =[
      {
        cityName : 'Sunnyvale',
        zipcode : 33325
      },
      {
        cityName: 'newyork',
        zipcode: 33325
      },
      {
        cityName: 'washingtonDc',
        zipcode: 33325
      },
    ]
    res.send(citys);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
