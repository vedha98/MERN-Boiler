const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');
//@route Get api/items


router.get('/',(req,res)=>{
Item.find().sort({date:-1}).then(items=>{
  res.json(items)
})

})

router.post('/',(req,res)=>{
const newItem = new Item({name:req.body.name});
newItem.save().then(item => res.json(item));

})
router.delete('/',(req,res)=>{
Item.findById(req.params.id).then(item=>{item.remove().then(()=>res.json({msg:"sucessfully removed!"}))}).catch(err=> res.status(404).json({msg:"not found"}))
})

module.exports = router;
