import Member from "@/components/Member/Member";
import "./teams.css";



const coordinator = "https://drive.google.com/uc?export=download&id=1e3pcRVa4rf35dEW_-Lnuh9gA2U_BTsmh"
const lead="https://drive.google.com/uc?export=download&id=13BZo7bdTqDuoDZEgKWo7AJLJ4fDxTuQk"
const colead="https://drive.google.com/uc?export=download&id=14hQYI3VO8vVxtU6xqpFRGfxJ4i87hM-h"
const colead2 = "https://drive.google.com/uc?export=download&id=1YM6V3CQ5gMoeTfPlsYRRA4E1vjRAW2hz"
const chetan = "https://drive.google.com/uc?export=download&id=1gzH0ZZxR1E8BkWDItnTk721v0WUCh5sK";
const dnyanesh = "https://drive.google.com/uc?export=download&id=1rZ3aggd63viXnRrpJ8S9vWRiAZhYrC9Q";
const manas = "https://drive.google.com/uc?export=download&id=1P9B3oT8GPIX5OYYSAMYDT9PAAXbmdx5Z";
const manas_pr = "https://drive.google.com/uc?export=download&id=1xUCTAczAmZirZdok3rOvLCpZ3ht1s678";
const manasi = "https://drive.google.com/uc?export=download&id=1cX2bOS0a2B9CXBuZKEwAPesD_0OzHVl7";
const mayur = "https://drive.google.com/uc?export=download&id=1IWt97QUYU0puoJDQXaAQ1b2i9J8X16fn";
const mehul = "https://drive.google.com/uc?export=download&id=1nSwW0JQfQRBLEIzyQ7CWKe8lFwavX8E0";
const samrudhi = "https://drive.google.com/uc?export=download&id=1Hcc0rLRYka0HsX-59ZdQ3Oe2yO912xYV";

const vedant = "https://drive.google.com/uc?export=download&id=14fTxlYoJpgLi_cBP3T6x3MyMSEf1XQmA";
const vishal = "https://drive.google.com/uc?export=download&id=1FIBaedrns-ad0_CJAfJ9KtCp-bNjO_7b";
const shrushti = "https://drive.google.com/uc?export=download&id=1yip3hjKCYRmLcN7wq0JcSuNyw-zG0KR_";
const srushti = "https://drive.google.com/uc?export=download&id=1BPH5ocDjW6m6zcJHstYqZcxK-BLxCBzb";
const vedantRaut = "https://drive.google.com/uc?export=download&id=1_NCNC0NZOTTkWdNMkUkAU8E0HGLusjl4";
const aastha = "https://drive.google.com/uc?export=download&id=19GYnFV-G792CUTvDxJVBuQo00VkfVKWX";
const avishkar = "https://drive.google.com/uc?export=download&id=1349abd4F_J9qud77hTcTEhjyswAHW7lQ"
const chandrakantBM = "https://drive.google.com/uc?export=download&id=1BG-MWvTq62l3CrV14waDueXe_9cpmXOB";
const dijvijay = "https://drive.google.com/uc?export=download&id=1TZALd41jeKOvyGKkJguPxxqcWhif2_KG";



export default function Teams() {



  return (
    
    // <div className=" text-center text-lg">
    //   Coming Soon </div>
    <div className="team" >
    <div className="team_wrapper">
      <p className="text-center">(Hover or Click Cards to see Contact details)</p>


      <h2 className="text-center text-lg">Event Co-ordinator</h2>
      <div className="team_row">
            <Member image={coordinator} email={"mahendra.salunke@pccoer.in"} linkedIn={"https://www.linkedin.com/in/mahendra-salunke-b9958128/"} phnNo={9763722206}/>
      </div>

      <h2 className="text-center text-lg">Lead & Co-Lead</h2>
      <div className="team_row">
            <Member image={lead} email={"om.khare_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/om-khare-5bb6b8236/"} phnNo={9588654379}/>
            <Member image={colead} email={"khushi.rohra_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/khushi-rohra-aa53a6259/"} phnNo={9307727077}/>
            <Member image={colead2} email={"chandrakant.raut_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/chandrakant-raut-0606b8236/"} phnNo={9359142631}/>

      </div>

      <h2 className="text-center text-lg">Head & Co-Head</h2>
      <div className="team_row">
      <Member image={vishal} email={"vishal.jangid_it22@pccoer.in"} linkedIn={"https://www.linkedin.com/in/vishal-jangid-359b54259/"} phnNo={9172008630}/>
           
          
            <Member image={vedant} email={"vedant.patil_comp221@pccoer.in"} linkedIn={"https://www.linkedin.com/in/connect-vedant-patil/"} phnNo={7558321879}/>
    
        
        
        
            <Member image={manas_pr} phnNo={9175967324}/>
            <Member image={manasi} email={"manasi.velhal_comp21@pccoer.in"} linkedIn={"www.linkedin.com/in/manasi-velhal-2a9921277"} phnNo={9307727077}/>
           
            <Member image={chetan} email={"chetan.phulmante_comp21@pccoer.in"} linkedIn={"www.linkedin.com/in/chetan-phulmante-303b99236"} phnNo={8806946629}/>
            <Member image={mayur} phnNo={9763733419}/>
            <Member image={mehul} phnNo={9307705698}/>
            <Member image={dijvijay} phnNo={1234567890}/>
           
      </div>
    </div>
  </div>
  );
}