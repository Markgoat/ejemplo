const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/hola", (req, res) => {
  res.send("Ruta");
});
app.post('/login',(req,res)=>{
    res.send("Ruta de login")
})
app.listen(3000, () => {
  console.log("listening on port 3000");
});
