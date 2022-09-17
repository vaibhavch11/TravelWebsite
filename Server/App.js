const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

const axios = require('axios').default;


console.log('inside app.js');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(require('../Routes'));


app.post('/destination',(req,res)=>{

    try{

    
      const options = {
        method: 'GET',
        url: 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=%7Blat%7D,%7Blng%7D,%7Bradius%7D',
        params: {lang: 'en', show: 'webcams:image,location'},
        headers: {
          'X-RapidAPI-Key': '0647c6a7fdmsh1145dfe8ff827c3p198cd9jsn999ff72dded7',
          'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
        }
      };

    //destina/dehradun
    async function getData(){
        
        let data = await axios.request(options)
        return data;
        
        
        
    }
    let data =getData();
    data.then((result)=>{console.log(result.data.result.webcams[0]);
      console.log("inside then")
    res.send(result.data.result.webcams[0])}).catch((err)=>{
      console.log(err);
      console.log("inside errrosss")
      res.send(err)
    })
  
   
   }
   catch(error) {
    console.log("here in error")
    console.error(error);
   }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})