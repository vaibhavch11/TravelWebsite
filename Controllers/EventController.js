const config=require('../config/config.json');

const {Sequelize}=require('sequelize');
console.log(config);

const EventDB = new Sequelize({
    dialect: 'mysql',
    storage: 'path/to/database.sqlite',
    username:config["development"]["username"],
    password:config["development"]['password'],
    host:config["development"]['host'],
    port:config["development"]['port'],
    database:'trip_log'
  });
class Events{
    static async createEvent(req,res){
        console.log('inside create event');
        
        let {EventId,Place,email,password,startDate,endDate,eventName}=req.body;
        let data={
            EventId:EventId,
            Place:Place,
            email:email,
            password:password,
            startDate:startDate,
            endDate:endDate,
            eventName:eventName,
            creartedAt:new Date(),
            updatedAt:new Date()
        }
        let event=await EventDB.create(data);
        console.log(event);
        res.json({data:event});




    }
    static async getEvent(req,res){
        console.log('inside getEvent');
        let event=await EventDB.query("SELECT * FROM `Events`", {raw:true});;
        console.log(event);
        res.json({data:event});
    }
}
module.exports=Events