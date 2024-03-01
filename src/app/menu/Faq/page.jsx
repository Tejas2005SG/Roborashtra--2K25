"use client"
import React, { useState } from "react";
import "./faq.css";
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
const questionClass = isOpen ? "question questionNanswer" : "question";
const answerDisplay = isOpen ? {opacity:"1"}: {opacity:"0"};

  return (
    <div className="faq-item">
      <div className={questionClass} onClick={() => setIsOpen(!isOpen)}>
      <button>{question}</button>
      </div>
      <div className="answer answerViewed" style={answerDisplay}>
      {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="faq_wrapper">
      <h1>Frequently Asked Question</h1>
      <FAQItem
        question="What resources are available for troubleshooting technical difficulties during the competition?
        "
        answer=" In our college, we have a shop dedicated to electronic components where you can purchase necessary items for troubleshooting technical difficulties during the competition"
      />
       <FAQItem
        question="Can we bring our own tools and equipment for robot maintenance?
        "
        answer="Yes, participants are required to bring their own tools and equipment for robot maintenance."
      />
       <FAQItem
        question="Are there any restrictions on the use of certain materials or components in the construction of the robots?
        "
        answer="Participants must adhere to the components and materials specified in the respective domain rulebook. Compliance with the guidelines outlined in the rulebook is essential for constructing the robots."
      />
       <FAQItem
        question="Where will I be staying during the competition?
        "
        answer="We will notify you soon about accommodation arrangements for the competition. Please stay tuned for further updates."
      />
        <FAQItem
        question="What are the allowed dimensions and weight limits for the robots?"
        answer="Please refer to the rulebook for specific guidelines regarding the allowed dimensions and weight limits for the robots. Compliance with the regulations outlined in the rulebook is essential"
      />
      <FAQItem
        question="Can only undergraduate student can apply to the event?"
        answer="
        In CamWarrior, both undergraduate (UG) and postgraduate (PG) students can apply, whereas for other events, only undergraduate students are eligible to apply."
      />
      {/* Add more FAQ items */}
    </div>
  );
}