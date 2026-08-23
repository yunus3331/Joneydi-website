"use client";
import { useEffect,useState } from "react";

  
export default function GalleryPreview() {
    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/home/`)
          .then((response) => response.json())
          .then((data) => {
            setGalleries(data);
          })
          .catch((error) => {
            console.error("Error fetching galleries:", error);
          });
      }, []);
    return (
        <section className="mx-20 mt-10">
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold">
                گزارش تصویری
            </h2>
            <div className="flex-1 h-[2px] bg-[#FFD166] mx-4"></div>
            <a
            href="/gallery"
            className="hover:text-[#FFD166] transition-colors"
            >
            مشاهده بیشتر ←
            </a>
        </div>
        <div className="grid grid-cols-3 gap-5">

            {galleries.map((gallery) => (
            <article
                key={gallery.id}
                className="group"
            >

                <a href={`/gallery/${gallery.id}`}>
                <div className="overflow-hidden rounded-3xl">
                    <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${gallery.cover}`}
                    alt={gallery.title}
                    className="
                        w-full
                        h-60
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                    />

                </div>
                <h3
                    className="
                    mt-3
                    text-xl
                    font-bold
                    transition-colors
                    group-hover:text-[#FFD166]
                    duration-500
                    "
                >
                    {gallery.title}
                </h3>
                <p className="mt-1 text-gray-600">
                    {gallery.description}
                </p>
                </a>

            </article>
            ))}
        </div>
        </section>
    );
}