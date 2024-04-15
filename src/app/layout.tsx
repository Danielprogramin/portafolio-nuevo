import type { Metadata } from "next";
import "./globals.css";
import { b612_mono } from "../../fonts";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${b612_mono.className} antialiased`}>
        {children}
        </body>
    </html>
  );
}
