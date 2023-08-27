import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa"
import { NavLink } from "react-router-dom"

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
                    <p>Hello there! I'm Shreyas Chitransh, a passionate and dedicated full stack developer. With a strong penchant for turning innovative ideas into functional and user-friendly applications, I thrive in the world where creativity meets technology.</p>
                    <div className="social">
                        <NavLink to="https://www.linkedin.com/in/shreyas-chitransh-85a230226/">
                            <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://www.instagram.com/shreeeyyyyyy/?next=%2F">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://github.com/Shreychit">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer