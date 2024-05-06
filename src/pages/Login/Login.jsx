
import './Login.css'; 

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login effettuato con:', username, password);
    };

    return (
        <div className="login-container">
            <div className="login-logo">
            </div>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Inserisci il tuo username"
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
                <button type="submit" className="login-button">Accedi</button>
            </form>
        </div>
    );
}

