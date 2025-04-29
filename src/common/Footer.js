import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import "../CSS/customize.css";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container animate-on-scroll-right">
                    <div className="footer__top">
                        <div className="row justify-center mt-4">
                            <div className="col-lg-2 col-md-2 d-flex">
                                <div className="footer__top__logo">
                                    <Link to="/home">
                                        <img src="./img/HR_logo1.png" alt="" className="footer_img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 mr-5 ml-5 foot_content">
                                <div className="footer__option__item">
                                    <h5>About us</h5>
                                    <p>I specialize in crafting high-performance, user-centric websites and digital solutions, delivering robust functionality and a visually compelling experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 ml-5 foot_content">
                                <div className="footer__option__item">
                                    <h5>Get in touch</h5>
                                    <div className="d-flex footer__option_e_c">
                                        <p className="mr-2 ema_cont">Email</p>
                                        <p>harshvegad135@gmail.com</p>
                                    </div>
                                    <div className="d-flex footer__option_e_c">
                                        <p className="mr-2 ema_cont">Contact</p>
                                        <p>+91 7984285538</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 foot_content_links">
                                <div className="footer__top__social d-flex">
                                    <Link to="https://www.linkedin.com/in/harsh-vegad-8a9b9824b" target="_blank" className="follow_link follow_3">
                                        <FontAwesomeIcon icon={faLinkedinIn} className='follow_link_i' />
                                    </Link>
                                    <Link to="https://www.facebook.com/harsh.vegad.16?mibextid=JRoKGi" target="_blank" className="follow_link follow_2">
                                        <FontAwesomeIcon icon={faFacebookF} className='follow_link_i' />
                                    </Link>
                                    {/* <Link to="https://www.instagram.com/harshvegad1?igsh=MWZ5dHJ5dDUycThyNg==" target="_blank" className="follow_link follow_4">
                                        <FontAwesomeIcon icon={faInstagram} className='follow_link_i' />
                                    </Link> */}
                                    <Link to="https://t.me/HR_BULL" target="_blank" className="follow_link follow_1">
                                        <FontAwesomeIcon icon={faTelegramPlane} className='follow_link_i' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p className="footer__copyright__text">
                                    © {new Date().getFullYear()} All rights reserved | <span>Harsh Vegad</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
