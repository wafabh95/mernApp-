const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.post('/adduser',(req,res)=>{
    const {fname,lname,address,phonenumber}=req.body;
    const newUser = new User({fname,lname,address,phonenumber});
    newUser
    .save()
    .then((user)=>res.send(user))
    .catch((err)=>res.status(404).send({msg:"cannot add user"}))
})

//new
//get users
router.get("/users",(req,res)=>{
    User.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>res.status(500).send(err))
})

// update user
router.put("/updateUser/:id",  async (req, res) => {

    let userId = req.params.id;
    User.findById(userId)
    .then(
      User.findByIdAndUpdate(userId, { $set: {...req.body} }, (err, res) => {
        if (err){
          throw (err);
      }
        res.save()
    })
    )
    .then((user)=>res.send(user))
  });

  //delete the user
  router.delete('/delete/:id',(req,res) => {
      User.findByIdAndDelete(req.params.id)
      .then((data)=>{
          if(!data){
              res.status(404).json({msg:"ERROR ID NOT VALID"})
          }
          else{
              res.status(200).json({msg:"user deleted"})
          }

      }).catch((err) => {res.status(400).send(err)})
  })

module.exports = router