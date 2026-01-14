import express = require ("express");

const app = express();
const PORT =3000;

app.get("/", (_req, res) => {
    // res.json({message: "Hello from Docker and kubernetes"});
    res.json({message: "CI TEST SUCCESSFULL and this is third commit"});
    

});
 
app.listen(PORT , ()=> {
    console.log(`Server running on port : ${PORT}`);
});