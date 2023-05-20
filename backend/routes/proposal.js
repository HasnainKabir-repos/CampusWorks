const express = require('express');
const router = express.Router();
const Proposals = require('../models/proposals');


router.post('/',  async (req, res) =>{
    try{
        const newProposal = new Proposals({
            senderEmail: req.body.senderEmail,
            receiverEmail: req.body.receiverEmail,
            jobId: req.body.jobId,
            proposedPrice: req.body.proposedPrice,
            coverLetter: req.body.coverLetter
        });

        await newProposal.save();

        res.status(200).send({ message: 'Proposal Sent Successfully' });
    }catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

router.post('/getproposals', async(req, res) =>{
    try {
        const proposals = await Proposals.find({jobId: req.body.jobId}).sort({date: -1});
        return res.json(proposals);
      } catch (error) {
        return res.status(500).json({ message: 'Error retrieving proposals', error: error });
      }
});

router.post('/delete', async (req, res) => {
    try {
      const id = req.body.id;
      await Proposals.findByIdAndDelete(id);
      res.status(200).json({ message: 'Proposal deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting proposal', error: error });
    }
});

module.exports = router;