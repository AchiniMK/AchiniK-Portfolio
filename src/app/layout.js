import { Inter } from "next/font/google"; // Change if using a different font
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Velvet Bean | Coffee Shop",
  description: "Freshly roasted coffee beans for the best experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
