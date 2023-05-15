const express=require("express");
const router=express.Router()
const controllers = require("../Controllers/userControllers");


router.post("/newuser",controllers.postuser);
router.get('/',controllers.getuser);
router.get("/:id",controllers.getuserById);
router.delete("/:id",controllers.deleteuserById);
router.put("/:id",controllers,controllers.updateuserById)
module.exports = router;