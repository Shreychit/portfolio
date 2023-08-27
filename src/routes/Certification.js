import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2'
import CertificationPage from "../components/CertificationPage"


const Certification = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="CERTIFICATION." text="The Certifications that I have done" />
            <CertificationPage />
            <Footer />
        </div>
    )
}

export default Certification