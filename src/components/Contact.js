import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/47.jpg" />
            <div>
                <p className="name">Jesus Morales</p>
                <div className="status">
                    <div className="status-online">
                    </div>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;