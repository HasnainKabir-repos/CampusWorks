const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/userID', async (req, res) => {
  try {
    const { userId } = req.query;

    let user;
    if (userId) {
      user = await User.findById(userId);
    } 
     else {
      return res.status(400).json({ message: 'User ID or useremail is required' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { name, email, department, batch } = user;
    return res.json({ name, email, department, batch });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
