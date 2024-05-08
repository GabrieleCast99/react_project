import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AutchContext';


export function LogoutPage() {
    const { isLogged, handleLogout } = useContext(AuthContext);

    useEffect(() => {
        if (isLogged) {
            handleLogout();
        }
    }, [isLogged, handleLogout]);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <h1 className="text-center">Logout effettuato con successo!</h1>
        </div>
    );
}
