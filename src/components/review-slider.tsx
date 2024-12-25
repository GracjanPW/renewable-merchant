"use client";
import slideImg1 from "@/../public/scroll-image-1.jpg";
import slideImg2 from "@/../public/scroll-image-2.jpg";
import slideImg3 from "@/../public/scroll-image-3.jpg";
import { useEffect, useState } from "react";
import "@/styles/img-slider.css";
import { ArrowLeft } from "./icons/arrow-left";
import { ArrowRight } from "./icons/arrow-right";

const CONTENT = [
  {
    header: "Amazing Products",
    author: "Adam A",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
  },
  {
    header: "Great quality, Just price!",
    author: "Jerry W",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
  },
  {
    header: "Electric Eccentrics",
    author: "James P",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
  },
  {
    header: "Electric Eccentrics",
    author: "James P",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
  },
  {
    header: "Electric Eccentrics",
    author: "James P",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
  },
  {
    header: "Electric Eccentrics",
    author: "James P",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
  },
];

export const ReviewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const nextSlide = () =>
    setImageIndex((prev) => (prev === CONTENT.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setImageIndex((prev) => (prev === 0 ? CONTENT.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [imageIndex]);

  return (
    <div className="w-full min-h-full relative">
      <div className="relative h-full w-full flex overflow-hidden">
        {CONTENT.map((item, i) => (
          <div
            key={`slider-img-${i}`}
            className="relative object-cover h-full md:w-1/2 w-full flex flex-col justify-center shrink-0 grow-0 transition-[translate] duration-300 ease-in p-3"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          >
            <div className="bg-sky-500 p-6 rounded-sm">
              <h1 className="text-stone-100 font-semibold text-xl">
                {item.header}{" "}
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </h1>
              <p className=" text-stone-200">{item.text}</p>
              <div className="text-stone-200 text-right mt-2">{item.author}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="slider-btn text-sky-950 !left-0 hidden lg:block"
        onClick={prevSlide}
      >
        <ArrowLeft />
      </button>
      <button className="slider-btn text-sky-950 !right-0" onClick={nextSlide}>
        <ArrowRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {CONTENT.map((_, i) => (
          <button
            key={i}
            className="slider-dot-btn bg-stone-500/40 rounded-full hover:bg-stone-500/50 hover:scale-125 focus-visible:bg-stone-500/50 focus-visible:scale-125"
            onClick={() => setImageIndex(i)}
          >
            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center ">
              {imageIndex === i && (
                <div className="w-2 h-2 bg-white rounded-full" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
