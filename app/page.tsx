import Image from "next/image";
import Nav from "./components/shared/Nav";
import BottomNav from "./components/shared/BottomNav";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <Nav />
      <BottomNav />
    </div>
  );
}
