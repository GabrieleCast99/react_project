import React, { useState } from 'react';
import { registerUser } from '../../../Services/RESTService';

export function RegistrationForm() {
    const [userData, setUserData] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({
                nome: document.getElementById('nome').value,
                cognome: document.getElementById('cognome').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            });
            console.log('Risposta dal server:', response);
            // Aggiungi qui eventuali azioni dopo la registrazione dell'utente
        } catch (error) {
            console.error('Si è verificato un errore durante la registrazione dell\'utente:', error);
            // Gestisci qui eventuali errori durante la registrazione dell'utente
        }
    };

   return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

        <form onSubmit={handleSubmit} className="p-4 bg-light text-dark rounded shadow" style={{ width: "400px" }}>
        <h1 className="login-title text-center">Registrazione</h1>

            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" placeholder="Inserisci il tuo nome" required />
            </div>
            <div className="mb-3">
                <label htmlFor="cognome" className="form-label">Cognome</label>
                <input type="text" className="form-control" id="cognome" placeholder="Inserisci il tuo cognome" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Inserisci la tua email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Crea una password" required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Registrati</button>
        </form>
    </div>
);

}



