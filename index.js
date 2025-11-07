const express = require ('express');
const mongoose = require ('mongoose');
const jwt = require ('jsonwebtoken');
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    await mongoose.connect("mongodb+srv://luckychanal32:KBNUopnzGVvnoSRq@cluster0.jnyika4.mongodb.net/courSell");
    console.log("connected to mongodb")
    
    app.listen(3000, () => {
    console.log("This port is running on http://localhost:3000");
});
}

main()