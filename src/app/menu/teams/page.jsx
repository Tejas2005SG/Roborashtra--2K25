import Member from "@/components/Member/Member";
import "./teams.css";

const man = [
  { img: "https://drive.google.com/uc?export=download&id=1g81Es3-RJUIJY7fPAFC5a7DU-Bydged4  ", name: "Abhinandan" },
  { img: "https://drive.google.com/uc?export=download&id=1qyjOmDgXztcD-AT2fwNFfWxDpGvoQw5X  ", name: "Aditi Kshirsagar" },
  { img: "https://drive.google.com/uc?export=download&id=1O8VXmZrAljK6heY88E6nv1GsvorYHo7U  ", name: "Ashish Saini" },
  { img: "https://drive.google.com/uc?export=download&id=1Fi_d_6Wie9260k7sbOKu3fTXu7ycb-rO  ", name: "Atharva Borhade" },
  { img: "https://drive.google.com/uc?export=download&id=1MSvb3ILPUawt071ZSDhtH4R2KNdfgbEQ  ", name: "Chetan Phulmante" },
  { img: "https://drive.google.com/uc?export=download&id=1fPcYu7F2V7n8i6rxpMfCfbfmDIDd9xFr  ", name: "Darshan Patgar" },
  { img: "https://drive.google.com/uc?export=download&id=1-AZypnM6Isfae8GGT0ahp6uKboWfLtkP  ", name: "Dhiraj Marathe" },
  { img: "https://drive.google.com/uc?export=download&id=1vibYWUjHd1YDZuu67uNP5j3kya15LKQV", name: "Kaustubh" },
  { img: "https://drive.google.com/uc?export=download&id=1H0kjvzk7oPx8TVKFxysAx7cBcvPtz7uF  ", name: "Madhav Survase" },
  { img: "https://drive.google.com/uc?export=download&id=1O_iTEmamD8n6msB61TPBxKlR5nHnVZje  ", name: "Mayuri Yenare" },
  { img: "https://drive.google.com/uc?export=download&id=1X7Qo6uqb3IScza2aHjuxAsNq26Z0lk_5  ", name: "Shreyash Kunjir" },
  { img: "https://drive.google.com/uc?export=download&id=1wFGRUSElOv853e20HA7ikaA0oCjLf1GJ  ", name: "Member 4" },
  { img: "https://drive.google.com/uc?export=download&id=1ZGFMAyeFNaXyRNL21cnmgWfp7Q75jxpq  ", name: "Nikita Singh" },
  { img: "https://drive.google.com/uc?export=download&id=1ObAH6f3Col7lpx3Oki0T7V4KKncmmeFv  ", name: "Omkar Panchal" },
  { img: "https://drive.google.com/uc?export=download&id=1-I5JCQN7BbpHHa315HC9RUvrPk9ZY5vd  ", name: "Prachi Thorat" },
  { img: "https://drive.google.com/uc?export=download&id=1QgyTgbaIiPbI0qGHzusfNwMPDcF4M_YH  ", name: "Prathamesh Walekar" },
  { img: "https://drive.google.com/uc?export=download&id=1xnJoXt2Xh5x9H-ZHj5aaSTFV9EYVLOf4  ", name: "Pratik Chaware" },
  { img: "https://drive.google.com/uc?export=download&id=10w4nfF603IYUCl3XrMumofBwqQ7L_RjX  ", name: "Sanskar Shinde" },
  { img: "https://drive.google.com/uc?export=download&id=1MIVU0Cx6_CDrvgNvt9FesmdF1mm8HJJp  ", name: "Sayali Metkar" },
  { img: "https://drive.google.com/uc?export=download&id=10u_Wc7t-LMD0t_g2-0b4pwZP8xY9VMd0  ", name: "Shraddha Dagdu" },
  { img: "https://drive.google.com/uc?export=download&id=1EJRI3AbCWuY6gqYcwFM34QVFSNqX0SZf  ", name: "Shravani Ladkat" },
  { img: "https://drive.google.com/uc?export=download&id=1GzrlK6y06MfM7OaIWGlMlg7DA82Uw358  ", name: "Siddhesh Rohokale" },
  { img: "https://drive.google.com/uc?export=download&id=1ZOLNhMzF61ilV0eky7ZjGEQmJTWmgczo  ", name: "Vedant Mahadi" },
  { img: "https://drive.google.com/uc?export=download&id=1oSwuPtMWtjbplpZy5cPxC-2J-y8qKHHm  ", name: "Vedant Raut" },
];


