"use client";

import { useEffect, useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
/*const slides = [
  {
    id: 1,
    title: "برگزاری اردوی جهادی در مناطق محروم",
    description:
      "گروه جهادی شهید جنیدی در ادامه فعالیت‌های خود اردوی جدیدی برگزار کرد.",
    image: "/images/20251205_144205.jpg",
  },
  {
    id: 2,
    title: "آغاز فعالیت‌های جهادی تابستان",
    description:
      "فعالیت‌های جهادی مجموعه در تابستان امسال آغاز شد.",
    image: "/images/9.jpg",
  },
  {
    id: 3,
    title: "گزارش تصویری از فعالیت‌های گروه",
    description:
      "گزارشی از آخرین فعالیت‌های قرارگاه جهادی شهید جنیدی.",
    image: "/images/2.jpg",
  },
];*/

export default function HeroSlider() {
  const [slides, setSlides] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() =>{
    fetch("http://127.0.0.1:8000/api/news/hero/")
    .then((response) => response.json())
    .then((data) =>{
      setSlides(data);
    })
    .catch((error) => {
      console.error("error fetching heros", error);
    });
  },[]);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide(
      (previousSlide) => (previousSlide + 1) % slides.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    if (isPaused){
      return
    }
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  if (slides.length === 0 ){
    return null;
  }


  
  return (
    <>
      <div className="">
        <section
          onMouseEnter={()=>setIsPaused(true)}
          onMouseLeave={()=>setIsPaused(false)}
          className="relative h-130 overflow-hidden"
        >
          <img key={slide.id} src={`http://127.0.0.1:8000${slide.image}`} alt={slide.title} className="w-full h-full object-cover rounded-4xl hero-fade"/>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl rounded-2xl bg-black/50 backdrop-blur-md border border-white/30 p-1 text-white">
            <h2 className="text-3xl text-[#FFD166] font-bold text-center">{slide.title}</h2>
            <p className="mt-1 text-lg text-[#FFD166]/40 text-center">{slide.summary}</p>
          </div>
          
          <button onClick={nextSlide} className="group absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10">
            <ArrowLeft className="w-10 h-10 text-white group-hover:text-gray-400 transition" />
          </button>

          <button onClick={previousSlide} className="group absolute right-1 top-1/2 -translate-y-1/2  w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10">
            <ArrowRight className="w-9 h-9 text-white group-hover:text-gray-400 transition" />
          </button>
        </section>
        <div className="w-full flex justify-center gap-2 mt-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}