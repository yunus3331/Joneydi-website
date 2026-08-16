import HeroSlider from "@/components/HeroSlider";
import NewsDesk from "@/components/NewsDesk";



export default function Home() {
  return (
    <main>
      <div className="flex flex-row h-130 gap-10 mx-20 mt-5 ">
        <div className="h-full w-2/3">
          <HeroSlider/>
        </div>
        <div className="flex flex-col gap-5 h-full w-1/3">
          <img 
            src="/images/bsj.jpg"
            alt="بسیج دانشگاه علامه"
            className="flex-1 min-h-0 w-full rounded-4xl"
          />
          <img
            src="/images/atu.jpg"
            alt="Allameh Tabatabaei university"
            className="flex-1 min-h-0 rounded-4xl w-full"
          />
        </div>
      </div>
      <NewsDesk/>
    </main>
  );
}