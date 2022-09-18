const router=require('express').Router();
const Events=require('../Controllers/EventController');

router.get('/getEvents',Events.getEvent,
);

router.post('/getEvents',Events.createEvent,
);
module.exports=router;