import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "QurbaniHat",
  description: "Livestock Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}