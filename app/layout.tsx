
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oogo Media",
  description: "Digital Marketing Agency",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
