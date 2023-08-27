import "./CerificationStyles.css"
import CertificationData from "./CertificationData"
import CertificatioCard from "./CertificatioCard"

import React from 'react'

const CerrtificationPage = () => {
    return (
        <div className="certification-container">
            <div className="certification-container">
                {CertificationData.map((val, ind) => {
                    return (
                        <CertificatioCard
                            key={ind}
                            title={val.title}
                            certification={val.certification}
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default CerrtificationPage