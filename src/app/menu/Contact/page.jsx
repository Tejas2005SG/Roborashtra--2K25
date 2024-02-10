import React from "react";
import './contact.css';

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

  </div>
   )
};

export default page;
