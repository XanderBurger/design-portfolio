import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-ibm",
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-ibm-mono",
});

export const metadata = {
  title: "Xander Burger",
  description: "Xander Burger's graphic design portfolio",
  icons: {
    icon: "/favicon.webp",
    favicon: "/favicon.webp",
    appleIcon: "favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${ibm_plex_sans.variable} ${ibm_plex_mono.variable} font-IBMPlex bg-light-gray text-almost-black`}>
        <main className='w-full flex justify-center p-2 lg:p-5'>
          {children}
        </main>
      </body>
    </html>
  );
}
