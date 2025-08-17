import "./globals.css";
import "./fonts.css";

import Navbar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
