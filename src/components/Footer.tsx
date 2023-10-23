/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import logo from "../imgs/logo.svg";
import facebook from "../imgs/facebook.svg";
import instagram from "../imgs/instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
    const OpenToTopPage = useCallback(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <>
            <div className="footer">
                <div className="footer-info">
                    <img src={logo} alt="" />
                    <p>
                        Scopri i nostri social , postiamo ogni giorno nuove foto del nostro menu e nuove ricette tutte da scoprire
                    </p>
                    <div className="footer-social">
                        <ul>
                            <li>
                                <a className="social-icon-outline" href="#">
                                    <img src={facebook} alt="facebook-icon" />
                                </a>
                            </li>
                            <li>
                                <a className="social-icon-outline" href="#">
                                    <img src={instagram} alt="instagram-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <h3>Service</h3>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">Storia dell'azienda</a>
                            </li>
                        </Link>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                        </Link>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">Servizi</a>
                            </li>
                        </Link>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">Politica Privacy</a>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <h3>Info</h3>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">La nostra missione</a>
                            </li>
                        </Link>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">I nostri obiettivi</a>
                            </li>
                        </Link>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">Chi siamo</a>
                            </li>
                        </Link>
                        <Link onClick={OpenToTopPage} to="/">
                            <li>
                                <a href="#">Il nostro Team</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="subfooter">
                <div className="copy-right">
                    <p>
                        <span>Awesome pizza</span> @ 2023 All Right Reserved
                    </p>
                </div>
                <div className="subfooter-links">
                    <ul>
                        <li>
                            <a href="#">Legal</a>
                        </li>
                        <li>
                            <a href="#">SiteMap</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms and Condition</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer