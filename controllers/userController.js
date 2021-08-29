const User=require('../models/UserModel');


const signUp = (req, res) => {
    const user = new User(req.body);
    console.log(user);
    user.save().then(user => {
        res.json({ user: user })  
    }).catch(err => {
        res.send(err);
    });
}