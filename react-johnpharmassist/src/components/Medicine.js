  import React from "react";
  import { Link } from "react-router-dom";
  import "./Medicine.css";
  import Medicineitem from "./Medicineitem";

  function Medicine() {
    return (
      <div className="cardsmed">
        <h1>MEDICINE INFORMATION</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <li>
                <Medicineitem
                  src="images/gamot1.png"
                  text="Paracetamol Biogesic Syrup"
                  label="Medicine"
                  path="/med-info"
                />
              </li>

              <li>
                <Medicineitem
                  src="images/gamot1.png"
                  text="Paracetamol Biogesic Syrup"
                  label="Medicine"
                  path="/med-info"
                />
              </li>
              <li>
                <Medicineitem
                  src="images/gamot1.png"
                  text="Paracetamol Biogesic Syrup"
                  label="Medicine"
                  path="/med-info"
                />
              </li>

              <li>
                <Medicineitem
                  src="images/gamot1.png"
                  text="Paracetamol Biogesic Syrup"
                  label="Medicine"
                  path="/med-info"
                />
              </li>

              <li>
                <Medicineitem
                  src="images/gamot1.png"
                  text="Paracetamol Biogesic Syrup"
                  label="Medicine"
                  path="/med-info"
                />
              </li>

              <li>
                <Medicineitem
                  src="images/gamot1.png"
                  text="Paracetamol Biogesic Syrup"
                  label="Medicine"
                  path="/med-info"
                />
              </li>
            </ul>
          </div>
        </div>

        <Link to="/medicine-form" className="link-button">
          Add New Medicine
        </Link>
      </div>
    );
  }

  export default Medicine;
