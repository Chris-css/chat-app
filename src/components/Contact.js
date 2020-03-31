import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name}/>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}>
                    </div>
                    <p className="status-text">{props.online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
}

export default Contact;