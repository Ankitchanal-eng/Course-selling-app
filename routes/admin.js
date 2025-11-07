const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

    adminRouter.post("/signup", (req, res) => {
        res.json({
            message: "signup endpoint"
        })
    }) 

    
    adminRouter.post("/signin", (req, res) => {
        res.json({
            message: "signin endpoint"
        })
    }) 

    
    adminRouter.post("/", (req, res) => {
        res.json({
            message: "createCourse endpoint"
        })
    }) 

    
    adminRouter.put("/", (req, res) => {
        res.json({
            message: "deleteCourse endpoint"
        })
    }) 

    
    adminRouter.get("/bulk", (req, res) => {
        res.json({
            message: "addCourse endpoint"
        })
    }) 

module.exports = {
    adminRouter: adminRouter
}