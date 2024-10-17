const seuelize = require('sequelize');
const db = require('../db/connection');

//usaremos o método define do sequelize para criar o model
//passar todas as propriedades do objeto, se faltar algum o banco não será lido corretamente

const Job =db.define('job',{
    title:{
        type: Sequelize.STRING,
    },
    description:{   //esse não foi criado
        type: Sequelize.STRING,
    },
    salary:{
        type: Sequelize.STRING, 
    },
    company:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.STRING,
    }
});

module.exports = Job