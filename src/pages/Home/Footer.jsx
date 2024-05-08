export function Footer() {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '10px',
        background: 'black',
        color: 'white',
        textAlign: 'center',
        marginTop: '20px' // Aggiungi un margine superiore

    };

    return (
        <footer style={footerStyle}>
            <p>© 2024 Gabriele Castiglione</p>
        </footer>
    );
}
