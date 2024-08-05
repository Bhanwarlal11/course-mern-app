const User = require("../model/user.model")
const bcryptjs = require("bcryptjs")


const signup = async (req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message: "User already exists"})

        }

        const hashPassword = await bcryptjs.hash(password,10)

        const createdUser = new User({fullname: fullname,email: email , password: hashPassword})
       await createdUser.save();

       res.status(201).json({
        message: "User Created Successfully",
        user: {
          id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        },
    });

    }
    catch(err){
        console.log("Error : ") + err.message;
        res.status(500).json({
            message: "server error"
        })
    }
}



const login = async (req,res)=> {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})

        const isMatch = bcryptjs.compare(password,user.password);
        if(!user || !isMatch) {
            return res.status(401).json({message: "Invalid Email or password"})
        }

        else{
            res.status(200).json({
                message: "Login Successful",
                user:{
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }

            })
        }
    }
    catch(err){
        console.log("Error "+ err.message);
        res.status(500).json({
            message: "Server Error"
        })
    }
}



// module.exports = signup;
// module.exports = login;


module.exports = {signup,login};