const {Sequelize,DataTypes} = require('sequelize');



const sequelize = new Sequelize("cabproject","root","lokeshlee25@L",

{

    host: "localhost",

    dialect:"mysql"

});





module.exports.sequelize = sequelize;
