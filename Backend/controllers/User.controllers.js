import User from "../models/User.model.js";
// creating data 
 const create=async(req,res)=>{
    try {
        const UserData=new User(req.body)
        if(!UserData){
            return res.status(404).json({success:false, message:"User Not Found"})
        }
        const savedUser=await UserData.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

// fetching data 
const getAll=async(req,res)=>{
    try {
        const userdata=await User.find()
        if(!userdata){
            return res.status(404).json({success:false, message:"users not found"})
        }
        res.status(200).json(userdata)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

// fetching single data by id 
const getOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const UserExist=await User.findById(id)
        if(!UserExist){
            return res.status(404).json({success:false, message:"User Not Found"})
        }
        res.status(200).json(UserExist)
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
}

// updating datas 

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const UserExist = await User.findById(id);
        if (!UserExist) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// delete user
const Delete=async(req,res)=>{
    try {
        const id=req.params.id;
        const UserExist=await User.findById(id)
        if(!UserExist){
            return res.status(404).json({success:false,message:'user not found'})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'user deleted successfully'})
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }

}


export {
    create,
    getAll,
    getOne,
    update,
    Delete
}

// // creating data 
// const create=async(req,res)=>{
//     try {
//         const userdata= new User(req.body)
//         if(!userdata){
//             return res.status(404).json({success:false,message:'user not found'})
//         }
//         const saveduser=await userdata.save()
//         res.status(200).json({success:true,message:'data saved successfully',data:saveduser})
//     } catch (error) {
//         return res.status(500).json({message:error.message})
        
//     }
// }

// // fetching all data 
// const getAll=async(req,res)=>{
//     try {
//         const userdata=await User.find()
//         if(!userdata){
//             return res.status(404).json({success:false,message:'user not found'})
//         }
//         res.status(200).json({success:true,message:'data fetched successfully',data:userdata})
//     } catch (error) {
//         return res.status(500).json({message:error.message})
        
//     }
// }

// // single fetch data 

// const getOne=async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const UserExist=await User.findById(id)
//         if(!UserExist){
//             return res.status.json(404).json({success:false,message:'user not found'})
//         }
//         res.status(200).json({success:true,message:'user found successfully',data:UserExist})
//     } catch (error) {
//         return res.status(500).json({message:error.message})
        
//     }
// }

// // updating data 
// const update=async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const UserExist=await User.findById(id)
//         if(!UserExist){
//             return res.status(404).json({success:false,message:'user not found'})
//         }
//         const updateuser= await User.findByIdAndUpdate(id,req.body,{new:true})
//         res.status(200).json({success:true,message:'data updated successfully',data:updateuser})
//     } catch (error) {
//         return res.status(500).json({message:error.message})
        
//     }
// }

// export{create,getAll,getOne,update}
