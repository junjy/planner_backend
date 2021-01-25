// const mongoose = require("mongoose");
// const eventModel = require("../models/eventModel");

// const eventControllers = {

//     createEvent: (req, res) => {
    
//         eventModel
//           .create({
//             title: req.body.title,
//             postType: req.body.postType,
//             description: req.body.description,
//             category: req.body.category,
//             // images: req.body.images,
//             // delivery: req.body.delivery, //default
//             // status: req.body.status, //default
//             tags: req.body.tags,
//             postedBy: user.id, //req.body.postedBy
//           })
//           .then((result) => {
//             res.json({
//               success: true,
//               message: "event successfully created",
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//             res.statusCode = 500; // to check
//             res.json({
//               success: false,
//               message: "create event failed",
//             });
//           });
//       },

// };

// module.exports = eventControllers;
