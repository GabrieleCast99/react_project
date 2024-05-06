import { NavLink } from "react-router-dom";

export function NavBar() {
    return(
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
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/courses/">Courses</NavLink>
                        <NavLink className="nav-link" to="/login/">Login</NavLink>

                    </div>
                    </div>   
        </nav>

    );
};