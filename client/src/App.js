import logo from './logo.svg';
import './App.css';
import AuthAxios from './helpers/jwtAccess';
import {useState} from "react"

function App() {

  const [infos, setInfos] = useState({
    login : "",
    password : ""
  })


  const Login = () =>{

    AuthAxios.post("/Login", infos)
    .then(res => localStorage.setItem("user",JSON.stringify(res.data)))
    .catch(err => console.log(err.message))

  }


  return (
    <div className="App">
       <input type="text" name='login' onChange={(e)=> setInfos({...infos,login : e.target.value})}/>
       <input type="text" name='Password'onChange={(e)=> setInfos({...infos, password : e.target.value})}/>
       <button onClick={()=>Login()}>connect</button>
        
    </div>
  );
}

export default App;
