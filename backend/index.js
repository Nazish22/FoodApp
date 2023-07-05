const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongodb = require("./db")
mongodb()


app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!....------')
})

app.use('/api',require('./Routes/Createuser'));
//app.use('/api',require('./Routes/Displaydata'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
