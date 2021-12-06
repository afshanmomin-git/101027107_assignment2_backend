let express= require('express')
let mongoose = require('mongoose')
let Routes = require('./routes/routes')

let app = express()
mongoose.connect('mongodb+srv://afshanmomin1:aA7VfAKYFsZfkokd@cluster0.z8lln.mongodb.net/101027107_assignment2?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get("/",(req,res)=>{
     res.send("<h1>Mongo Db</h1>")

})
app.use(Routes)
app.listen(9090,()=>{
    console.log("Server is running at 9090")
})
