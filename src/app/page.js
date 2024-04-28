import Image from "next/image";
import Hero from "./components/HeroPage";
import Features from "./components/Features";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Explore/>
    </>
  );
}
