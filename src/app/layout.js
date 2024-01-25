import "./globals.css";
import ImageLoader from "@/components/loader/Loader";
export const metadata = {
  title: "Roborastra",
  description:
    "Experience the thrill of Roborashtra, an inter-college robotics extravaganza organized by Pimpri Chinchwad College of Engineering and Research (PCCOER). Compete in exciting events like Robowar and Cam Warrior for a chance to win prizes worth 2 lakh rupees. Don't miss the opportunity to showcase your innovation and engineering skills. ",
};

export default function RootLayout({ children }) {
  return (
    <ImageLoader>
    <html lang="en">
      <body>{children}</body>
    </html>
    </ImageLoader>
  );
}
