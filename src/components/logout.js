import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const logout = () => {

    const navigate = useNavigate();
    useEffect (()=>{
    fetch('/logout',{
        method: "GET",
        headers:{
            Accept: "appllication/json",
            "Content-type":"application/json"
        },
        credentials: "include"
    }).then((res) =>{
        localStorage.removeItem("token");
        navigate('/login', {replace:true});
        if(res.status != 200){
            const error = new Error(res.error);
            throw error;
        }
    }).catch((err) => {
      console.log(err);
    })
    });
    return(
        <div>
         <h1>logout page</h1>
        </div>
    )
}
export default logout;