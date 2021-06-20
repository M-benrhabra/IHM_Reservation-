const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.getRegister =  (req, res) => {
    res.render('register',{
     pageTitle: 'Register',
     path: '/users/register'
 });
 };

exports.postUser = (req, res) =>{
    const Fname = req.body.FName;
    const Lname = req.body.LName;
    const Contact = req.body.Contact;
    const Email = req.body.Email;
    const Password = req.body.Password;

     // hach password
    //  const salt = bcrypt.genSalt(10);
    //  const Password = bcrypt.hash(req.body.Password, salt);
     

    User.create({
        firstName: Fname,
        lastName: Lname,
        contact: Contact,
        email: Email,
        password: Password
      })
      .then(result => {
        // console.log(result);
        console.log('Created User');
        res.redirect('/airline/index');
      })
      .catch(err => {
        console.log(err);
      });
};

exports.getLoginUser = (req, res) => {
    res.render('login',{
        pageTitle: 'Login',
        path: '/users/Login'
    });
 };
 
exports.loginUser = (req, res) =>{

};