import express = require ("express");

const app = express();
const PORT =3000;

app.get("/", (_req, res) => {
    res.json({message: "Hello from Docker and kubernetes"});

});
 
app.listen(PORT , ()=> {
    console.log(`Server running on port : ${PORT}`);
});