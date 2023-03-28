const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
app.use(express.urlencoded());
app.use(express.json())
// app.use(morgan("combined"))
app.get('/', (req, res) => res.send('Hello World!'))


app.get('/location',(req,res)=>{

   console.log(req.query);
   return res.status(200).send("done")
})

app.post("/location", (req, res) => {
  console.log(req.body);
  return res.status(200).send("done");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))