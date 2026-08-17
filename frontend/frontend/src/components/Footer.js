export default function Footer() {
    return (
      <footer className="mt-16 bg-[#0597ca] text-white">
        <div className="mx-20 py-10">
            <div className="grid grid-cols-3 gap-10">
                <div>
                <h3 className="text-xl font-bold mb-4">
                    قرارگاه جهادی شهید جنیدی
                </h3>
                <p className="text-sm leading-7 text-white/90">
                    در کنار مردم، برای مردم
                    <br />
                    با هدف خدمت‌رسانی و فعالیت‌های جهادی
                </p>
                </div>
    
    
                <div>
                    <h3 className="text-lg font-bold mb-4">
                        دسترسی سریع
                    </h3>
                    <div className="flex flex-col gap-3 text-sm">
                        <a
                        href="/"
                        className="hover:text-[#FFD166] transition-colors"
                        >
                        خانه
                        </a>
                        <a
                        href="/news"
                        className="hover:text-[#FFD166] transition-colors"
                        >
                        اخبار
                        </a>
                        <a
                        href="/gallery"
                        className="hover:text-[#FFD166] transition-colors"
                        >
                        گزارش تصویری
                        </a>
                        <a
                        href="/about"
                        className="hover:text-[#FFD166] transition-colors"
                        >
                        درباره ما
                        </a>
                        <a
                        href="/contact"
                        className="hover:text-[#FFD166] transition-colors"
                        >
                        ارتباط با ما
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">
                        ارتباط با ما
                    </h3>
    
                    <div className="flex flex-col gap-3 text-sm">
        
                        <p>
                        09366176406
                        </p>
        
                        <p>
                        ایمیل: joneydi@gmail.com
                        </p>
        
                        <p>
                        تهران، ایران
                        </p>
        
                    </div>
                </div>
            </div>
        </div>
  
        <div className="border-t border-white/20">
  
          <div className="mx-20 py-4 text-center text-sm text-white/80">
            © ۱۴۰۵ قرارگاه جهادی شهید جنیدی
          </div>
  
        </div>
  
      </footer>
    );
  }