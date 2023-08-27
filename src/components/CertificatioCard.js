import "./CerificationStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const CertificatioCard = (props) => {
    return (
        <div className="certification-card">
            <h2 className="certification-title">{props.title}</h2>
            <div className="certi-details">
                <div className="certi-btn">
                    <NavLink to={props.certification} className="btn">Certificate</NavLink>
                </div>
            </div>
        </div>
    )
}

export default CertificatioCard