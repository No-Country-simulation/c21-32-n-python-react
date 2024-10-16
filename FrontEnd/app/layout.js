import localFont from "next/font/local";
import "./globals.css";
import { josefinaSans } from "./ui/shared/fonts";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Mi refugio",
  description: "Perritos y gatitos en adopción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefinaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
