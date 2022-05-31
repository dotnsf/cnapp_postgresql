//. app.js

var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

var settings = require( './settings' );

var db = require( './api/db' );
app.use( '/api/db', db );

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', async function( req, res ){
  var result = await db.readItems();
  console.log( { result } );
  if( result.status ){
    res.render( 'index', { items: result.results } );
  }else{
    res.render( 'index', { items: [] } );
  }
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
