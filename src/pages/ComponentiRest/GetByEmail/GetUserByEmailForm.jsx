import React, { useState } from 'react';
import { getUserByEmail } from '../../../Services/RESTService';

export function GetUserByEmailForm() {
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userDataResponse = await getUserByEmail(email);
            setUserData(userDataResponse);
            setError(null);
        } catch (error) {
            console.error('Si è verificato un errore:', error);
            setUserData(null);
            setError('Si è verificato un errore durante il recupero dell\'utente. Riprova più tardi.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Inserisci l'email"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Trova Utente</button>
            </form>
            {userData && (
            <div className="mt-3">
                <h2>Informazioni Utente</h2>
                <p>Nome: {userData.nome}</p>
                <p>Email: {userData.email}</p>
                <p>Ruolo: {userData.ruoli[0].tipologia}</p> {/* Mostra il ruolo dell'utente */}
                {/* Aggiungi altri campi dell'utente qui */}
            </div>
            )}
        </div>
    );
}
