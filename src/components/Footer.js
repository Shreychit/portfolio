import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Flat No.502,Signora City, Pandit Clinic Road</p>
                            <p>Dhannad,Jharkhand-826001</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 9929 810 914</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            shreyaschit15@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis autem beatae temporibus perferendis voluptas sint ipsa nisi amet nobis dolorem.</p>
                    <div className="social">
                        <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer