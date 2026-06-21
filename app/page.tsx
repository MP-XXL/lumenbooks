import Image from "next/image";
import Homepage from "@/app/home/page"


export const revalidate = 3600

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <Homepage />
  
     
     
    </div>
  );
}
