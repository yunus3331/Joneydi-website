import Link from "next/link";
const news = [
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
      description:"فعالیت های قرارگاه جهادی آغاز شد و درحال پیش رفتن هست",
      image: "/images/9.jpg",
    },
    {
      id: 3,
      title: "گزارش تصویری از فعالیت‌های گروه",
      description:"گزارش تصویری فعالیت های یک ساله گروه جهادی در سال 1405",
      image: "/images/2.jpg",
    },
    {
      id: 4,
      title: "ادامه فعالیت‌های قرارگاه جهادی",
      description:"فعالیت های گروه جهادی کماکان ادامه دارد با وجود جنگ تحمیلی",
      image: "/images/20251205_144205.jpg",
    },
  ];
  
  export default function NewsDesk() {
    return (
      <section className="mx-20 mt-10">
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold">
                میز خبر
            </h2>
            <div className="flex-1 h-[2px] bg-[#FFD166] mx-1" ></div>
            <a href="/news" className="hover:text-[#FFD166]">
                مشاهده بیشتر ←
            </a>
        </div>
  
  
        <div className="flex gap-5">
            <Link href={"/news"} className="w-2/3 group" >
                <div className="relative overflow-hidden rounded-3xl">
                  <img src={news[0].image} alt={news[0].title} className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-105"/>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to transparent"/>
                  <div className="absolute bottom-0 right-0 left-0 p-6">
                    <h3 className="text-2xl text-white font-bold group-hover:text-[#FFD166] transition-colors duration-1000">
                    {news[0].title}
                    </h3>
        
                    <p className="mt-2 text-white/40">
                    {news[0].description}
                    </p>
                  </div>
                </div>
            </Link>
            <div className="w-1/3 flex flex-col gap-4">
                {news.slice(1).map((item) => (
                <Link
                    href={"/news"}
                    key={item.id}
                    className="flex gap-3 group"
                >
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-24 object-cover rounded-2xl"
                    />
    
                    <div>
                    <h3 className="font-bold group-hover:text-[#FFD166] transition-colors duration-500">
                        {item.title}
                    </h3>
                    <p className="w-50 text-sm text-gray-600">
                        {item.description}
                    </p>
                    </div>
                </Link>
                ))}
    
            </div>
  
        </div>
  
      </section>
    );
  }