//===== DEPENDENCIES ======//
require('dotenv').config();
const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT; //5000

// see env variables
// console.log(process.env);
// consosle.log(process.env.DB_USER);


//===== MONGOOSE ======//
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.set('useFindAndModify', false)

const eventController = require('./controllers/EventController')

//===== EXPRESS SETUP ======//
// tells Express app to parse incoming form requests,
// and make it available in req.body
// app.use(
//   cors({
//       origin: "http://localhost:3000",
//   })
// );
app.use(cors());
// //set pre-flight request
// app.options("*", cors());


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
app.get("/api/v1/events", eventController.listEvents);

app.get("/api/v1/events/:id", eventController.getEvent);

app.post("/api/v1/events", eventController.createEvent);

app.patch("/api/v1/events/:id", eventController.updateEvent);

app.delete("/api/v1/events/:id", eventController.deleteEvent);


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

