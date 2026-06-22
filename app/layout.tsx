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
    // Added suppressHydrationWarning here to stop extension mismatch errors
    <html lang="en" suppressHydrationWarning>
      {/* Adjusted padding from pt-[45px] to pt-[64px] to match your header height */}
      <body className="pt-[64px]">
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}