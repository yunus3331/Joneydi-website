import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

const estedad = localFont({
  src: [
    {
      path: "../fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "قرارگاه جهادی شهید جنیدی",
  description: "پایگاه خبری قرارگاه جهادی شهید جنیدی",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      
      <body className={estedad.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
