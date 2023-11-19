const express=require("express");

const authRoutes=require("./authRoutes");
const blogRoutes=require("./blogRoutes");

const router=express.Router();

router.use("/auth",authRoutes);
router.use("/blog",blogRoutes);

module.exports=router;