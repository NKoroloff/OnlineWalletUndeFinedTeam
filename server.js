const express = require('express');
const mysql = require('mysql');
const session =  require ('express-session');

app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./dist'));
app.use(express.static('./assets'));

app.use(session ({
    secret: '7djh347dkkhs98fjk21f',
    maxAge: new Date(Date.now() + 3600000),
    expires: new Date(Date.now() + 3600000),
    resave:false,
    saveUninitialized:true,

}));

app.get('/view-dashboard', function (req, res) {

    if (req.session.isvalid)
        res.sendFile(path.join(__dirname + '/dist/dashboard.html'));
    else
        res.redirect(301, '/');

});

app.post('/check-login', function (request, response) {
    console.log('got login: '+request.body.login);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "baza_test1"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        const queryString = `SELECT * FROM users WHERE login = '${request.body.login}' AND password = '${request.body.password}' AND device = '${request.body.device}'`;
        console.log(queryString);
        con.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            if (result.length > 0)
            {
                request.session.userId = result[0].id;
                console.log(JSON.stringify(result));
                response.json({ok: true, messages:["aaaa","bbbb"]});
            }
            else
            {
                console.log("Fail");
                response.json({ok: false});
            }
        });
    });

});



app.post('/check-twofactor', function (request, response) {
    if (request.body.authcode == '123456') {
        request.session.isvalid = true;
        response.json({ok: true});
    } else {
        response.json({ok: false});
    }
});


app.listen(8000);
