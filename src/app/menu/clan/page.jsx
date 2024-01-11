import Image from "next/image";
import "./clan.css";
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
export default function Clan() {
  return (
    <div className="clan">
      <h1 className="title">RoboHawk</h1>
      <p className="clan_text">
        Advanced drone technology, showcasing autonomous flight, obstacle
        avoidance, and precision cinematic capture, all while adhering to
        specific time constraints. This event provides an opportunity to observe
        the future of aerial cinematography and technological innovation in
        action. Advanced drone technology, showcasing autonomous flight,
        obstacle avoidance, and precision cinematic capture, all while adhering
        to specific time constraints.
      </p>
      <div className="social_media">
        <a href="https://www.instagram.com/robohawk.pccoer?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
          <Image src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61552083314105&mibextid=ZbWKwL">
          <Image src={facebook} alt="instagram" />
        </a>

        <a href="https://www.linkedin.com/in/robo-hawk-510206293/">
          <Image src={linkedin} alt="instagram" />
        </a>
        <a href="https://twitter.com/robohawk_pccoer?t=UdhKVAhcpMhn1Bl9zYw7QQ&s=09">
          <Image src={twitter} alt="instagram" />
        </a>
      </div>
    </div>
  );
}
