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

      {!submitted ? (
        <div className="contact-main-container">
          <div className="contact_wrapper mt-[-10vw] ml-[-10vw]">
            <div className=" contact-media w-[60vw] h-[60vh]  flex ">
              <div className="adresses w-[30vw] h-[60vh]  ">
                <div className="helpline w-[28vw] h-[18vh]  m-auto ">
                  <h4 className="robohelp text-[orangered] font-bold text-center text-lg">Roborashtra Helpine : 9307727077</h4>
                  <p className="text-white">Event Lead ( Aditya Pardeshi ) : <span className="text-orange-400">8956596939</span></p>
                  <p className="text-white">Event Co-Lead ( Vishal Jangid ) : <span className="text-orange-400">9172008630</span></p>
                  <p className="text-white">Event Co-Lead ( Pratik Chavare ) : <span className="text-orange-400">8265005103</span></p>
                </div>
                <div className="how-to-reach  w-[28vw] h-[40vh]  m-auto">
                  <h4 className="how-to-reach-text text-[orangered] font-bold m-auto leading-[20px] text-center text-lg">How to Reach ?</h4>
                  <p className=" font-bold text-orange-400">By Train:</p>
                  <p className="text-white">From Pune Junction, take a local train towards Talegaon or Lonavala and get off at Akurdi station.</p>


                  <p className=" font-bold text-orange-400">By Bus:</p>
                  <p className="text-white"> From Akurdi station, you can take an auto-rickshaw directly to PCCOER in Ravet. Alternatively, catch a local bus heading towards Ravet or Dehu Road and get off at the nearest stop to the college.</p>


                  <p className=" font-bold text-orange-400">By Auto-Rickshaw:</p>
                  <p className="text-white"> From Akurdi station, you can take an auto-rickshaw directly to PCCOER in Ravet. Alternatively, catch a local bus heading towards Ravet or Dehu Road and get off at the nearest stop to the college.</p>


                </div>

              </div>

              <div className="map-container w-[30vw] h-[60vh]  flex justify-center items-center">
                <iframe className=" map rounded-lg  border-orange-600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6357.674639144745!2d73.74122481005469!3d18.650710592595445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba0251959e2d%3A0x4d7ea2cc35724480!2sPCCOE-Ravet%2C%20Pimpri%20Chinchwad%20College%20of%20Engineering%20and%20Research%2C%20Ravet%2C%20Pune!5e0!3m2!1sen!2sin!4v1723558759207!5m2!1sen!2sin" width="400" height="300" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>


              </div>


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

            <p className="Follow text-xl md:pl-12 md:pt-9 text-center">Follow US ON</p>
            <div className="socialMedia flex row-auto gap-3  justify-center md:justify-start text-2xl md:pl-9">
              <a href="https://www.youtube.com/@RobohawkPCCOER"><FaYoutube /></a>
              <a href="https://www.linkedin.com/showcase/98926593/admin/feed/posts/"><FaLinkedin /></a>
              <a href="https://www.instagram.com/roborashtra.pccoer/?igsh=MzB4bW1kcnNuOGw1"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61555881009876&mibextid=ZbWKwL"><FaFacebook /></a>
              <a href="https://twitter.com/robohawk_pccoer?t=hC53cUOhsLkE3kaTwc6TNQ&s=08"><FaTwitter /></a>
            </div>
          </div>
        </div>) : (
        <div className="thankContainer">
          <div className="innerBox">
            <div className="Thankingtext">Thanks! We will get back to you promptly.</div>
            <div className="submitBtn" style={{ fontFamily: "bankGothlic" }}>
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
