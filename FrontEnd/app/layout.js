import localFont from "next/font/local";
import "./globals.css";
import { josefinaSans } from "./fonts/fonts";
import { SessionProvider } from "next-auth/react";
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
  title: "Buscando huellas",
  description: "Perritos y gatitos en adopción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefinaSans.className} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
