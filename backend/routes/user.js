const express = require("express");
const zod = require("zod");
const router = express.Router();
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET} = require("../config")



const signupBody = zod.object({
    username : zod.String().email(),
    password : zod.String(),
    firstName : zod.String(),
    lastName : zod.String(),
})
//for zod schema

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg : "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg : "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username : req.body.user,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message : "User created successfully",
        token: token
    })
})


///signin
const signinBody = zod.object({
    username : zod.String().email(),
    password : zod.String(),
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg : "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password,
    });

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

})
module.exports = router;