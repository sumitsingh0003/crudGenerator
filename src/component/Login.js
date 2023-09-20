import React, { useState } from 'react'
import axios from 'axios';
import preloader from "../loading.gif"
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [handleInput, setHandleInput] = useState({
        username: "",
        password: ""
    });
    const [disabled, setDisabled] = useState(false);
    const [state, setstate] = useState(false);

    const handleField = (e) => {
        setHandleInput({ ...handleInput, [e.target.name]: e.target.value })
    }

    const submit = async (e) => {
        setDisabled(true)
        setstate(true)
        e.preventDefault();
        const username = handleInput.username;
        const password = handleInput.password;

        if (!username || !password) {
            alert("Please fill the both fields before LogIn.");
            setDisabled(false);
            setstate(false);
            return;
        }

        try {
            const response = await axios.post('https://login-api.web2rise.in/api/login', { username, password });
            const token = response.data.token;
            if (token) {
                setHandleInput({ username: "", password: "" })
                localStorage.setItem('token', token)
                setstate(false)
                navigate("/")
            }
        } catch (error) {
            console.error(error);
            alert("Invalid Credentials")
            setDisabled(false)
            setstate(false)
        }
    }
    const currentYear = new Date().getFullYear();
    return (
        <>

            {state ?
                <div className="preloader">
                    <img src={preloader} alt="preloader" />
                </div>
                : ''
            }
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" target='_sumit' to="https://sumitcoder.comin/">Sumit Singh</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" exact="true" to="/">Home</NavLink>
                            <NavLink className="nav-link" exact="true" to="/login">Log In</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="formsubmission">
                <div className="box_div login">
                    <div className="form">
                        <h2>Admin LogIn</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" name="username" value={handleInput.username} onChange={handleField} required />
                                <span>User Name</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="password" value={handleInput.password} onChange={handleField} required />
                                <span>Password</span>
                                <i></i>
                            </div>
                            {!disabled ? <input type="SUBMIT" defaultValue="LOGIN" onClick={submit} /> : <input type="SUBMIT" defaultValue="LOGIN" disabled />}

                        </form>
                        <div className="credentials">
                            <h6>Username:- <span>sumitsingh0003</span></h6>
                            <h6>Password:- <span>sumit@123</span></h6>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <h6>About Us</h6>
                            <p className="text-justify">
                                sumitcoder.in <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help
                                the upcoming programmers with the code. Sumit Singh focuses on providing
                                the most efficient code or snippets as the code wants to be simple. We
                                will help programmers build up concepts in different programming
                                languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript,
                                PHP, Android, SQL and Algorithm.
                            </p>
                        </div>
                        <div className="col-xs-6 col-md-2">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="/#.">UI Design</a></li>
                                <li><a href="/#.">PHP</a></li>
                                <li><a href="/#.">Android</a></li>
                                <li><a href="/#.">Templates</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-2">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><NavLink exact="true" to="/">Home</NavLink></li>
                                <li><NavLink exact="true" to="/login">Log In</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Get in Touch</h6>

                            <ul className="social-icons">
                                <li>
                                    <a className="facebook" target="_sumit" href="https://www.facebook.com/sumitsingh0003/"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a className="twitter" target="_sumit" href="https://twitter.com/Sumitsingh0003"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a className="instagram" target="_sumit" href="https://www.instagram.com/sumitsingh0003/"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a className="linkedin" target="_sumit" href="https://www.linkedin.com/in/sumitsingh0003/"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright © {currentYear} All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <p className="developed-text">
                                Powered by
                                <a target="_sumit" href="https://sumitcoder.in/"> sumitcoder</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Login
