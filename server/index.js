// steps :
// 1 - generate a token using the command inside node terminal: require("crypto").randomBytes(64).toString("Hex") 
// 2- Save the token in .env file , you should create it manually 
// 3- in the login API generate a new token out of the token in .env file and the user informations
// 4- send the token to the front along with the uset infos 
// 5- in the front side configure axios with axios.create in way to integrate the token 
//    in the headers of the request, each time the user want to performe a task and consume an API
// 6- in the back-end create a middlewear that will take the resquest of the user, read the headers and extract
//    the token, verify if this token is the same one in .env file, if true the api requested will be executed 
//    if false an error to the front will be sent


const express = require("express")
const jwt = require("jsonwebtoken")
const { ACCESS } = require("./Helpers/JwtVerif");
const cors = require("cors")

const app = express()

app.listen(9000, ()=>console.log("app is running on port 9000"))

app.use(express.json())
app.use(cors())

require("dotenv").config();



// List of users just for the example normally u shoulf use a database
let users = [
    {
        login : "Test",
        Password : "test"
    }
]


app.post("/Login", (req, res)=>{
  
  // get the login and password received from the login interface
  const login = req.body.login;
  const password = req.body.password;

  console.log(req.body)

   const result = users.filter(item => item.login === login && item.Password === password)
   console.log(result)

   if(result.length ===0){
    res.send("user doesn t exists")
   }
   else{
    const element = result[0]
    const token = jwt.sign(element, process.env.ACCESS_TOKEN);
      res.send({
        user : result[0],
        token : token
      })
   }


})


 // once the user logged, every and each task he wants to do through the session and that involves communication 
 // with the back end should excute the Access function to verify the token 


 // the ACCESS function is been executed between the reque
 app.post("/addTask",ACCESS, (req, res)=>{


 })