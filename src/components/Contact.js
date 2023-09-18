import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    try {
      const response = await axios.post('https://formspree.io/f/xlekyljn', formData);
  
      if (response.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      throw error; 
    }
  };
  
  return (
    <div className="form-container">
      <h2 className="form-heading">Contact Us</h2>
      {isSubmitted ? (
        <div className="success-message">
          <p>Your message has been successfully sent. 
          Thank you for contacting us. 
          We appreciate your communication and will respond to your inquiry promptly.</p>
        </div>
      ) : (
        <form
          className="custom-form"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message here" required></textarea>
          </div>

          <button type="submit" className="form-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
