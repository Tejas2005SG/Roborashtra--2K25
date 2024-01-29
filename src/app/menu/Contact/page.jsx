'use client';
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
  const form = useRef();
  const btnClick = ()=>{
    let btn = document.querySelectorAll('button');
    btn.innerText = "Thanks";
    let inputValue = document.querySelectorAll('input');
    inputValue.innerText = "";
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ioe7yho", "template_3l1ab43", form.current, 'fpJMvF84PjWEw5tqj')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };


return(
  <div className="contact_wrapper text-3xl ">
    Contact Us
    <form ref={form} onSubmit={sendEmail}> 
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

export default Contact;
