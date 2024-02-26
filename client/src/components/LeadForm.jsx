import axios from 'axios';
import React, { useState } from 'react';

const LeadForm = ({ onSubmit }) => {
  const [lead, setLead] = useState({
    Name: '',
    Email: '',
    Phone: '',
    moveDate: '',
    moveSize: ''
  });

  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/leads', lead)
        .then( (response) =>{
            console.log(response)
        })
        .catch( (error) =>{
            console.log(error)
        })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" id="Name" name="Name" placeholder="Name" value={lead.Name} onChange={handleChange} />
        <input type="email" id="Email" name="Email" placeholder="Email" value={lead.Email} onChange={handleChange} />
        <input type="tel" id="Phone" name="Phone" placeholder="Phone" value={lead.Phone} onChange={handleChange} />
        <input type="date" id="moveDate" name="moveDate" placeholder="Move Date" value={lead.moveDate} onChange={handleChange} />
        <select id="moveSize" name="moveSize" value={lead.moveSize} onChange={handleChange}>
          <option value="">Select Move Size</option>
          <option value="small">Small (1-2 rooms)</option>
          <option value="medium">Medium (3-4 rooms)</option>
          <option value="large">Large (5+ rooms)</option>
        </select>
      </div>
      <button type="submit" className="quote-button">Get a Free Quote</button>
    </form>
  );
};

export default LeadForm;
