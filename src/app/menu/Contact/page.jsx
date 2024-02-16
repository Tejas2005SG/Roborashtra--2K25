"use client";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './contact.css';

const ContactPage = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    query: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Message sent successfully!');
        // Optionally, you can show a success message or redirect the user
      } else {
        console.error('Failed to send message');
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="contact_wrapper text-3xl ">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="Name">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emaiPhn">
          <div className="email">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="phnNo">
            <p>Phone No:</p>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="query">
          <p>Query:</p>
          <textarea
            className="query-box"
            rows={4}
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>Follow US ON</p>
      <div className="socialMedia flex row-auto gap-3">
        <a href="https://www.youtube.com/@RobohawkPCCOER"><FaYoutube /></a>
        <a href="https://www.linkedin.com/showcase/98926593/admin/feed/posts/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/roborashtra.pccoer/?igsh=MzB4bW1kcnNuOGw1"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=61555881009876&mibextid=ZbWKwL"><FaFacebook /></a>
        <a href="https://twitter.com/robohawk_pccoer?t=hC53cUOhsLkE3kaTwc6TNQ&s=08"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default ContactPage;
