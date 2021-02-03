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
            return;
          } catch (err) {
            res.status(500).json({
              success: false,
              message: err.message,
            });
          }

    },

    getEvent: async (req, res) => {
        const { id } = req.params;

        try {
          const event = await eventModel.findOne({ _id: id })
    
          if (!event) {
            res.status(404).json({
              sucess: false,
              message: "Event not found",
            });
            return;
          }

        //   res.json(event);
    
          res.status(200).json({
            success: true,
            event,
          });
          return;
        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          });
        }

    },
  
    createEvent: async (req, res) => {
        // const { title, category } = req.body;
        const { title, category, start, end } = req.body;
        console.log(req.body);

        try {
        //   if ( !title || !category ) {
          if ( !title || !category || !start || !end ) {
            res.status(400).json({
              success: false,
              message:
                "Title, category, start & end must be provided",
            });
            return;
          }

          const event = await eventModel.create({
            // id,
            // calendarId,
            title,
            category,
            start,
            end
            // dueDateClass,
          });
    
          res.status(200).json({
            success: true,
            event,
          });
          return;
        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          });
        }
    },

    updateEvent: async (req, res) => {
        const { id } = req.params;

        try {
        // check if any input fields were left blank
        const eventUpdates = {};
        const formValues = req.body;
        let updateNum = 0;
        console.log(formValues);

        for (const prop in formValues) {
            if (formValues[prop]) {
            eventUpdates[prop] = formValues[prop];
            updateNum += 1;
            }
        }

        if (updateNum === 0) {
            res.statusCode = 406; // 406-not acceptable
            res.json({
            success: false,
            message: "No fields were updated. Please try again.",
            });
            return;
        }

        // check if event exists
        let event = await eventModel.findOne({ _id: id });
    
          if (!event) {
            res.status(404).json({
              success: false,
              message: "Event not found",
            });
            return;
          }

        event = await eventModel.findOneAndUpdate(
            {
                _id: id,
            }, 
            {
                $set: eventUpdates,
            });
    
          res.status(200).json({
            success: true,
            message: "Event updated",
          });
          return;
        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          });
        }

    },

    deleteEvent: async (req, res) => {
        const { id } = req.params;

        try {
          const response = await eventModel.deleteOne({ _id: id });
    
          if (response.n === 0) {
            res.status(404).json({
              success: false,
              message: "Event not found",
            });
            return;
          }
    
          res.status(200).json({
            success: true,
            message: "Event deleted",
          });
          return;
        } catch (err) {
          res.status(500).json({
            success: false,
            message: "Error deleting event",
          });
        }
      },

};

module.exports = eventControllers;
