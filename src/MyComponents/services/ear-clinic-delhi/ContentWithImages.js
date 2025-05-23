import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./ExpertAdvice.css"; 
import DoctorImage from "./image/rbndr.webp";
const EarClinicDelhi = () => {
  return (
    <>
      {/* Section 1: Get Expert Advice */}
      <section className="bg-b">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="content">
            <p>
            An ENT doctor, also known as an otolaryngologist, is a medical specialist who treats conditions that affect the ears, nose, and throat. The doctor can also perform head and neck surgeries, including the surgeries involving the ears, nose, throat, mouth, neck, and face.  </p>
            <p>
                An ENT doctor offers both non-surgical and surgical types of treatments and can help in the diagnosis, evaluation, and treatment of various diseases and conditions affecting the head and neck region.
            </p>
            <p>
             If you are looking for the best ENT doctor in Delhi, you can contact Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre in Delhi. He is a renowned and award-winning ENT specialist in Delhi with more than three decades of experience and has treated several satisfied patients to date.
            </p>

          </div>
        </div>
      </section>
      <section className="specialist-section">
        <div className="container">
          <h6 className="section-subtitle text-danger text-center">OUR TEAM</h6>
          <h2 className="pq-section-subtitle sub-subtitle text-center">Meet Our Specialist</h2>
          <div className="row align-items-center">
            

            <div className="col-md-6 text-center">
              <div className="image-container">
                <img
                  src={DoctorImage}
                  className="img-fluid specialist-image"
                  alt="Dr. (Major) Rajesh Bhardwaj"
                />
              </div>
            </div>

            
            <div className="col-md-6">
              <div className="text-content">
                <h3 className="specialist-title text-success">
                  ENT Consultation, Surgeries & Treatment
                </h3>
                <h2 className="specialist-name">Dr. (Major) Rajesh Bhardwaj</h2>
                <p className="specialist-qualifications">
                  MBBS (AFMC), MS, DNB, DLO, DHA
                </p>

                <h2 className="specialist-heading">
                  <i className="fas fa-stethoscope"></i> Specialities
                </h2>
                <ul className="key-points">
                  <li>Comprehensive ENT care</li>
                </ul>
                <h2 className="specialist-heading">
                  <i className="fas fa-tools"></i> Expert Skills
                </h2>
                <ul className="key-points">
                  <li>Advanced ENT surgeries</li>
                  <li>Skilled in handling complex cases</li>
                  <li>Expertise in cochlear implants</li>
                  <li>Renowned for ethical practice and honest opinions</li>
                </ul>

                <h2 className="specialist-heading">
                  <i className="fas fa-award"></i> Experience
                </h2>
                <ul className="key-points">
                  <li>30+ years in ENT care</li>
                  <li>Served 15 years in the Indian Army</li>
                  <li>Extensive clinical experience in major hospitals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     


      <section className="why-choose">
      <div className="container">
      <h2 className="pq-section-subtitle sub-subtitle">Why Choose MedFirst For The Best Ear Treatment In Delhi</h2>
        <p>
          For any ear-related problems and conditions, you should contact MedFirst ENT Centre, the best ear clinic in Delhi. Our centre has an edge over other ear clinics in Delhi due to the following facilities we offer:
        </p>
        <ul>
          <li>Senior, well-known ear doctor</li>
          <li>Personalized guidance and management</li>
          <li>On-time appointments and scheduling</li>
          <li>E-prescriptions</li>
          <li>Latest equipment and infrastructure</li>
          <li>Skilled, dedicated, and polite staff</li>
          <li>Hygienic and sanitized environment</li>
          <li>Accessible location</li>
          <li>Insurance acceptance</li>
          <li>Affordable procedures</li>
          <li>Partnership with TPA (Third-Party Administrator) for hassle-free insurance claims</li>
        </ul>
        <p>
          You will receive an early diagnosis and successful ear treatments at MedFirst ENT Centre under the care of our experienced ENT doctor.
        </p>
      </div>
      </section>

      <section className="why-choose">
      <div className="container">
      <h2 className="pq-section-subtitle sub-subtitle">Advanced Technology & Facilities</h2>
        <p>
          MedFirst ENT Centre uses advanced technology and facilities to provide successful ear surgeries and procedures with favorable outcomes. The various facilities we offer include:
        </p>
        <ul>
          <li>A well-equipped operation theater</li>
          <li>Pure tone, impedance audiometer</li>
          <li>Syringe and suction equipment</li>
          <li>Latest microscope with a camera</li>
          <li>High-end microdrill</li>
          <li>Nerve stimulator</li>
          <li>Nasal endoscope to access areas connected to the ears during some surgeries</li>
          <li>OAE or otoacoustic emission and BERA or brainstem evoked response audiometry screening machine to detect loss of hearing in children</li>
          <li>Equipment for emergency ear procedures like removing a foreign body</li>
        </ul>

      </div>
      </section>

    </>
  );
};

export default EarClinicDelhi;