import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "DecoArt Exchange | Welcome to DecoArt Exchange  where art comes to life.",
  description: "Welcome to our art gallery, a haven for creativity and expression. Immerse yourself in a world of captivating masterpieces crafted by diverse, talented artists. Explore the beauty, emotion, and innovation that define our curated collection. With a commitment to showcasing exceptional art, we invite you to indulge in the transformative power of visual storytelling. .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
