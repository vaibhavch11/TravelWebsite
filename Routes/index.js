const router=require('express').Router();

router.use('/Events',require('./eventRouter'));
// router.use('Hotels',require('./hotelsRouter'));
// router.use('/Restaurent',require('./restaurentRouter'));
// router.use('/Destination',require('./destinationRouter'));
// router.use('/JaiShreeRam',require('./JaishreeramRouter'));
router.use('/',(req, res) => {
    console.log("Home");
    res.sendFile(__dirname + `/Public`);
 });

module.exports=router;


