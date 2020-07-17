const express = require('express');
const auth = require('../middlewares/auth');
const Subject = require('../db/models/subject');

const router = express.Router();

//TO ADD A NEW SUBJECT
router.post('/api/subject', auth, async (req, res)=>{
    const subject = new Subject({
        ...req.body,
        author: req.user._id
    });

    try{
        await subject.save();
        res.status(200).send(subject);
    } catch(err){
        res.status(400).send(err);
    }
})

//GET ALL SUBJECTS
router.get('/api/subjects', auth, async (req, res)=>{
    try{
        await req.user.populate('subjects').execPopulate();
        res.status(201).send(req.user.subjects);
    } catch(err){
        res.status(400).send(err);
    }
})

//GET A SUBJECT BY SPECIFYING ITS _id
router.get('/api/subject/:id', auth, async (req, res)=>{
    const _id = req.params.id;
    try {
        const subject = await Subject.findOne({_id, author: req.user._id});
        if (!subject) {
            return res.status(404).send();
        }
        res.send(subject);
    } catch (e) {
        res.status(502).send();
    }
})

//EDIT A SUBJECT BY SPECIFYING ITS ID
router.patch('/api/subject/:id', auth, async (req, res)=>{

})

//DELETE ALL SUBJECTS
router.delete('/api/subjects', auth, async (req, res)=>{
    try{
        await Subject.deleteMany({author: req.user._id});
        res.status(200).send();
    } catch(err){
        res.status(400).send(err);
    }
})

//DELETE A SUBJECT BY SPECIFYING ITS ID
router.delete('/api/subject/:id', auth, async(req,res)=>{
    const _id = req.params.id;
    try{
        await Subject.deleteOne({_id, author: req.user._id});
        res.status(200).send();
    } catch(err){
        res.status(400).send(err);
    }
})

//EXPORTING THE ROUTER TO BE USED IN OTHER FILES
module.exports = router;