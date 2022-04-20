var express = require('express');
var app = express();
var bodyParser = require('body-parser')

console.log("Hello World");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/name", (req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}`})
}).put((req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}`})
}).delete((req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}`})
})


app.use(logger)

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  absolutePath = __dirname + "/views/index.html"
  res.sendfile(absolutePath)
});

app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE == "uppercase"){
    res.json({message: "HELLO JSON"})
  }else{
  res.json({message: "Hello json"})
  }
});

function logger(req, res, next){
  const info = `${req.method} ${req.path} - ${req.ip}`
  console.log(info)
  next()
}

app.get("/now", (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({time: req.time})
})

app.get("/:word/echo", (req, res) => {
  date = req.params.date
  res.json({echo: req.params.word})
})

app.get("/name", (req, res) => {
  res.json({ name: `${req.query.first} ${req.query.last}`})
})






































 module.exports = app;
