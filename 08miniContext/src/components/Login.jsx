import React,{useState,useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const[username, setUsername]=useState(' ')
    const [password, setpassword] = useState(' ')

    
    const handelSubmit=()=>{

    }

    
 
 
    return (
    <div>
    <h2>Login</h2>

    <input type='text'
    value={username} onChange={(e) =>setUsername(e.target.value)} 
     placeholder='username'/>

    <input type='password'
    value={password} onChange={(e) =>setpassword(e.target.value)} 
     placeholder='password'/>

    <input onClick={handelSubmit}> Submit</input>
    </div>
  )
}
