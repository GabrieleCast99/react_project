import { useState } from "react";
export function Contactform(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userEmail: "",
        userPassword: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table(formData);
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name="userPassword" placeholder="Password" value={formData.userPassword} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}