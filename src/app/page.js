import Image from "next/image";
import Hero from "./components/HeroPage";
import Features from "./components/Features";
import Explore from "./components/Explore";
import Creativity from "./components/Creativity";
import Innovation from "./components/Innovation";
import NFT from "./components/NFTs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Explore />
      <div className="pb-40">
        <Creativity />
        </div>
      <Innovation />
      <NFT/>
    </>
  );
}
