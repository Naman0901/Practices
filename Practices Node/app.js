var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.send('this is the home page');
})
app.get('/contact', (req,res)=>{
    res.send('this is the contact page');
})

app.get('/profile/:id', (req,res)=>{
    var data = {age: 29, job: 'ninja', hobby: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);
