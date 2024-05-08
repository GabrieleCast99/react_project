import React, { useState, useContext } from 'react';
import './Login.css';
import { UserLogin } from '../../Services/RESTService';
import { AuthContext } from '../../contexts/AuthContext/AutchContext';
import { Navigate } from 'react-router-dom'; // Importa Navigate da react-router-dom

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { handleLogin, isLogged } = useContext(AuthContext); // Ottieni la funzione handleLogin e lo stato isLogged dal contesto di autenticazione

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserLogin({ email: email, password: password });
            console.log('Login effettuato:', response);
            // Chiamata a handleLogin nel contesto di autenticazione dopo il login ha avuto successo
            handleLogin();
        } catch (error) {
            console.error('Errore durante il login:', error);
            setError(true);
        }
    };

    // Se l'utente è autenticato, reindirizza automaticamente alla home
    if (isLogged) {
        return <Navigate to="/dashboard" replace />; // Utilizza Navigate per reindirizzare alla home
    }

    return (
        <div className="login-container">
            <h1 className="login-title text-center">Login</h1>
            <div className="login-logo"></div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Inserisci la tua email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Inserisci la tua password"
                    />
                </div>
                {error && <div className="error-message">Credenziali non valide. Riprova.</div>}
                <button type="submit" className="login-button">Accedi</button>
            </form>
        </div>
    );
}
