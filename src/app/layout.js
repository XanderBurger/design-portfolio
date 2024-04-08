import "./globals.css";
import Footer from "./components/footer"
import {IBM_Plex_Sans} from "next/font/google"
import dynamic from 'next/dynamic';
import Header from "./components/header";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ["normal", "italic"],
  variable: '--font-ibm',
})

export const metadata = {
  title: "Xander Burger",
  description: "Xander Burger's graphic design portfolio",
  icons :{
    icon: "/favicon.webp",
    favicon: "/favicon.webp",
    appleIcon: "favicon.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_sans.variable} font-IBMPlex`}>
        <Header/>
          <div>
            {children}
          </div>
      </body>
    </html>
  );
}
