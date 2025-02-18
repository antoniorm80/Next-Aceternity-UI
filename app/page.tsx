import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import FlipWordsDemo from "./pages/flip-words/page";
import { CardStack } from "@/components/ui/card-stack";
import CardStackDemo from "./pages/card-stack/page";

export default function HomePage() {
  return (
    <AuroraBackground className="bg-white">
      {/* <h1 className="font-bold text-7xl">Aceternity UI</h1> */}
      
      {/* <CardStackDemo/>    */}
      <FlipWordsDemo/>   
    </AuroraBackground>
  );
}
