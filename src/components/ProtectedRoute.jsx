import { AuthContext } from "../contexts/AuthContext/AutchContext";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function ProtectedRout({children}){

    const{user} = useContext(AuthContext);
    const navigateTo = useNavigate();

    useEffect(()=>{
        if(!user.isAuthorized){
            navigateTo("/");
        }
    },[])

    
    return<>{children}</>;

}