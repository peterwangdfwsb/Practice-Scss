const express = require('express'); 
const router = express.Router();        
const app = express(); 
const cors = require('cors');                

// base
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 4000;    

// allows CORS
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Resource-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "*");
    console.log("requst url = " + req.url);
	next();
})

//Test for Postman
app.get('/', (req, res) => {
    res.json({ message: 'Hello World Sun Moon' });   
});

app.listen(port, () => {
    //console.log('Magic happens on port ' + port)};
    console.log('Hello World');
);