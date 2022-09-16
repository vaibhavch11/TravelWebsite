const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

const axios = require('axios').default;



app.get('/', (req, res) => {
   console.log("Home");
   res.sendFile(__dirname + `/Public`);
})


app.post('/destination',(req,res)=>{

    try{

    
    const options = {
        method: 'POST',
        url: 'https://travel-places.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': '0647c6a7fdmsh1145dfe8ff827c3p198cd9jsn999ff72dded7',
          'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
        }
    };

    let data;
    async function getData(){
        
        data = await axios.request(options)
        console.log(data);
        
        
    }
    getData();
   console.log("destination");
   res.send("tooo");
   }
   catch(error) {
    console.error(error);
   }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})