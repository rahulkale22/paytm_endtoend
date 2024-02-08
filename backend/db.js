const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kale42701:lfOmf97q2wIPe8M1@cluster0.mgggyf6.mongodb.net/");
const userSchema = mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String
});

const User = mongoose.model("User",userSchema);


module.exports = {
    User
}