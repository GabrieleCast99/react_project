import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AutchContext';
import { Footer } from "./Footer";
import { CentralBody } from "./CentralBody";
import { UserList } from "../ComponentiRest/GetAll/UserList";
import { GetUserByEmailForm } from '../ComponentiRest/GetByEmail/GetUserByEmailForm';

export function Home() {
    const { isLogged } = useContext(AuthContext);

    return (
        <div className="container" style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1 className="mt-5">Benvenuto</h1>
            
            {!isLogged && (
                <div className="mb-4">
                    <p style={{ fontSize: '18px' }}>Registrati <Link to="/registration" className="btn btn-primary">qui</Link> per accedere a tutte le funzionalità del nostro sito.</p>
                    <p style={{ fontSize: '18px' }}>Hai già un account? <Link to="/login" className="btn btn-outline-primary">Accedi</Link> qui.</p>
                </div>
            )}
            
            <CentralBody />
            
            <Footer />
        </div>
    );
}
