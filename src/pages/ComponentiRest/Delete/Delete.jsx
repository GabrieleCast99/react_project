import React, { useState } from 'react';
import { deleteUser } from '../../../Services/RESTService';
export function DeleteUserForm() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await deleteUser(email); // Chiamata alla funzione deleteUser con l'email corretta
            console.log('Utente eliminato con successo!');
            // Aggiungi qui eventuali azioni dopo l'eliminazione dell'utente
        } catch (error) {
            console.error('Si è verificato un errore durante l\'eliminazione dell\'utente:', error);
            // Gestisci qui eventuali errori durante l'eliminazione dell'utente
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <form onSubmit={handleSubmit} className="p-4 bg-light text-dark rounded shadow" style={{ width: "400px" }}>
                <h1 className="login-title text-center">Eliminazione Utente</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} placeholder="Inserisci l'email dell'utente da eliminare" required />
                </div>
                <button type="submit" className="btn btn-danger w-100">Elimina</button>
            </form>
        </div>
    );
}