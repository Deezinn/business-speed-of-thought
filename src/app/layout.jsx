import Navbar from "@/components/navbar";

import "./fonts.css";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
