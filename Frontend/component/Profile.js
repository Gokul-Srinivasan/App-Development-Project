import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import profileImage from './Images/v.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from './Header';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from 'emailjs-com';

const SHOP_LOCATION = { lat: 13.0827, lng: 80.2707 }; 

export default function Profile() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleLogOutClick = () => navigate('/');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
            from_email: email,
            message: message,
        };
    
        emailjs.send('service_ub8us4s', 'template_0kdbffr', templateParams, 'vOUPQAYkusb6pgArK')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('Failed to send message.');
            });
    };

    return (
        <div>
            <Header />
            <div className='profilebody'>
                <div className="profile-container">
                    {/* Profile Card */}
                    <div className="profile-card">
                        <img src={profileImage} alt="Profile" className="profile-picture" />
                        <h1 className="profile-name">STARV RENTAL STUDIO</h1>
                        <p className="profile-bio">Rental Studio | Tech Enthusiast | Services</p>
                    </div>

                   
                    <div className="info-settings-container">
                        <div className="profile-info-card">
                            <h2>Personal Information</h2>
                            <p><EmailIcon /> Svinfostdio@example.com</p>
                            <p><PhoneIcon /> +91 6381253302</p>
                            <p><LocationOnIcon /> George Town, Chennai</p>
                        </div>
                        <div className="profile-settings-card">
                            <h2>Account Settings</h2>
                            <button className="profile-button" onClick={handleLogOutClick}>Log Out</button>
                        </div>
                    </div>

                  
                    <div className="profile-support-card">
                        <h2>Help & Support</h2>
                        <form onSubmit={handleSubmit} className="support-form">
                            <label htmlFor="email" style={{marginTop:'6vh'}}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                style={{backgroundColor:'white'}}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button type="submit" className="profile-button" style={{width:'10vh'}}>Send</button>
                        </form>
                        {status && <p>{status}</p>}
                    </div>

                    
                    <div className="profile-location-card">
                        <h2>Location</h2>
                        <MapContainer 
                            center={SHOP_LOCATION} 
                            zoom={13} 
                            style={{ height: "400px", width: "100%" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={SHOP_LOCATION}>
                                <Popup>STARV RENTAL STUDIO</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
