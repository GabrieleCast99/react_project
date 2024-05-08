import React, { useState } from 'react';
import Cookies from "js-cookie";

// RESTService.jsx

// Funzione per recuperare un singolo utente dalla Email
//
export async function getUserByEmail() {

    try {
        const email = document.getElementById('email').value;
        const response = await fetch( `http://127.0.0.1:8080/api/utente/get?email=${email} `);
        
        if (!response.ok) {
            throw new Error('Errore durante la richiesta GET');
        }

        const userData = await response.json();


        console.log('Utente trovato:', userData);

        return userData;
    } catch (error) {
        console.error('Si è verificato un errore:', error);
        alert('Si è verificato un errore durante il recupero dell\'utente. Riprova più tardi.');
    }
}

export async function getAllUtenti() {
    try {
        const response = await fetch('http://127.0.0.1:8080/api/utente/getAll');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const utenti = await response.json();
        return utenti;
    } catch (error) {
        console.error('Errore durante il recupero della lista degli utenti:', error);
        throw error;
    }
}




export async function registerUser() {
    try {

        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;



        const response = await fetch('http://127.0.0.1:8080/api/utente/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": nome,
                "cognome": cognome,
                "email": email,
                "password": password
            }),
        });

        console.log(response);

        // Controllo se la risposta non è vuota
        if (!response.ok) {
            throw new Error('Errore durante la registrazione dell\'utente: ' + response.statusText);
        }
        console.log(response)
        console.log(response.status);

        return response;
    } catch (error) {
        console.error('Si è verificato un errore durante la registrazione dell\'utente:', error);
        throw error;
    }
}

export function setAuthTokenCookie(token) {
    Cookies.set('token', token, { expires: 1 }); // Imposta il cookie con scadenza di 1 giorno
}

export async function UserLogin() {
    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('http://127.0.0.1:8080/api/utente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        // Controllo se la risposta non è vuota
        if (!response.ok) {
            throw new Error('Errore durante il login dell\'utente: ' + response.statusText);
        }

        const data = await response.json();

        const JWTtoken = data.JWTtoken;
        setAuthTokenCookie(JWTtoken); // Imposta il cookie del token JWT

       
        return response;
    } catch (error) {
        console.error('Si è verificato un errore durante il login dell\'utente:', error);
        throw error;
    }
}


// Funzione per aggiornare un utente
export async function updateUtente(email, nome, cognome, idRuolo) {
    try {
        const userData = {
            nome: nome,
            cognome: cognome,
            email: email,
            idRuolo: idRuolo
        };

        const response = await fetch('http://127.0.0.1:8080/api/utente/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        console.log('Stato della risposta:', response.status);

        if (!response.ok) {
            throw new Error('Errore durante la richiesta PUT');
        }

        console.log('Utente aggiornato con successo!');
        

        return true;
    } catch (error) {
        console.error('Si è verificato un errore durante l\'aggiornamento dell\'utente:', error);
        throw error;
    }
}

export async function deleteUser(email) {
    try {
        const response = await fetch(`http://127.0.0.1:8080/api/utente/delete/${email}`, {
            method: 'DELETE'
        });

        console.log('Stato della risposta:', response.status);

        if (!response.ok) {
            throw new Error('Errore durante la richiesta DELETE');
        }

    } catch (error) {
        console.error('Si è verificato un errore durante l\'eliminazione dell\'utente:', error);
        alert('Si è verificato un errore durante l\'eliminazione dell\'utente. Riprova più tardi.');
    }
}


// Funzione per effettuare il logout dell'utente
export async function logout() {
    try {
        const response = await fetch('http://127.0.0.1:8080/api/utente/logout', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Aggiungi il token memorizzato nel localStorage
            }
        });

        console.log('Stato della risposta:', response.status);

        if (!response.ok) {
            throw new Error('Errore durante la richiesta di logout');
        }

        console.log('Logout effettuato con successo!');
        // Rimuovi il token memorizzato nel localStorage
        localStorage.removeItem('token');
        return true;
    } catch (error) {
        console.error('Si è verificato un errore durante il logout:', error);
        throw error;
    }
}



export async function getCourses() {
    try {
        const token = Cookies.get('token'); // Recupera il token JWT dai cookie
        console.log('Token JWT:', token); // Stampa il token JWT

        const response = await fetch('http://localhost:8080/api/corso/corsi', {
            headers: {
                'Authorization': `Bearer ${token}`, // Aggiungi il token JWT alle intestazioni della richiesta
            },
        });

        if (!response.ok) {
            throw new Error('Errore durante la richiesta GET per i corsi');
        }

        const coursesData = await response.json();
        return coursesData;
    } catch (error) {
        console.error('Si è verificato un errore durante il recupero dei corsi:', error);
        throw error;
    }
}



