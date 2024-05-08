import React, { useEffect, useState } from 'react';
import { getAllUtenti } from '../../../Services/RESTService';
import { DisplayUsersTable } from './DisplayUsersTable'; // Importa il componente DisplayUsersTable

export function UserList() {
    const [utenti, setUtenti] = useState([]);
    const [showUtenti, setShowUtenti] = useState(false); // Stato per gestire la visualizzazione degli utenti

    useEffect(() => {
        if (showUtenti) {
            getAllUtenti().then(setUtenti);
        } else {
            // Se showUtenti è false, azzera la lista degli utenti
            setUtenti([]);
        }
    }, [showUtenti]); // Esegui l'effetto solo quando showUtenti cambia

    // Funzione per gestire il clic sul pulsante
    const handleButtonClick = () => {
        // Inverti lo stato di showUtenti
        setShowUtenti(!showUtenti);
    };

    return (
        <>
            <h2>Recupero Tutti gli Utenti</h2>

            <button className="btn btn-primary btn-block" onClick={handleButtonClick}>
                {/* Testo dinamico del pulsante in base allo stato di showUtenti */}
                {showUtenti ? 'Nascondi Utenti' : 'Visualizza Utenti'}
            </button>
            {/* Visualizza gli utenti solo se showUtenti è true */}
            {showUtenti && <DisplayUsersTable users={utenti} />}
        </>
    );
}
