var requirejs = require('requirejs');

requirejs.config({
   //Pass the top-level main.js/index.js require
   //function to requirejs so that node modules
   //are loaded relative to the top-level JS file.
   nodeRequire: require
});

requirejs([
  'express',
  'path',
  'serve-favicon',
  'morgan',
  'cookie-parser',
  'body-parser',
  './routes/index',
  './routes/users'
  ],

  function (express, path, favicon, logger, cookieParser, bodyParser, index, users) {

    var app = express();

   // Specify Listening PORT
   app.listen(3000, function() {
     console.log('App listening on the 3000 port!')
   });

   // view engine setup
   app.engine('html', require('ejs').renderFile);
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'html');

   // uncomment after placing your favicon in /public
   //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
   app.use(logger('dev'));
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(cookieParser());

   // Expose UI Folder
   app.use(express.static(path.join(__dirname, 'public')));
//    app.use(express.static('public'));

   // ADDING ROUTES
   app.use('/', index);
   app.use('/users', users);

   // REST API definitions - GET
   app.get('/', function(req, res){
     res.send('Hello World!')
   });

   // ERROR HANDLING
   // catch 404 and forward to error handler
   app.use(function(req, res, next) {
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
   });

   // error handler
   app.use(function(err, req, res, next) {
     // set locals, only providing error in development
     res.locals.message = err.message;
     res.locals.error = req.app.get('env') === 'development' ? err : {};

     // render the error page
     res.status(err.status || 500);
     res.render('error');
   });

   module.exports = app;
});
