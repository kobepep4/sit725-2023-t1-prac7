let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routers/router');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

http.listen(port, ()=>{
    console.log('express server started');
});




//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://van20persies:ganstasunit@cluster0.nl5ppte.mongodb.net/?retryWrites=true&w=majority";
//let collection;





/*app.get('/public', function (req, res) {
    res.render('index.html');
});*/

// app.get('/api/cats', (req, res) => {
      //  getAllCats((err,result)=>{
      //          if(!err){
      //              res.json({statusCode: 200, data: result, message:'get all cats successful'});
      //          }
      //  });
  // });

// app.post('/api/cat', (req,res)=>{
      //  let cat = req.body;
      //  postCat(cat,(err, result)=>{
      //      if(err){
      //          res.json({statusCode:201, data:result, message:'success'})
      //      }

      // });

// });


/*function postCat(cat, callback){
    collection.insertOne(cat,callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);

}*/


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/*const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});*/



/*async function runDBConnection() {
  try {

   // await client.connect();
      // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    collection = client.db().collection('Cat');
    console.log(collection);
  } catch(ex){
    console.error(ex);
  }
}
*/
