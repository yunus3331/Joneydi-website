"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
  return (
    <header className=" bg-[#0597ca]">
      <div className="flex items-center justify-between px-8 py-1">
        <div className="flex items-center gap-3">
          <Image src="/jahad.png" alt="لوگوی قرارگاه جهادی شهید جنیدی" width={55} height={55}/>
          <h1>قــرارگاه جهادی شهید جنیدی</h1>
        </div>
        

        <nav className="flex gap-6">
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
          <Link
            href="/gallery" 
            className={
              pathname === "/gallery"
              ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"
              : "text-white hover:text-[#FFD166] transition-colors" 
            }
          >
             عکس ها
          </Link>
          <Link
            href="/about" 
            className={
              pathname === "/about"
              ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"
              : "text-white hover:text-[#FFD166] transition-colors" 
            }
          >
             درباره ما
          </Link>
          <Link
            href="/contact" 
            className={
              pathname === "/contact"
              ? "text-[#c4c4c4] hover:text-[#FFD166] transition-colors"
              : "text-white hover:text-[#FFD166] transition-colors" 
            }
          >
             ارتباط با ما
          </Link>
        </nav>
      </div>
    </header>
  );
}