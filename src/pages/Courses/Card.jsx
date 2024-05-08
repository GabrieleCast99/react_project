import './Card.css'; 

export function Card({ title, description }) {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
