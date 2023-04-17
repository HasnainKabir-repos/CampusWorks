const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const Job = require('../models/job');


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
        const { email} = req.user;

        const newJob = new Job({
            userEmail : email,
            jobName : req.body.jobName,
            jobCategory : "Job",
            jobDescription : req.body.jobDescription,
            jobDuration : req.body.jobDuration,
            price : req.body.price,
            keywords: req.body.keywords 
        });

        await newJob.save();

      res.status(200).send({ email : email,
        message: 'Job created successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  });


router.get('/', authenticate, async (req, res) => {
  try {
    const jobs = await Job.find().sort({datePosted: -1});
    return res.json(jobs);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving jobs', error: error });
  }
});

module.exports = router;

