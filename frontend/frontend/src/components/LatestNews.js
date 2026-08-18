"use client";
import { useEffect , useState } from "react";
import Link from "next/link";

export default function LatestNews(){
    const [news, setNews]=useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/news/")
          .then((response) => response.json())
          .then((data) => {
            setNews(data);
          })
          .catch((error) => {
            console.error("Error fetching news:", error);
          });
      }, []);
    return(
        <section className="mx-20 mt-10">
            <div className="flex items-center justify-between mb-15">
                <h2 className="text-2xl font-bold">
                    آخرین اخبار
                </h2>
                <div className="flex-1 h-[2px] bg-[#FFD166] mr-4"></div>
            </div>
            <div className="flex flex-col gap-10 mx-10">
                {news.map((item) =>(
                    <Link href={`/news/${item.id}`} key={item.id} className="flex gap-6 group">
                        <img src={`http://127.0.0.1:8000${item.image}`} alt={item.title} className="w-80 h-40 object-cover rounded-3xl shadow-lg shadow-[#FFD166]/50 group-hover:shadow-xl group-hover:shadow-[#FFD166]/30 transition-shadow duration-500"/>
                        <div>
                            <h3 className="font-bold text-2xl group-hover:text-[#FFD166] transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 mt-3">
                                {item.summary}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

    );
}