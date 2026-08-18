"use client";

import NewsHero from "@/components/NewsHero";
import { useEffect, useState } from "react";

export default function news(){
    const [news, setNews] = useState([]);
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
        <NewsHero/>
    )
}