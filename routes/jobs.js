const express = require('express');
const routes = express.Router();
const Job = require('../models/Job');

//para testar
Router.get('/test',(req,res) => {
    res.send('deu certo')
});                     //no terminal>npm run dev ; abra o postman>get>localhost:3000/jobs/test

//add job via post
Router.post('/add',(req,res) =>{
    let{title,salary,company,description, email, new_job} = req.body;

    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))   //não pode ter ; senão o catch fica errado
    .catch(err => console.log(err));
});

module.exports = router



