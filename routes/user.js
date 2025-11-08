const { Router } = require("express");
const { userModel } = require("../db"); 
const jwt = require ("jsonwebtoken");
const JWT_USER_PASSWORD = "ANKIT34"

const userRouter = Router();


userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body; //Todo adding zod validation
        // TODO: hash the password so plaintext pw is not stored in the DB

        // TODO: Put inside a try catch block
        await userModel.create({
            email,                  // email: email,
            password,               // password: password,
            firstName,              // firstName: firstName,
            lastName                // lastName: lastName       // all this do the same as we saw
        })
    res.json({
        message:'signup succeeded'
    })
});

userRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;
     // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await userModel.findOne({
        email,
        password
    });

    if (user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        // Do cookie logic

    res.json({
        token: token
    })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

userRouter.get("/purchases", async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
    })
})

module.exports = {
    userRouter: userRouter
}