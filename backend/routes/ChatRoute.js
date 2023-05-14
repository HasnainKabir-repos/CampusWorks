const express = require('express');
const Chat =  require("../models/chatModel.js");
const router = express.Router();

router.post("/", async (req, res) => {
    const newConversation = new Chat({
      members: [req.body.senderId, req.body.receiverId],
    });
  
    try {
      const savedConversation = await newConversation.save();
      res.status(200).json(savedConversation);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/:userId", async (req, res) => {
    try {
      const conversation = await Chat.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
