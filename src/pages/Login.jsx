import {useContext,useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
const Login=()=>{
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=> {
        const role=login(email,password);
        if(!role){
            alert("Invalid credentials");
            return;
        }
        role==="admin" ? navigate("/admin/dashboard") :  navigate("/customer/dashboard");
    };
    return (
        <div className="center">
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            </div>
    );
};
export default Login;
    