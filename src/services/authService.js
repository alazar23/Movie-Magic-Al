const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const SECRET = '1pij4oi13jrei9oijfsdjf3'

exports.register = (userData) => User.create(userData)

exports.login = async (email,password) =>{

    const user = await User.findOne({ email });
    
    if(!user)  {
        throw new Error('Cannot find email or password!')
       
    } 
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Cannot find email or password');
    }
    
    const payload = {
        email : user.email,
        _id : user._id
    }
    
    const token = await jwt.sing(payload,SECRET,{expiresIn:'1h'})

    return token
}

