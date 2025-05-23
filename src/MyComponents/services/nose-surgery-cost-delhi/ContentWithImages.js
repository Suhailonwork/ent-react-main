import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./ExpertAdvice.css";
import DoctorImage from "./image/doctor.webp";
const NoseSurgeryCost = () => {
  const surgeries = [
    { name: "Septoplasty", cost: "INR 30,000 to INR 60,000" },
    { name: "Turbinate reduction surgery", cost: "INR 40,000 to INR 60,000" },
    { name: "Rhinoplasty", cost: "INR 30,000 to INR 2,50,000" },
    { name: "RhinoSeptoplasty", cost: "INR 70,000 to INR 2,00,000" },
    { name: "FESS", cost: "INR 45,000 to INR 70,000" },
    { name: "Nasal polyp removal", cost: "INR 45,000 to INR 75,000" },
    { name: "Nose fracture management", cost: "INR 40,000 to INR 2,00,000" },
  ];
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
              An ENT doctor, also known as an otolaryngologist, is a medical
              specialist who treats conditions that affect the ears, nose, and
              throat. The doctor can also perform head and neck surgeries,
              including the surgeries involving the ears, nose, throat, mouth,
              neck, and face.{" "}
            </p>
            <p>
              An ENT doctor offers both non-surgical and surgical types of
              treatments and can help in the diagnosis, evaluation, and
              treatment of various diseases and conditions affecting the head
              and neck region.
            </p>
            <p>
              If you are looking for the best ENT doctor in Delhi, you can
              contact Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre in
              Delhi. He is a renowned and award-winning ENT specialist in Delhi
              with more than three decades of experience and has treated several
              satisfied patients to date.
            </p>
          </div>
        </div>
      </section>
      <section className="specialist-section">
        <div className="container">
          <h6 className="section-subtitle text-danger text-center">OUR TEAM</h6>
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Meet Our Specialist
          </h2>
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



      <section>
  <div className="container">
    <h2 className="pq-section-subtitle sub-subtitle">
      Conditions and Diseases Treated by Nose Surgery
    </h2>
    <p>
      When medical interventions like nasal saline irrigations, external nasal
      dilators, steroids, oral medications, evaluation by an allergist, and
      antihistamine sprays fail to treat nasal problems, nose surgery may be
      necessary. The different nose conditions and diseases that can be treated
      using nose surgery include:
    </p>
    <ul>
      <li><strong>Nasal congestion:</strong> Blocked nasal passages leading to difficulty breathing.</li>
      <li><strong>Congenital nasal obstruction, narrowing, or stenosis:</strong> Structural issues present from birth.</li>
      <li><strong>Reduced sense of smell or taste:</strong> Often caused by nasal blockages or infections.</li>
      <li><strong>Deviated nasal septum:</strong> Misalignment of the nasal septum affecting airflow.</li>
      <li><strong>Enlarged turbinates:</strong> Swelling of nasal structures impacting breathing.</li>
      <li><strong>Nasal fractures:</strong> Broken nose due to trauma.</li>
      <li><strong>Certain facial fractures:</strong> Impact injuries affecting the nose and surrounding areas.</li>
      <li><strong>Facial lacerations:</strong> Cuts or wounds that may require surgical correction.</li>
      <li><strong>Foreign body stuck in the nose:</strong> Removal of objects lodged inside the nasal cavity.</li>
      <li><strong>Hypernasal speech:</strong> Excessive nasal airflow affecting voice quality.</li>
      <li><strong>Nasal polyps:</strong> Benign growths in the nasal passages causing obstruction.</li>
      <li><strong>Nasal masses:</strong> Abnormal tissue growths requiring evaluation.</li>
      <li><strong>Nosebleeds:</strong> Frequent or severe bleeding requiring surgical intervention.</li>
      <li><strong>Nasal trauma or injury:</strong> Damage to the nose requiring correction.</li>
      <li><strong>Runny nose:</strong> Persistent nasal discharge affecting daily life.</li>
      <li><strong>Sinusitis:</strong> Inflammation of the sinuses causing congestion and discomfort.</li>
      <li><strong>Snoring:</strong> Airway obstruction leading to noisy breathing during sleep.</li>
      <li><strong>Obstructive sleep apnea:</strong> Breathing pauses during sleep due to airway blockage.</li>
      <li><strong>Postnasal drip:</strong> Excess mucus dripping down the throat.</li>
      <li><strong>Correction of the size and shape of the nose:</strong> Cosmetic and functional nose surgeries.</li>
    </ul>
    <p>
      If you are looking for the best nose job in Delhi, nose cosmetic surgery in Delhi, 
      or any other treatment due to nose conditions, get in touch with 
      <strong>Dr. (Major) Rajesh Bhardwaj</strong> for the best treatment results.
    </p>
  </div>
</section>

      <section>
        <div className="container"> <div className="nose-surgery-container">
      <h2 className="nose-surgery-subtitle">Types Of Nose Surgeries We Perform</h2>
      <p className="nose-surgery-description">
        MedFirst ENT Centre offers the following common types of nose procedures and surgeries:
      </p>
      <ul className="nose-surgery-list">
        <li>
          <strong>Septoplasty:</strong> Straightens the wall of bone and cartilage (nasal septum) 
          dividing the space between two nostrils.
        </li>
        <li>
          <strong>Turbinoplasty / Turbinate Reduction Surgery:</strong> Reshapes, repositions, or reduces 
          the size of turbinates to improve nasal breathing.
        </li>
        <li>
          <strong>Rhinoplasty (Nose Job):</strong> A cosmetic surgery to reshape the nose.
        </li>
        <li>
          <strong>Rhinoseptoplasty:</strong> A combination of septoplasty and rhinoplasty, recommended 
          in complex cases of septal deviation.
        </li>
        <li>
          <strong>Balloon Sinuplasty:</strong> A minimally invasive procedure using a small balloon 
          catheter to widen blocked sinus openings.
        </li>
        <li>
          <strong>Surgery to Control Epistaxis:</strong> Treatments for severe nosebleeds, including 
          nasal packing, cauterization, or surgical intervention.
        </li>
        <li>
          <strong>Endoscopic CSF Leak Repair:</strong> Identifies and repairs cerebrospinal fluid (CSF) 
          leaks using minimally invasive endoscopy.
        </li>
        <li>
          <strong>Functional Endoscopic Sinus Surgery (FESS):</strong> Uses an endoscope to enlarge 
          sinus drainage pathways.
        </li>
        <li>
          <strong>Nasal Endoscopy:</strong> Evaluates nasal passages using an endoscope and may also 
          remove foreign objects.
        </li>
        <li>
          <strong>Nasal Polyp Removal:</strong> Surgical removal of benign nasal polyps.
        </li>
      </ul>
      <p className="nose-surgery-footer">
        At MedFirst ENT Centre, you will be offered all types of nose surgeries at the 
        <strong> best nose surgery cost in Delhi.</strong>
      </p>
    </div> </div>
      </section>

      <section>
        <div className="container">
        <div className="nose-surgery-container">
      <h2 className="title">Nose Surgery Cost In Delhi</h2>
      <p className="description">
        The cost of nose surgery in Delhi will vary depending on the type of nose surgery being performed.
        The approximate nose surgery price in Delhi for commonly performed nose surgeries is as follows:
      </p>
      <table className="surgery-table">
        <thead>
          <tr>
            <th>Type of Nose Surgery</th>
            <th>Approximate Cost Range</th>
          </tr>
        </thead>
        <tbody>
          {surgeries.map((surgery, index) => (
            <tr key={index}>
              <td>{surgery.name}</td>
              <td>{surgery.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="additional-info">
        The exact cost may depend on the hospital, surgeon’s expertise, and additional medical expenses.
        It is advised to consult with a qualified surgeon to get an accurate estimate.
      </p>
    </div>
        </div>
        </section> 

      <section>
      <div className="container">
      <div className="factors-container">
      <h2 className="factors-title">Factors Affecting Nose Surgery Cost In Delhi</h2>
      <p className="factors-description">
        The cost of nose surgery will vary depending on several factors, including the following:
      </p>
      <ul className="factors-list">
        <li>
          <strong>Type of nose surgery performed:</strong> The cost will vary depending on the type of 
          nose surgery being performed. For example, the nose rhinoplasty cost in Delhi, nose reshaping 
          cost in Delhi, nose job cost in Delhi, or any type of nose plastic surgery cost in Delhi may be 
          higher than diagnostic procedures, such as the nose endoscopy cost in Delhi.
        </li>
        <li>
          <strong>Surgeon’s fees:</strong> The charges of the surgeon will vary based on their expertise 
          and skills. An experienced ENT surgeon will have higher treatment charges, but will also ensure 
          better treatment results.
        </li>
        <li>
          <strong>Choice of hospital:</strong> Different hospitals and treatment centers have different 
          treatment charges based on the facilities offered. Generally, a reputed hospital located in a 
          good locality will have higher charges.
        </li>
        <li>
          <strong>Anesthesia charges:</strong> The charges of the anesthesiologist will be added to the 
          total cost of nose surgery.
        </li>
        <li>
          <strong>Diagnostic tests charges:</strong> The patient may be asked to undergo a few diagnostic 
          tests before surgery. The charges for these tests will increase the total cost of treatment.
        </li>
        <li>
          <strong>Charges for follow-up appointments:</strong> Follow-up appointments and post-surgical 
          care will increase the overall cost of treatment.
        </li>
      </ul>
    </div> </div>
    </section>
    </>
  );
};

export default NoseSurgeryCost;
