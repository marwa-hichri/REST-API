const mongoose=require("mongoose");
const {Schema,model} =require('mongoose')

const userSchema = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    CIN: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  });
  users=model("users",userSchema);
  module.exports=users