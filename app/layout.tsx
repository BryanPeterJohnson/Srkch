import "./globals.css";
import Header from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import LenisProvider from "../components/animations/LenisProvider";
import ScrollToTopButton from "../components/layout/ScrollToTopButton";

export const metadata = {
  title: "SRKCH",
  description: "SRK Care at home",
  icons: {
    icon: "/images/logo1.ico",
    shortcut: "/images/logo1.ico",
    apple: "/images/logo.ico",
  },
};

// suppressHydrationWarning stops extension mismatch errors
// body pt-[64px] matches the fixed header height
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="pt-[64px]">
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </LenisProvider>
      </body>
    </html>
  );
}