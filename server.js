//===== DEPENDENCIES ======//
require('dotenv').config();
const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 5000;

// see env variables
// console.log(process.env);
// console.log(process.env.DB_USER);


//===== MONGOOSE ======//

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

// mongodb+srv://planner-admin:<password>@cluster0.zbv75.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.set('useFindAndModify', false)

const eventController = require('./controllers/EventController')
// const productRatingsController = require('./controllers/ProductRatingsController')

//===== EXPRESS SETUP ======//

// tells Express app to parse incoming form requests,
// and make it available in req.body
app.use(cors());
app.use(express.urlencoded({
  extended: true
}))

app.get("/api/v1", (req, res) => {
    res.status(200).json({
      success: true,
      message: "planner api reached",
    });
  });


//===== ROUTES ======//
app.get("/api/v1/calendar", eventController.listEvents);

app.post("/api/v1/event", eventController.createEvent);



//===== LISTENERS ======//
mongoose.connect( mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(response => {
    // DB connected successfully
    console.log('DB connection successful')

    app.listen(port, () => {
      console.log(`Planner app listening on port: ${port}`)
    })
  })
  .catch(err => {
    console.log(err)
  })

