
export function CentralBody() {

   

    return (
        <div>
            <h2 className="mt-5">Esplora i nostri corsi</h2>
            <p className="mb-4">Scopri una vasta gamma di corsi disponibili e trova quello più adatto alle tue esigenze!</p>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/500x100" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Benvenuto al nostro carosello!</h5>
                            <p>Esplora le nostre offerte e inizia il tuo viaggio di apprendimento!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/500x100" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Scopri nuovi orizzonti</h5>
                            <p>Approfondisci le tue conoscenze e sviluppa nuove competenze con i nostri corsi.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/500x100" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Unisciti a noi!</h5>
                            <p>Inizia il tuo percorso di apprendimento con la nostra piattaforma educativa.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
