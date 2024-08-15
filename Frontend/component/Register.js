import React, { useState } from "react";
import "./Register.css";
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({});

        if (password !== confirmPassword) {
            setErrors(prevErrors => ({
                ...prevErrors,
                confirmPassword: "Passwords do not match"
            }));
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/users", {
                Name: name,
                Password: password,
                Email: email,
                Mobile: mobile
            });

            // Handle success response
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            // Handle error response
            if (error.response && error.response.data) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: "An unexpected error occurred" });
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="bodyr">
                <div className="container">
                    <div className="boxsection">
                        <div className="box1">
                            <h1 className="rec">REGISTER</h1>
                        </div>
                        <TextField
                            id="name"
                            label="USERNAME"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={!!errors.Name}
                            helperText={errors.Name}
                            InputLabelProps={{ className: "textfield_label" }}
                        />
                        <TextField
                            id="email"
                            label="EMAIL ID"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!errors.Email}
                            helperText={errors.Email}
                            InputLabelProps={{ className: "textfield_label" }}
                        />
                        <TextField
                            id="phone"
                            label="PHONE NO"
                            variant="outlined"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            error={!!errors.Mobile}
                            helperText={errors.Mobile}
                            InputLabelProps={{ className: "textfield_label" }}
                        />
                        <TextField
                            type="password"
                            id="pass"
                            label="PASSWORD"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.Password}
                            helperText={errors.Password}
                            InputLabelProps={{ className: "textfield_label" }}
                        />
                        <TextField
                            type="password"
                            id="conpass"
                            label="CONFIRM PASSWORD"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            InputLabelProps={{ className: "textfield_label" }}
                        />
                        <div className="box1">
                            <FormControlLabel
                                control={<Checkbox />}
                                label="REMEMBER ?"
                            />
                        </div>
                        <Button
                            className="but"
                            type="submit"
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            REGISTER
                        </Button>
                        {errors.general && <p className="error">{errors.general}</p>}
                        <Link to='/login'>Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
