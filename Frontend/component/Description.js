import React from "react";
import { Paper, Card, CardContent, CardMedia, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Description.css';  // Renamed from 'Login.css' to better reflect its purpose
import Header from "./Header";
import Footer from "./Footer";

export default function Description() {
    return (
        <div>
            <Header />
            <div className="description-container">
                <Typography variant="h2" component="h1" gutterBottom align="center" className="title">
                    Starv Rental Studio Overview
                </Typography>

                <Paper elevation={3} className="paper-container">
                    <Typography variant="h4" gutterBottom className="section-title">
                        Our Vision
                    </Typography>
                    <Typography variant="body1" paragraph className="section-content">
                        Welcome to <strong>Starv Rental Studio</strong>, where creativity meets convenience. Our studio is designed to be the ultimate space for photographers, videographers, and artists seeking a professional environment to bring their visions to life.
                    </Typography>
                    <Typography variant="body1" paragraph className="section-content">
                        With state-of-the-art equipment, customizable settings, and a comfortable atmosphere, we aim to provide a seamless experience for all your creative projects. Whether you're working on a small portrait session or a large-scale production, our studio is equipped to meet your needs.
                    </Typography>
                    
                    <Accordion className="accordion">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" className="accordion-title"><strong>How It Works</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" className="accordion-content">
                                Booking our studio is simple and hassle-free. First, explore our available spaces and select the one that best fits your project. Our online booking system allows you to check availability in real-time, so you can secure your spot without any delays. Once booked, our team will ensure the studio is prepared to your specifications before you arrive.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="accordion">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" className="accordion-title"><strong>Studio Features & Benefits</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className="features-list">
                                <li><Typography variant="body2"><strong>Flexible Hours:</strong> Available to book 24/7, allowing you to work whenever creativity strikes.</Typography></li>
                                <li><Typography variant="body2"><strong>Professional Equipment:</strong> High-quality lighting, backdrops, and soundproofing to ensure your project runs smoothly.</Typography></li>
                                <li><Typography variant="body2"><strong>Easy Online Booking:</strong> User-friendly online booking system to reserve your studio time with ease.</Typography></li>
                                <li><Typography variant="body2"><strong>Comfortable & Private Space:</strong> Comfortable lounge area, private changing rooms, and a makeup station.</Typography></li>
                                <li><Typography variant="body2"><strong>Expert Support:</strong> Our team is always on hand to provide technical assistance.</Typography></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="accordion">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" className="accordion-title"><strong>Booking Policies</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" className="accordion-content">
                                We aim to be as flexible as possible to accommodate your needs. However, to ensure the best experience for all our clients, we have a few simple policies in place. Please review our cancellation and rescheduling guidelines on our website before booking.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Paper>

                <div className="features-section">
                    <Typography variant="h4" align="center" gutterBottom>
                        Explore Our Studio Features
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Card className="feature-card">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://st4.depositphotos.com/4218696/30798/i/450/depositphotos_307987070-stock-photo-red-alarm-clock-and-morning.jpg"  // Replace with actual image URL
                                    alt="Flexible Hours"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Flexible Hours
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our studio is available to book 24/7, allowing you to work whenever creativity strikes.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className="feature-card">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://www.itl.cat/pngfile/big/299-2990788_photo-wallpaper-guitar-studio-midi-guitar-studio-full.jpg"  // Replace with actual image URL
                                    alt="Professional Equipment"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Professional Equipment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our studio is fully equipped with high-quality lighting, backdrops, and soundproofing to ensure your project runs smoothly.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className="feature-card">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQmlUXqLQzahvwJigVVlhehnDMsSEifUZfg&s"  // Replace with actual image URL
                                    alt="Private Space"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Comfortable & Private Space
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our studio includes a comfortable lounge area, private changing rooms, and a makeup station.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    );
}