const pr = [
  { img: "https://drive.google.com/uc?export=download&id=1tO8WSU5ho43O7NbM5XwMSsXltcCfCGXu  ", name: "Girish Jagtap" },
  { img: "https://drive.google.com/uc?export=download&id=1PIQeYJayono2bAfaMYYw_5TeO_r5kbd3  ", name: "Harsh Palande" },
  { img: "https://drive.google.com/uc?export=download&id=1kxBEQd58qOO97YN62XlB5b2fP8Rveb56  ", name: "Manasi Velhal" },
  { img: "https://drive.google.com/uc?export=download&id=1lZRASL_NCgUEqmjPoeL4s6tSrbMJhfKt  ", name: "Pranay Dhanve" },
  { img: "https://drive.google.com/uc?export=download&id=1k_Vyhx-Yp8lrHLo0z61LuL-abAEM_FO1  ", name: "Prathamesh Deshpande" },
  { img: "https://drive.google.com/uc?export=download&id=1GqvvJgXRREHbs58bbduA1KP5EiFjLOZa  ", name: "Sahil Aher" },
  { img: "https://drive.google.com/uc?export=download&id=11EO2q7X9a177GLonKHfl8fpgCmaIjD2a  ", name: "Samruddhi Patil" },
  { img: "https://drive.google.com/uc?export=download&id=1RYeM8LW-9MC6zlfIuHTm_EsOuP5HDxTW  ", name: "Sandesh Lanke" },
  { img: "https://drive.google.com/uc?export=download&id=1g5eXTlUL-6yLDMLSZwhR6jYqyO6X-Mh8  ", name: "Shreyash Kunjir" },
  { img: "https://drive.google.com/uc?export=download&id=1m-fc-zU4elK-pXVJKSCsNrXsof9SdBbc  ", name: "Shreyash Pawar" },
];



const sss = [
  { img: "https://drive.google.com/uc?export=download&id=196kAQFndgg0DRddU2evT7KL6XX6bqkZw  ", name: "Manas Ghormade", position:"Head" },
  { img: "https://drive.google.com/uc?export=download&id=1z78xhHNdYOgGJyZ4acbqzTrNRhBR7L6p  ", name: "Aditya Pardeshi", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1fltwAjPMl1q_jyLCC3isUWp5VTyTOGew  ", name: "Arya Godase", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1KdVlibUhxYHMsZdjdH4SJ1w2pzZOEGfn  ", name: "Avdhoot", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=12ldtVNZYjZ33mn_jSqqYteBRXf6rsP4r  ", name: "Swanand", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1hB79HQzoIT7Mc0_8rSvL8InzFrlNmKSt  ", name: "Kush Agarwal", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1m5DqfCKtlqmoY77bFArX1Hp-dG1Xeyke  ", name: "Sneha", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=118A_7-MmU_KW1sKv1lwReYyYYqBnSlkj  ", name: "Tejasvi", position:"Member"},
];

const des = [
  { img: "https://drive.google.com/uc?export=download&id=1kOoYFaxPaglIUNgZTllnPEqYa9Dn0ZZx", name: "Vedant Patil", position:"Branding Head" },
  { img: "", name: "DnyaneshWari", position:"Designing Head" },
  { img: "https://drive.google.com/uc?export=download&id=1zxoVmAh_AFQ1tJpL6oqX_M-Y5ZSK7yHe", name: "Suyash Wagde", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1XK8-d_rix-5ltlcTSWM3Dakk18JNxazd", name: "Shreya Kale", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1VHiQzIslkjMSVJM9eXaSUx_x_aH02HPv  ", name: "Aastha", position:"Member" },
];


const web = [
  { img: "", name: "Shreeram" ,position:"Head"},
  { img: "https://drive.google.com/uc?export=download&id=1cgSuRkLs0wPA2dPT6I5pjC-RWOqWdYkp", name: "Aditya Gaikwad", position:"Member" },
  { img: "https://drive.google.com/uc?export=download&id=1HQYaxiVUlpGH54xNIoV9jN_pYyzxnc2b  ", name: "Vishal Jangid", position:"Member" },
];

const coordinator = "https://drive.google.com/uc?export=download&id=17dk0NSis5kg2i2wK-ykVMmNG0E57PenT"
const lead="https://drive.google.com/uc?export=download&id=1IaGNS6xyJlDN6H9m1R0amyvxKnfr9oRp"
const colead="https://drive.google.com/uc?export=download&id=1SXdLx1ZFc41Gyv1Q37IKFF4G-KPeUeeZ"
const colead2 = "https://drive.google.com/uc?export=download&id=1Tpdwv6YQl13nMNRauIt8LQiiIVGMs_XV"

export default function Teams() {




  return (
    
      <div className="team" >
        <div className="team_wrapper">


          <h2 className="text-center text-lg">Event Co-ordinator</h2>
          <div className="team_row">
                <Member name={"Dr.Mahendra Salunkhe"} image={coordinator} position={"Event Co-ordinator"}/>
          </div>

          <h2 className="text-center text-lg">Lead</h2>
          <div className="team_row">
                <Member name={"Om Khare"} image={lead} position={"Team Lead"}/>
          </div>

          <h2 className="text-center text-lg">Co-Lead</h2>
          <div className="team_row">
          <Member name={"Chandrakant Raut"} image={colead2} position={"Management Lead"}/>
                <Member name={"Khushi rohra"} image={colead} position={"Finance Lead"}/>
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
          
          <h2 className=" text-center text-lg">Public Reaction Team</h2>
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
            
          <h2 className="text-center text-lg">Web Team</h2>
          <div className="team_row">
            {web.map((member) => {
              return (
                <>
                  <Member name={member.name} image={member.img} position={member.position}/>
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
          </div>


        </div>
      </div>
  );
}

