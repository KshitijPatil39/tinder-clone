import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";


// App config
var app = express();
const port = process.env.PORT || 5000;
const connection_url = "mongodb+srv://Admin:NEQr3qeHz6MtLsy@cluster0.fsuy5.mongodb.net/tinderdb?retryWrites=true&w=majority"

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req, res) => {
  console.log(res.statusCode);
    res.send("Hello world");

})

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

});

app.get("/tinder/cards",  (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

});

//Listener
app.listen(port, () => console.log(`listening on localhost ${port}`));

//data base pass: NEQr3qeHz6MtLsy;
