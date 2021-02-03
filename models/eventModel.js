const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    // var name below TBC
    // id: {
    //     type: Number,
    //     required: true,
    //     max: 255,
    // },
    // calendarId: {
    //     type: String,
    //     required: true, 
    // },
    title: {
        type: String,
        required: true, 
    },
    category: {
        type: String,
        required: true, 
    },
    // dueDateClass: {
    //     type: String,
    // },
    // start: {
    //     type: Date,
    //     // required: true,
    //     // default: Date.now, // check time later
    // },
    // end: {
    //     type: Date,
    //     // required: true,
    //     // default: Date.now, // check time later
    // },
    // isReadOnly: {
    //     type: Boolean,
    //     required: true,
    //     default: false,
    // },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now, 
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now, 
    },

//   id: {
//     type: Number,
//     required: true,
//     max: 255,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   startTime: {
//     type: Date, // check time later
//     required: true, 
//   },
//   endTime: {
//     type: Date, // check time later
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//     enum: [
//         "Furniture",
//         "Appliances",
//         "Infant and Children",
//         "Medical Aids",
//         "Food",
//       ],
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   cal_name: {
//     type: String,
//     required: true,
//     default: "Main",
//   },
// //   postedBy: {
// //     //comment out for Postman test
// //     type: mongoose.Schema.ObjectId,
// //     ref: "User",
// //     required: true,
// //     // // for Postman test only
// //     // type: String,
// //     // required: true,
// //   },
});

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;