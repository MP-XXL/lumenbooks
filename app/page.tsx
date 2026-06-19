import Image from "next/image";
import Nav from "./components/shared/Nav";
import BottomNav from "./components/shared/BottomNav";
import Hero from "./components/home/Hero";
import Explore from "./components/home/Explore";
import Featured from "./components/home/Featured";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <Nav />
      <Hero/>
      <Explore />
      <Featured />
      <Contact />
      <BottomNav />
    </div>
  );
}
