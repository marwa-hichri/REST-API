const user =require('../model/user');
//post user
exports.postuser =async(req,res)=>{
    try {
        const {firstname,CIN,phone} =req.body
        if(!firstname || !CIN || !phone){
            return res.status(400).send({message:"please entrer fields"})
        }
        const checkExistCIN = await user.fineOne({CIN:CIN})
        if(checkExistCIN){
            return res.status(400).send({msg:"contact already exist"})
        }

        const checkExistphone = await user.fineOne({phone:phone})
        if(checkExistphone){
            return res.status(400).send({msg:"phone already exist"})
        } 
        const newuser = new user({firstname,CIN,phone})
       await  newuser.save()
       return res.status(200).send({msg:"new employee created",Response:newuser})


    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:" Sorry cannot  add user "})
        
    }
}
//get user
exports.getuser =async(req,res)=>{
    try {
        const result= await user.find({})
        return res.status(200).json({message:"Getting contact seccesfuly"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Sorry cannot get Contact...")
        
    }
   
}
//get by Id
exports.getuserById =async(req,res)=>{
    try {
        const {id}=req.params
        const result= await user.findById({id})
        return res.status(200).json({message:"Getting contact seccesfuly",Response:result})
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Sorry cannot get Contact...")
        
    }
   
}
exports.deleteuserById =async(req,res)=>{
    try {
        const {id}=req.params
         await user.deleteone({_id:id})
        return res.status(200).json({message:"Deleting contact seccesfuly"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Sorry cannot delete Contact...")
        
    }
   
}
exports.updateuserById =async(req,res)=>{
    try {
       
        const result= await user.updateone({ _id:req.params.id},{$set:{...req.body}})
        return res.status(200).json({message:"Getting contact seccesfuly",Response:result})
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Sorry cannot updateContact...")
        
    }
   
}
