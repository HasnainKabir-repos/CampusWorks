const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const UserProfile = require('../models/user_model');


const authenticate = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
      const user = await User.findOne({ _id: decoded._id });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: 'Authentication failed' });
    }
  };

router.post('/', authenticate, async (req, res) => {
    try {
        const { email } = req.user;

        const userProfile = {
            $set :
            {
                useremail: email,
                Bio: req.body.Bio,
                Result: req.body.Result,
                Strength: req.body.Strength,
                Experience:req.body.Experience,
                Education: req.body.Education,
                Achievements: req.body.Achievements
    }
};

        //await userProfile.save();

        const filter = {useremail : email};

        await UserProfile.findOneAndUpdate(filter, userProfile, {
            new: true,
            upsert: true
          });

      res.status(200).send({ email : email,
       message: 'User Profile Updated successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  });


  router.get('/', authenticate, async (req, res) => {
    try {
        const { email } = req.user;
        const userProfiles = await UserProfile.findOne({ useremail: email });
      
      return res.json(userProfiles);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving user profiles', error: error });
    }
  });
  
  router.get('/find',  async (req, res) => {
    try {
        const { email } = req.query;
        const userProfiles = await UserProfile.findOne({ useremail: email });
      
      return res.json(userProfiles);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving user profiles', error: error });
    }
  });
  
module.exports = router;