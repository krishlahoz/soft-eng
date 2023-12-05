import React, { useState } from "react";

const MedicineForm = () => {
  const [formData, setFormData] = useState({
    med_id: "", 
    generic_name: "",
    brand_name: "",
    manufacturer: "",
    availability: true,
    age_group: "Kids",
    med_type: "Tablet",
    dosage: "",
    description: "",
    side_effects: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can send the data to your backend API (Django) here
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Medicine Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Medicine ID:</label>
          <input
            type="text"
            className="form-control"
            name="med_id"
            value={formData.med_id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Generic Name:</label>
          <input
            type="text"
            className="form-control"
            name="generic_name"
            value={formData.generic_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Brand Name:</label>
          <input
            type="text"
            className="form-control"
            name="brand_name"
            value={formData.brand_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Manufacturer:</label>
          <input
            type="text"
            className="form-control"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
          <label className="form-check-label" htmlFor="availabilityCheckbox">
            Availability:
          </label>
          <input
            type="checkbox"
            id="availabilityCheckbox"
            className="form-check-input"
            name="availability"
            checked={formData.availability}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                availability: e.target.checked,
              }))
            }
            style={{ marginLeft: "90px" }} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age Group:</label>
          <select
            className="form-select"
            name="age_group"
            value={formData.age_group}
            onChange={handleChange}
          >
            <option value="Kids">Kids</option>
            <option value="Adults">Adults</option>
            <option value="Seniors">Seniors</option>
          </select>
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Medicine Type:</label>
          <select
            className="form-select"
            name="med_type"
            value={formData.med_type}
            onChange={handleChange}
          >
            <option value="Tablet">Tablet</option>
            <option value="Capsule">Capsule</option>
            <option value="Liquid">Syrup</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Dosage:</label>
          <input
            type="text"
            className="form-control"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Side Effects:</label>
          <textarea
            className="form-control"
            name="side_effects"
            value={formData.side_effects}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
