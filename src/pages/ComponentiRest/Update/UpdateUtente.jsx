import React, { useState } from 'react';
import { updateUtente } from '../../../Services/RESTService';

export function UpdateUserForm() {
    const [userData, setUserData] = useState({
        nome: '',
        cognome: '',
        email: '',
        idRuolo: '' // Modifica del campo idRuolo
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
            const { nome, cognome, email, idRuolo } = userData;
            const response = await updateUtente(email, nome, cognome, idRuolo); // Chiamata alla funzione updateUtente con i dati corretti
            console.log('Risposta dal server:', response);
            // Aggiungi qui eventuali azioni dopo l'aggiornamento dell'utente
        } catch (error) {
            console.error('Si è verificato un errore durante l\'aggiornamento dell\'utente:', error);
            // Gestisci qui eventuali errori durante l'aggiornamento dell'utente
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <form onSubmit={handleSubmit} className="p-4 bg-light text-dark rounded shadow" style={{ width: "400px" }}>
                <h1 className="login-title text-center">Aggiornamento Utente</h1>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" name="nome" value={userData.nome} onChange={handleChange} placeholder="Inserisci il tuo nome" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cognome" className="form-label">Cognome</label>
                    <input type="text" className="form-control" id="cognome" name="cognome" value={userData.cognome} onChange={handleChange} placeholder="Inserisci il tuo cognome" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} placeholder="Inserisci la tua email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="idRuolo" className="form-label">ID Ruolo</label>
                    <input type="text" className="form-control" id="idRuolo" name="idRuolo" value={userData.idRuolo} onChange={handleChange} placeholder="Inserisci l'ID Ruolo" required />
                </div>
                <button type="submit" className="btn btn-dark w-100">Aggiorna</button>
            </form>
        </div>
    );
}
