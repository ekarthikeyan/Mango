//this is an ex for POST using BODY Parser
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.set('view engine', 'ejs');

var port = process.env.port || 3000;
//standard line from the webpage. 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('in use statement');
    next();
});

app.get('/', function(req, res) {
//    res.send('<html><head> <link href = assets/style.css type=text/css rel=stylesheet/></head><body><h1> Hello World !! </h1></body></html>');
res.render('index');
});

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you !!');
    console.log(req.body.firstName);
    console.log(req.body.lastName);

});

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thank you for the json !!');
    console.log(req.body.firstName);
    console.log(req.body.lastName);

});

app.get('/person/:id', function(req, res) {
    //res.send('<html><h1> Hello World !!' + req.params.id + ' </h1></html>');
    res.render('person', {ID: req.params.id, QRY: req.query.qstr});
});


app.get('/api', function(req, res) {
    res.json({fisrtName : 'Karthikeyan', lastName : 'Eswar'});
});  

app.listen(port);

