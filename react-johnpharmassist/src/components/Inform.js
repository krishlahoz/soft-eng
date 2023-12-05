import React from "react";
import "./Inform.css";
import CardItem from "./CardItem";

function Inform() {
  return (
    <div className="inform-container">
      {/* Hero Section */}
      <div className="hero-container">
        <h1>Welcome to Medicine Information System</h1>
        <p>Explore the details of various medicines and stay informed.</p>

        {/* Featured Card */}
        <div className="cards">
          <div className="cards__containerinfo">
            <div className="cards__wrapper">
              <h2>Featured Medicine</h2>
              <ul className="cards__items">
                <CardItem
                  src="images/gamot1.png"
                  text="Coronavirus disease (COVID-19) pandemic"
                  label="Medicine"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Medicine Information */}
      <div className="medicine-info">
        <h2>Medicine Information</h2>
        <ul>
          <li>
            <strong>Name:</strong> Example Medicine
          </li>
          <li>
            <strong>Scientific name:</strong> Pregabalin
          </li>
          <li>
            <strong>Type of drug:</strong> Capsule
          </li>
          <li>
            <strong>Dosage:</strong> 150mg
          </li>
          <li>
            <strong>Description:</strong> An anticonvulsant drug that works by
            affecting the levels of certain chemicals in the brain that send
            pain signals and cause seizures
          </li>
          <li>
            <strong>Side Effect:</strong> Drowsiness, dizziness, blurred vision,
            weight gain, dry mouth, swelling, or trouble concentrating
          </li>
          <li>
            <strong>Manufacturer:</strong> Unilab
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Inform;
