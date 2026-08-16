import HeroSlider from "@/components/HeroSlider";



export default function Home() {
  return (
    <main>
      <div className="flex gap-6 mx-6 ">
        <div className="w-2/3">
          <HeroSlider />
        </div>
      </div>
    </main>
  );
}