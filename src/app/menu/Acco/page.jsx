"use client";
import React,{useState} from 'react'
import "./acco.css";
import Btn1 from '@/components/Buttons/Btn1';
import "../Faq/faq.css"


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
        {isOpen && <p dangerouslySetInnerHTML={{ __html: answer }}/> }
        </div>
      </div>
    );
  }
function Page() {
    const[isActive, setISActive] = useState(true);
    const reaching = isActive ? {opacity: "1", display: "block"}: {opacity: "0", display: "none"};
    const faq = isActive ? {opacity: "0", display: "none"}: {opacity: "1", display: "block"};
    const activeStyle = isActive ? "activeDiv" : "inactiveDiv";
    const inActiveStyle = isActive ? "inactiveDiv" : "activeDiv";

  return (
    <div className='acco_wrapper'>
        <h1>Accomodation at PCCOER</h1>
        <Btn1 text={"Register"} link={"https://forms.gle/i5pv2DD4JSZVKNpg8"}/>

    <div className="ReachingFaq">
        <div className="headings">
        <button onClick={()=>setISActive(true)}className={activeStyle}>Reaching</button>
        <button onClick={()=>setISActive(false)}className={inActiveStyle}>FAQ</button>
        </div>
        <div className="Reaching">
           
            <p style={reaching}>
<b>By Public Transportation:</b><br />
- <b>From Pune Railway Station</b>: You can take a local train from Pune Junction or Shivajinagar Railway Station to Akurdi Railway Station. From there, PCCOER is a short distance away. Alternatively, you can take a bus or taxi from the railway station to Ravet.<br />
- <b>From Pune Bus Stand (Swargate or Shivajinagar):</b> You can take a PMPML bus heading towards Nigdi or Ravet and get off at the nearest bus stop. From there, you can walk or take a rickshaw to PCCOER.<br />
- <b>From Mumbai</b>: If you are coming from Mumbai, you can take a train to Pune and then follow the above directions. Alternatively, you can take a bus directly to Pune and then use local transportation to reach Ravet.
<br/>
<b>By Air:</b><br/>
- <b>From Pune Airport</b>: Upon arriving at Pune Airport, you can take a taxi or pre-booked cab to PCCOER Ravet. The college is approximately 25-30 kilometers away from the airport, and the journey takes around 45 minutes to an hour depending on traffic conditions.
<br/>
<b>Local Transportation</b>:
<br/>
-<b>Rickshaws and Taxis</b>: You can easily find auto-rickshaws and taxis in Pune that can take you to Ravet. Ensure to negotiate the fare beforehand or use metered vehicles.
<br />
- <b>App-Based Cabs</b>: Services like Uber and Ola operate in Pune and can take you to PCCOER Ravet. Just book a cab using their respective apps.
<br/>
Always double-check the location and address of PCCOER Ravet before starting your journey. Its also advisable to consider traffic conditions, especially during peak hours.
            <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.306505707732!2d73.74034057929025!3d18.65023693726519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba0251959e2d%3A0x4d7ea2cc35724480!2sPCCOE-Ravet%2C%20Pimpri%20Chinchwad%20College%20of%20Engineering%20and%20Research%2C%20Ravet%2C%20Pune!5e0!3m2!1sen!2sin!4v1709365971396!5m2!1sen!2sin" width="700" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></p>
        </div>
        <div className="Faq">
            <p style={faq}>
            <FAQItem
        question="How to avail accomodation?"
        answer={'1.Click on Register <br/> 2.Fill the google form <br/>Our coordinators will contact you related to accomodation.'}      />
        <FAQItem question="Should I carry my ID card with me?" answer="It is mandatory for all guest participants to carry college IDs. This is for your own convenience. Moreover, you will be asked to produce your college ID cards at the time of allotment of rooms." />
        <FAQItem question="What are the Accommodation charges?" answer="The accommodation charges and other necessary details regarding the payment will be informed by our coordinators before 15 days to the event."/>
        <FAQItem question="Does the accommodation facilities include food facilities?" answer="Lunch will be provided on both the days of the event."/>
        <FAQItem question="What are the food facilities inside PCCOER,Ravet?" answer="For all our participants we will provide lunch for both the days of the events. In addition, you can also eat in the canteen and food stalls provided inside the campus" />
        <FAQItem question="Can I enter PCCOER,Ravet campus at any time?" answer="You can enter PCCOER Main gate anytime by showing a valid photo ID proof during 9am to 5pm." />
        <FAQItem question="Can we get accommodation on the spot at ROBORASHTRA?" answer="There is no confirmation for the accomodation but we will try our best to find you nearby hotels at discounted prices."/>
        <FAQItem question="Documents that guests should carry?" answer={' 1. Any valid Govt photo ID <br/>2. Print out of Email confirmation<br/> 3. Valid College ID for participants<br/>4. We will provide you with an ID at the registration desk.'}/>
      </p>

        </div>
    </div>
    </div>
  )
  }
export default Page