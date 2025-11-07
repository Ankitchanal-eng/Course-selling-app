const { Router } = require("express");

const userRouter = Router();


userRouter.post("/signup", (req, res) => {
    res.json({
        message:'hello'
    })
});

userRouter.post("/signin", (req, res) => {
    res.json({
        message:'hello'
    })
});

userRouter.get("/purchases", (req, res) => {
    res.json({
        message:'hello'
    })
});

module.exports = {
    userRouter: userRouter
}