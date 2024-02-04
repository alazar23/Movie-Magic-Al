const jwt = require('jsonwebtoken')

function sing(payload,secretOrPrivateKey,options = {}) {
    const promise = new Promise((resolve,reject)=>{
        jwt.sign(payload,secretOrPrivateKey,options,(err,token)=>{
            if(err) {
                return reject(err)
            }
            resolve(token)
        })
    })
    return promise
}

module.exports = {
    sing,
}