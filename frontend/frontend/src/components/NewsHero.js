import { useState, useEffect } from "react"
import Link from "next/link";

export default function NewsHero(){
    const [news, setNews]=useState([]);
    const [enableTransition, setEnableTransition] = useState(true);
    const sliderNews = [
      ...news,
      ...news.slice(0, 2),
    ];
    const [currentIndex, setCurrentIndex]=useState(0);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/news/newsdesk/")
          .then((response) => response.json())
          .then((data) => {
            setNews(data);
          })
          .catch((error) => {
            console.error("Error fetching newsdesk news:", error);
          });
      }, []);
    useEffect(() => {
      if (news.length < 2) {
        return;
      }
    
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000);
    
      return () => {
        clearInterval(timer);
      };
    }, [news.length]);
    useEffect(() => {
      if (currentIndex === news.length) {
        setTimeout(() => {
          setEnableTransition(false);
          setCurrentIndex(0);
    
          setTimeout(() => {
            setEnableTransition(true);
          }, 50);
    
        }, 700);
      }
    }, [currentIndex, news.length]);
    return (
      <section className="mx-20 mt-10 overflow-hidden">
        <div className={`flex ${enableTransition ? "transition-transform duration-700" : ""}`} style={{transform: `translateX(${currentIndex * 50}%)`,}}>
          {sliderNews.map((item, index) => (
            <article key={`${item.id}-${index}`} className="w-1/2 shrink-0 px-2">
              <Link href={"/news"} className="relative group block h-80 overflow-hidden rounded-3xl">
                <img src={`http://127.0.0.1:8000${item.image}`} className="h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center p-6">
                  <h2 className="text-center text-3xl font-bold text-white transition-colors duration-500 group-hover:text-[#FFD166]">
                    {item.title}
                  </h2>
                </div>
              </Link>
            </article>
          ))}
    
        </div>
        
      </section>
      
      
    );
}