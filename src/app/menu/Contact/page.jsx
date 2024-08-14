"use client";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './contact.css';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9678c114-baea-4519-81f4-7c57e7970174");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
           setSubmitted(true);
    
    }
}
  
  return (
    <>

    {!submitted ?(
    <div className="contact_wrapper text-3xl ">
      <h2 className="Contact">For Any Query, You can make a call on:</h2>
      <h4 className="To">Roborashtra Helpine : 9307727077</h4>
      <p className="LNo">Event Lead(Aditya Pardeshi):8956596939</p>
      <p className="LNo">Event Co-Lead(Vishal Jangid):9172008630</p>
      <p className="LNo">Event CoLead(Pratik Chavare):9172008630</p>
      <div className="route">
        <h4>How to Reach ?</h4>
        <p>By Train:<br></br>

From Pune Junction, take a local train towards Talegaon or Lonavala and get off at Akurdi station.</p>
       <p>By Bus:<br></br>

From Akurdi station, you can take an auto-rickshaw directly to PCCOER in Ravet. Alternatively, catch a local bus heading towards Ravet or Dehu Road and get off at the nearest stop to the college.</p>
       <p>By Auto-Rickshaw:<br></br>

You can take an auto-rickshaw directly from Pune Junction to PCCOER, though this will be more expensive than the train and bus options.</p>
      </div>
      <div>
        
      </div>
            {/* <div className="contactTable">      <table>
        <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Contact No.</th>
        </tr>
        <tr>
          <td>Om Khare</td>
          <td>Team Lead</td>
          <td>-</td>
        </tr>
      </table>
      </div> */}

      {/* <form onSubmit={handleSubmit}>
        
        <div className="Name">
          <p className="Info">Name:</p>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div className="emaiPhn">
          <div className="email">
            <p className="Info">Email:</p>
            <input
              type="email"
              name="email"
              required
            />
          </div>
          <div className="phnNo">
            <p className="Info">Phone No:</p>
            <input
              type="tel"
              name="phoneNumber"
              required
            />
          </div>
        </div>
        <div className="query">
          <p className="Info">Query:</p>
          <textarea
            className="query-box"
            rows={4}
            name="message"
            required
          ></textarea>
        </div>
        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </form> */}
      {/* <div className="Name">
          <p className="Info">Name:</p>
          <input
            type="text"
            name="name"
            required
          />
        </div> */}

      <p className="Follow">Follow US ON</p>
      <div className="socialMedia flex row-auto gap-3">
        <a href="https://www.youtube.com/@RobohawkPCCOER"><FaYoutube /></a>
        <a href="https://www.linkedin.com/showcase/98926593/admin/feed/posts/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/roborashtra.pccoer/?igsh=MzB4bW1kcnNuOGw1"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=61555881009876&mibextid=ZbWKwL"><FaFacebook /></a>
        <a href="https://twitter.com/robohawk_pccoer?t=hC53cUOhsLkE3kaTwc6TNQ&s=08"><FaTwitter /></a>
      </div>
    </div>):(
    <div className="thankContainer">
        <div className="innerBox">
          <div className="Thankingtext">Thanks! We will get back to you promptly.</div>
          <div className="submitBtn" style={{fontFamily: "bankGothlic"}}>
          <div className="thanksBtn">
            <a href="../menu">
          <button>Back to event</button>
          </a>
          </div>
        </div>
        </div>
      </div>
    )}
      </>
  );
};

export default ContactPage;
