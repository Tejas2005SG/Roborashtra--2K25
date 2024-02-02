import Member from "@/components/Member/Member";
import "./teams.css";
import Manas from "./img/34.jpg"
import ImageLoader from "@/components/loader/Loader";



const coordinator = "https://drive.google.com/uc?export=download&id=17krXNhYPK8RdRXOGSh18u0hQ1kP1_bFQ"
const lead="https://drive.google.com/uc?export=download&id=1hQVM9pWlFG0d9zdj4ixiZyH24uoUegsv"
const colead="https://drive.google.com/uc?export=download&id=1moKkj5GKyT2f3JlTzTr6y7hxBDhGWi5M"
const colead2 = "https://drive.google.com/uc?export=download&id=1jTs5U0jnHXyCcjsO4DrKFBw32dkNz0me"
const chetan = "https://drive.google.com/uc?export=download&id=1U1VD75d25q2hDXGy_wSOrf2sPmAxkcoF";
const dnyanesh = "https://drive.google.com/uc?export=download&id=1rZ3aggd63viXnRrpJ8S9vWRiAZhYrC9Q";
const manas = "https://drive.google.com/uc?export=download&id=1P9B3oT8GPIX5OYYSAMYDT9PAAXbmdx5Z";
const manas_pr = "https://drive.google.com/uc?export=download&id=1km7akZt7jwl__Pq3wMN2w8uTiw2W_CI0";
const manasi = "https://drive.google.com/uc?export=download&id=1v3O0i-XW5buTJ9mKrwjKvjxpGRAzTBlV";
const mayur = "https://drive.google.com/uc?export=download&id=19MSHDGAY8XVtp-x8qLBUIQvBJMDv-nuP";
const mehul = "https://drive.google.com/uc?export=download&id=1BjZatuHgef6Ml6MwgYXcEIFKfc9XfPzM";
const samrudhi = "https://drive.google.com/uc?export=download&id=1YIDpKeieU-oPt2XhePgHroTlWS3_nQWX";
const shreeram = "https://drive.google.com/uc?export=download&id=1lEOIr_MaE__ta_nlTI2ULSlWbADu6EWe";
const gaurav = "https://drive.google.com/uc?export=download&id=18g8ILvtYTbociH2MorIC5Yxwj2o9bu9y"
const vedant = "https://drive.google.com/uc?export=download&id=1TIb_wQxidq5QyXQf1tFxb1VVCB6Qi1h6";
const vishal = "https://drive.google.com/uc?export=download&id=1TE463tRRpkG0fpKWvZr6Cx-RmSpeOcB-";



export default function Teams() {



  return (
    
    // <div className=" text-center text-lg">
    //   Coming Soon </div>
    <div className="team" >
    <div className="team_wrapper">


      <h2 className="text-center text-lg">Event Co-ordinator</h2>
      <div className="team_row">
            <Member name={"Dr.Mahendra Salunkhe"} image={coordinator} position={"Faculty Co-ordinator"}/>
      </div>

      <h2 className="text-center text-lg">Lead & Co-Lead</h2>
      <div className="team_row">
            <Member image={lead}/>
            <Member image={colead}/>
            <Member image={colead2}/>

      </div>

      <h2 className="text-center text-lg">Head & Co-Head</h2>
      <div className="team_row">
      <Member image={vishal}/>
            <Member image={shreeram}/>
            <Member image={gaurav}/>

            <Member image={vedant}/>
            <Member image={dnyanesh}/>
            <Member image={manas_pr}/>
            <Member image={manasi}/>
            <Member image={samrudhi}/>
            <Member image={chetan}/>
            <Member image={mayur}/>
            <Member image={mehul}/>
            <Member image={manas}/>

      </div>
        
      {/* <h2 className="text-center text-lg">Web Team</h2>
      <div className="team_row">
        {web.map((member) => {
          return (
            <>
              <Member name={member.name} image={member.img} position={member.position}/>
            </>
          );
        })}
      </div>
      
      <h2 className=" text-center text-lg">Design Team</h2>
      <div className="team_row">
        {des.map((member) => {
          return (
            <>
              <Member name={member.name} image={member.img} position={member.position} />
            </>
          );
        })}
        </div>
        
      <h2 className=" text-center text-lg">Public Relation Team</h2>
      <div className="team_row">
        {pr.map((member) => {
          return (
            <>
              <Member 
              name={member.name} image={member.img} />
            </>
          );
        })}
      </div>
      
      <h2 className=" text-center text-lg">Management Team</h2>
      <div className="team_row">
        {man.map((member) => {
          return (
            <>
              <Member name={member.name} image={member.img} />
            </>
          );
        })}
      </div>
      
      

      <h2>Steel Soldier Slam Team</h2>
      <div className="team_row">
        {sss.map((member) => {
          return (
            <>
              <Member name={member.name} image={member.img} position={member.position}/>
            </>
          );
        })}
      </div> */}


    </div>
  </div>
  );
}
