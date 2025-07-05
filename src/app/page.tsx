import Carousel from "@/components/Custom/carousel/Carousel";
import FloatingSearch from "@/components/Custom/FloatingSearch";

export default function Home() {
  return (
    <>
      <div className="floatingSearch relative">
      <Carousel></Carousel>
      <FloatingSearch  ></FloatingSearch>
      </div>
    </>
      );
}
