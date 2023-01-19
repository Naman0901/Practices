var express = require('express');
var router = express.Router();

const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}

router.post('/login',(req,res)=>{
    if(req.body.email==credentials.email &&
        req.body.password == credentials.password){
            req.session.user = req.body.email;
            res.redirect("/route/dashboard");
            //res.end("Login Successful...")
    }
    else{
        res.end("invalid username");
    }
});

router.get('/dashboard', (req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("Unauthorize User");
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send("Error");            
        }else{
            res.render('base', {title: "Login System", logout: "Logout Successfully"})
        }
    })
})

module.exports = router;