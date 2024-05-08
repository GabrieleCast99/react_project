import { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom"; // Importa Navigate da 'react-router-dom'
import { AuthContext } from "../../contexts/AuthContext/AutchContext";

export function NavBar() {
    const { isLogged, handleLogout } = useContext(AuthContext);

    const handleLogoutClick = () => {
        handleLogout(); // Chiamata alla funzione di logout
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark"> 
            <div className="container-fluid">
                <div className="navbar-brand">
                    Navbar
                </div>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {!isLogged && <NavLink className="nav-link" to="/registration/">Registrazione</NavLink>} {/* Mostra il pulsante "Registration" solo se l'utente non è autenticato */}
                        {isLogged ? (
                            <>
                                <NavLink className="nav-link" to="/dashboard/">Dashboard</NavLink>
                                <NavLink className="nav-link" to="/Courses/">Courses</NavLink>
                                <NavLink className="nav-link" to="/Contacts/">Contacts</NavLink>
                                <button className="btn btn-danger nav-link" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <NavLink className="nav-link" to="/login/">Login</NavLink>

                        )}
                    </div>
                </div>
            </div>  
            {!isLogged && <Navigate to="/" replace />} {/* Reindirizza alla home se l'utente non è loggato */} 
        </nav>
    );
};
