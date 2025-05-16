import mongoose from "mongoose";
const userSchsema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true     
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model('User',userSchsema) 
export default User;