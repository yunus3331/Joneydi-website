"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";
import { useState } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/context/AuthContext";



export default function Header() {
  const pathname = usePathname();
  const [showAuth, setShowAuth] = useState(false);
  const [showMode, setShowMode] = useState("");
  return (
    <header className=" bg-[#0597ca]">
      <div className="flex items-center justify-between px-4 py-1">
        <div className="flex items-center gap-3">
          <Image src="/jahad.png" alt="لوگوی قرارگاه جهادی شهید جنیدی" width={55} height={55}/>
          <h1 className="font-black">قــرارگاه جهادی شهید جنیدی</h1>
        </div>
        
        <div className="flex gap-3">
          <nav className="flex gap-5">
            <Link
              href="/"
              className={
                pathname === "/"
                ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"
                : "text-white hover:text-[#FFD166] transition-colors"
              }
            >
              خانه
            </Link>

            <Link
              href="/news" 
              className={
                pathname === "/news"
                ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"
                : "text-white hover:text-[#FFD166] transition-colors" 
              }
            >
              اخبار
            </Link>
            <Link href="/gallery" className={pathname === "/gallery" ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors" : "text-white hover:text-[#FFD166] transition-colors"}>
              عکس ها
            </Link>
            <Link href="/about" className={pathname === "/about" ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"  : "text-white hover:text-[#FFD166] transition-colors" }>
              درباره ما
            </Link>
            <Link href="/contact" className={pathname === "/contact"  ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"  : "text-white hover:text-[#FFD166] transition-colors"}>
              ارتباط با ما
            </Link>
          </nav>
          <UserMenu onLoginClick={() => {setShowAuth(true) , setShowMode("login")}} onSignupClick={() => {setShowAuth(true) , setShowMode("signup")}}/>
          {showAuth && (<AuthModal onClose={() => setShowAuth(false)} modes={showMode} />)}
        </div>
      </div>
    </header>
  );
}