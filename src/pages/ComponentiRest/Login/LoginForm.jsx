import { useState } from "react";
import { UserLogin } from "../../../Services/RESTService";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";


export function LoginForm() {
    console.log('Token JWT:', token); // Stampa il token JWT


    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const[errorFlag, setErrorFlag] = useState(false);
    const[successorFlag, setSuccessFlag] = useState(false);

    const handleChange = (e) => {
        const{name, value,checked,type} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(formData);

        let response = await UserLogin(formData);
        if (response.ok) {
            setSuccessFlag(true);

            setFormData({
                email: "",
                password: ""
            });

            const data = await response.json();
            
            console.log(data);

            const JWTtoken = data.JWTtoken;

            Cookies.set("token", JWTtoken,{expires: 2});

            setUser(jwtDecode(JWTtoken));
            console.log('Token JWT:', token); // Stampa il token JWT

            
        }

        else {
            console.log(response.status);
            setErrorFlag(true);
        }
    }






}