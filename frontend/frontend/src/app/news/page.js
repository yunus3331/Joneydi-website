"use client";

import NewsHero from "@/components/NewsHero";
import LatestNews from "@/components/LatestNews";
import { useEffect, useState } from "react";

export default function news(){
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/`)
          .then((response) => response.json())
          .then((data) => {
            setNews(data);
          })
          .catch((error) => {
            console.error("Error fetching news:", error);
          });
      }, []);
    return(
      <div>
        <NewsHero/>
        <LatestNews/>\
      </div>
    )
}