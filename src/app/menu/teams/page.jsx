import member1 from "./img/a.jpg";
import Member from "@/components/Member/Member";
import "./teams.css";
import "../clan/clan.css";
const members = [
  { img: member1, name: "Shreeram" },
  { img: member1, name: "Shreeram" },
  { img: member1, name: "Shreeram" },
  { img: member1, name: "Shreeram" },
];
export default function Teams() {
  return (
    <div className=" text-center text-lg">
      Team Coming soon
      {/* <div className="team" style={{ display: "none" }}>
        <h1>Our Team</h1>
        <div className="team_wrapper">
          <h2>Core Team</h2>
          <div className="team_row">
            {members.map((member) => {
              return (
                <div className="member_box">
                  <Member name={member.name} image={member.img} />
                </div>
              );
            })}
          </div>

          <h2>Complete Team</h2>
          <div className="team_row">
            {members.map((member) => {
              return (
                <>
                  <Member name={member.name} image={member.img} />
                </>
              );
            })}
          </div>

        </div>
      </div> */}
    </div>
  );
}
