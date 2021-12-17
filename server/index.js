const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({
    origin: '*'
}));



// Middleware
app.use(express.json())




app.get("/api/products", async (req, res) => {

    await axios.get('https://fakestoreapi.com/products', {
       
      })
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        res.json(error);
      })
    
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started at PORT ${PORT}`));