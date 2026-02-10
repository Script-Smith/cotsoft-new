import "./globals.css";
import { Poppins, Great_Vibes } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: '--font-inter'
})

const spaceGrotesk = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-spaceGrotesk'
})

export const metadata = {
  title: "Home | Cotsoft",
  description:
    "V2V Holidays brings your travel dreams to life, whether you are cruising in luxury, exploring lively cities, or unwinding at a top-tier resort.",
  icons:{
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} custom-scrollbar antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
