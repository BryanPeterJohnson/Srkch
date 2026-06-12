import "./globals.css";
import Header from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import LenisProvider from "../components/animations/LenisProvider";

export const metadata = {
  title: "SRKCH",
  description: "Company Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}