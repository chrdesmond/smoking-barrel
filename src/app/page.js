"use client";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import dynamic from "next/dynamic";
import Demo from "@/components/Carousel";


const ClientCarousel = dynamic(() => import("../components/ClientCarousel"), { ssr: false})

export default function Home() {
  return (
    <>
    <section className="relative rounded-lg">
      <div relative>
        <ClientCarousel/>
      </div>
      <div>
        <Demo/>
      </div>
    </section>
    </>
  );
}
