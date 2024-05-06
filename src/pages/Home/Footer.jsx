export function Footer() {
    const footerStyle = {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: '10px',
        background: 'white', 
    };

    return (
        <footer style={footerStyle}>
            <p>© 2024 Nome della tua azienda</p>
        </footer>
    );
}

