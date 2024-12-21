const express = require('express');
const router = express.Router();

const userModel = require('../models/user.model');


router.get('/items', async(req,res)=>{
    const users=await userModel.find();
    res.json(users);
});

router.post('/create', async (req,res)=>{
   
    const {username, email, password} = req.body;

    if(!username || !email || !password){
       return res.status(400).json({message:'please enter all fields'})
    }

    try {
        const newUser = new userModel({username, email, password});
        await  newUser.save();
        res.status(200).json({data:newUser,message:'user created'});

        
    } catch (error) {
        if(error.code ===11000){
            res.status(400).json({message:'email or password  exists'})

        }else{
            res.status(500).json({message:'server error'});
        }
    }
});

router.post('/deleteOne/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedItem = await userModel.findByIdAndDelete(id);
        if (!deletedItem) { return res.status(404).json({ message: 'Item not found' }); }
        res.status(200).json({deletedItem,massage:'success'})
    } catch (error) {
        res.status(400).json({error:error})
    }
});

router.put('/update/:_id',async(req,res)=>{
    const {_id}=req.body;
    const {username,email,password}=req.body

    try {
        const updatedItem= await userModel.findByIdAndUpdate(_id,{username,email,password});
        res.status(200).json({updatedItem,message:"success"})

        if (!updatedItem) { return res.status(404).json({ message: 'Item not found' }); }
        
    } catch (error) {
        res.status(400).json({error:error});
    }
})



module.exports = router