const express = require('express');
const route = express.Router();
var accounts = require('./database');

route.get('/accounts',(req,res)=>{
    res.json({userdata: accounts});
})

route.post('/accounts',(req,res)=>{
    const inaccount = req.body;
    console.log(inaccount);
    accounts.push(inaccount);
    res.json(accounts);
})

route.get('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id)
    const getAccount = accounts.find((account)=>
        account.id===accountid)

    if(!getAccount){
        res.status(500).send("account not found")
    }else{
        res.json({userdata: getAccount});
    }
});

route.put('/accounts/:id',(req,res)=>{
    const accountid  = Number(req.params.id)
    const body = req.body;
    const acct = accounts.find((account)=>account.id===accountid)
    const index = accounts.indexOf(acct)
    if(!acct){
        res.status(500).send("account not found")
    }
    else{
        const updateAccount = {...acct,...body}
        accounts[index]=updateAccount;
        res.json(accounts[index]);
    }

});

route.delete('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id)
    const newaccount = accounts.filter((account)=>account.id!=accountid)
    if(!newaccount){
        res.status(500).send("account not found");
    }else{
    accounts = newaccount;
    res.send(accounts);
    }

})

module.exports = route;