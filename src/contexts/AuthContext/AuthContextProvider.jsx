import { AuthContext } from "./AutchContext";
import { useState } from "react";

export function AuthContextProvider({ children }) {
    const[isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({
        nome: "",
        cognome: "",
        email: "",
        ruolo: "",
    });

    const handleLogin = (userData, token) => {
        setIsLogged(true);
        setUser(userData);
       
    };

    const handleLogout = () => {
        setIsLogged(false);
        setUser({
            nome: "",
            cognome: "",
            email: "",
            ruolo: "",
        });
    };
    return (
        <AuthContext.Provider value={{ isLogged, user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}


