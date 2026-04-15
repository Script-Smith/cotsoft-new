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
  title: "Cotsoft",
  description:
    "At Cotsoft, we are redefining comfort and style through innovative, sustainable practices. Promoted by visionary female entrepreneurs, our brand combines cutting-edge technology with skilled craftsmanship to create premium-quality fashion essentials. From using the finest cotton yarns and synthetic filaments to embracing eco-friendly practices, we ensure every product reflects durability, fit, and a commitment to excellence. At Cotsoft, we blend global standards with local expertise to deliver exceptional products for every occasion. Headquartered in Bhopal, our skilled team ensures innovation, sustainability, and customer satisfaction remain at the heart of everything we do",
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
