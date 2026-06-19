import Image from "next/image";
import Nav from "./components/shared/Nav";
import BottomNav from "./components/shared/BottomNav";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] px-2.5">
      <Nav />
      <Hero/>
      <BottomNav />
    </div>
  );
}
