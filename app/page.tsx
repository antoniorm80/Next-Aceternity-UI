import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import FlipWordsDemo from "./pages/flip-words/page";

export default function HomePage() {
  return (
    <AuroraBackground className="bg-white">
      {/* <h1 className="font-bold text-7xl">Aceternity UI</h1> */}
      <FlipWordsDemo/>
    </AuroraBackground>
  );
}
