import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer"

export const metadata = {
  title: "Xander Burger",
  description: "Xander Burger's graphic design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-IBMPlex font-normal">
        <Header/>
        <div className="grid mx-[40px] grid-cols-12 gap-[20px] h-[100vh]">
          <div className="col-span-1 h-full border-r-[1px] border-solid border-black">
          </div>
          <div className="col-span-11 h-full">
            {children}
          </div>
        </div>
        <div className="border-t-[1px] border-solid border-black h-[40px] w-screen fixed bottom-0">
          
        </div>      
      </body>
    </html>
  );
}
