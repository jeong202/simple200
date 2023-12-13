const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userNum: Number,
        email: String,
        displayName: String,
        id: string,
    },
    { collection: "user" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };