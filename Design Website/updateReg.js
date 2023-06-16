// index.js

var con = require('./connection');
var express = require('express');
var app = express();

var bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/reg.html');
});

app.post('/',function(req, res){
    var vaccId = req.body.VaccId;
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var Gender = req.body.myGender;
    var dob = req.body.myDate;
    var Email = req.body.email;
    var pno = req.body.number;
    var country = req.body.country;
    var dname = req.body.DoseName;
    var dno = req.body.DoseNo;
    var vdate = req.body.VaccDate;
    var ht = req.body.HospitalType;
    var slot = req.body.shift;
    var adno = req.body.Adnumber;
    var upad = req.body.files;
    con.connect(function(error){
        if(error) throw error;

    var sql = "INSERT INTO upform(vaccId,fname,lname,Gender,dob,Email,pno,country,dname,dno,vdate,ht,slot,adno,upad) VALUES('"+vaccId+"','"+fname+"', '"+lname+"','"+Gender+"','"+dob+"','"+Email+"','"+pno+"','"+country+"','"+dname+"','"+dno+"','"+vdate+"','"+ht+"','"+slot+"','"+adno+"','"+upad+"')";
    con.query(sql,function(error,result){
        if(error) throw error;
        res.send('Vyakti ka panjikaran safaltapurna update ho chuka hai' +result.insertId);
    });
});
});
app.listen(7000);