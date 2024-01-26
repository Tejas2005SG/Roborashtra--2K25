import "./globals.css";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadSlim } from "tsparticles-slim";
export const metadata = {
  title: "Roborastra",
  description:
    "Experience the thrill of Roborashtra, an inter-college robotics extravaganza organized by Pimpri Chinchwad College of Engineering and Research (PCCOER). Compete in exciting events like Robowar and Cam Warrior for a chance to win prizes worth 2 lakh rupees. Don't miss the opportunity to showcase your innovation and engineering skills. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}
