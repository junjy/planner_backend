const mongoose = require("mongoose");
const eventModel = require("./../models/eventModel");

const eventControllers = {

    listEvents: async (req, res) => {

        try {
            const events = await eventModel.find()
      
            if (!events) {
              res.status(404).json({
                success: false,
                message: "Events not found",
              });
              return;
            }
      
            res.status(200).json({
              success: true,
              events,
            });
          } catch (err) {
            res.status(500).json({
              success: false,
              message: err.message,
            });
          }

    },
  
    createEvent: async (req, res) => {

        const { id, calendarId, title, category, dueDateClass } = req.body;

        console.log(req.body);

        try {
          if (!id || !calendarId || !title || !category) {
            res.status(400).json({
              success: false,
              message:
                "Id, calendarId, title and category must be provided",
            });
            return;
          }

          const event = await eventModel.create({
            id,
            calendarId,
            title,
            category,
            dueDateClass,
            // id: req.body.id,
            // calendarId: req.body.calendarId,
            // title: req.body.title,
            // category: req.body.category,
            // dueDateClass: req.body.dueDateClass,
          });
    

          res.status(200).json({
            success: true,
            event,
          });

        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          });
        }
    },

};

module.exports = eventControllers;
