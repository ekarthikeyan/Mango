let express = require('express');
let app = express();

app.set('view engine', 'ejs');

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('in use statement');
    next();
});

app.get('/', function(req, res) {
//    res.send('<html><head> <link href = assets/style.css type=text/css rel=stylesheet/></head><body><h1> Hello World !! </h1></body></html>');
res.render('index');
});

app.get('/person/:id', function(req, res) {
    //res.send('<html><h1> Hello World !!' + req.params.id + ' </h1></html>');
    res.render('person', {ID: req.params.id, QRY: req.query.qstr});
});


app.get('/api', function(req, res) {
    res.json({fisrtName : 'Karthikeyan', lastName : 'Eswar'});
});  

app.listen(port);
