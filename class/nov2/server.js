const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/animals", (req, res)=>{
    const animals =[];
    animals[0]={
        name: "octopus",
        color:"purples",
        state:"happy",
        place:"garden"
    };
    animals[1]={
        name: "cat",
        color:"yellow",
        state:"napping",
        place:"garden"
    };
    animals[2]={
        name: "bear",
        color:"brown",
        state:"laughing",
        place:"garden"
    };

    res.json(animals);
});

app.listen(3000, ( )=> {
    console.log("listening");
});