import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {online: props.online,
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <p className="name">{this.props.name}</p>
                    <div className="status">
                        <div className={this.state.online ? 'status-online' : 'status-offline'}
                        onClick= {event => {
                            const newOnline = !this.state.online;
                            this.setState ({ online: newOnline });
                        }}
                        >
                        </div>
                        <p className="status-text">{this.state.online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

/*className={this.state.favorite ? 'is-favorite' : ''}
                        onClick= {event => {
                            const newFavorite = !this.state.favorite;
                            this.setState ({ favorite: newFavorite });
                        }}*/


/*
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
*/
export default Contact;