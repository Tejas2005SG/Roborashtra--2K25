import React from "react";
import './contact.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const page = () => {
   return(
    <div className="contact_wrapper text-3xl ">
    Contact Us
    <form action="">
      <div className="Name">
      <p>Name:</p>
      <input type="text" name="user_name" id="name"  required/>
      </div>
      <div className="emaiPhn">
        <div className="email">
                  <p>Email:</p>
    <input type="email" name="user_email" 
    id="email" required/>
        </div>
    <div className="phnNo">
      <p>Phone No:</p>
      <input type="number" name="user_number" id="number" required/>
    </div>

    </div>
    <div className="query">
    <p>Query:</p> 
    <textarea className="query-box" rows={"4"} name="message" required></textarea>
    </div>
    <div className="submitBtn">
       <button type="submit" value={"Send"} id="">Submit</button>
    </div>
    </form>
    <p>Follow US ON</p>
    <div className="socialMedia flex row-auto gap-3">
    <a href="https://www.youtube.com/@RobohawkPCCOER"><FaYoutube />
</a>
<a href="https://www.linkedin.com/showcase/98926593/admin/feed/posts/"><FaLinkedin />
</a>
<a href="https://www.instagram.com/roborashtra.pccoer/?igsh=MzB4bW1kcnNuOGw1"><FaInstagram />
</a>
<a href="https://www.facebook.com/profile.php?id=61555881009876&mibextid=ZbWKwL"><FaFacebook />
</a>
<a href="https://twitter.com/robohawk_pccoer?t=hC53cUOhsLkE3kaTwc6TNQ&s=08"><FaTwitter /> </a>
    </div>
  </div>
   )
};

export default page;