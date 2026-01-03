import {createContext, useState} from 'react';
export const AuthContext = createContext();
const users=[
    {role:"admin",email:"admin@gmail.com",password:"admin1234"},
    {role:"customer",email:"customer@gmail.com",password:"customer1234"},
];

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login=(email,password)=>{
        const foundUser=users.find(
            (u)=>u.email===email && u.password===password
        );
        if(!foundUser) return false;
        localStorage.setItem("user",JSON.stringify(foundUser));
        setUser(foundUser);
        return foundUser.role;
    };
    const logout=()=>{
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};