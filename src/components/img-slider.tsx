"use client";
import slideImg1 from "@/../public/scroll-image-1.jpg"
import slideImg2 from "@/../public/scroll-image-2.jpg"
import slideImg3 from "@/../public/scroll-image-3.jpg"
import { useEffect, useState } from "react"
import "@/styles/img-slider.css"
import { ArrowLeft } from "./icons/arrow-left";
import { ArrowRight } from "./icons/arrow-right";

const CONTENT = [
    {   
        image:slideImg1.src,
        header:"Solar Savages",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
        href:"/"
    },
    {   
        image:slideImg2.src,
        header:"Wind Wizards",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
        href:"/"
    },
    {   
        image:slideImg3.src,
        header:"Electric Eccentrics",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse, porro suscipit at alias nihil obcaecati veniam. Tenetur consequatur ipsam at, laboriosam ipsa harum perferendis natus consequuntur, esse illo soluta.",
        href:"/"
    }
]

export const ImgSlider = ()=> {
    const [imageIndex, setImageIndex] = useState(0)
    const nextSlide = () => setImageIndex((prev)=>prev===CONTENT.length-1?0:prev+1)
    const prevSlide = () => setImageIndex((prev)=>prev===0?CONTENT.length-1:prev-1)

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide()
        }, 1000*10)

        return () => {
            clearInterval(interval)
        }
    },[imageIndex])


    return (
        <div className="w-full h-full relative">
            <div className="relative h-full w-full flex overflow-hidden">
                {CONTENT.map((item,i)=>(
                    <div key={`slider-img-${i}`} className="relative slider-slide" style={{
                        translate:`${-100 * imageIndex}%`}}>
                        <img key={`slider-img-${i}`} src={item.image} alt={`Slider Image ${i+1}`} className="slider-img"/>
                        <div className="absolute bg-black/30 w-full h-full top-0 bottom-0 right-0 left-0 flex justify-center items-center md:py-20 ">
                            <div className="bg-sky-600/80 h-full min-w-20 md:max-w-[400px] flex flex-col justify-between p-6 lg:-translate-x-1/2">
                                <h1 className="text-white font-bold text-2xl mb-2">
                                    {item.header}
                                </h1>
                                <h2 className="text-gray-200 text-wrap font-medium grow text-sm leading-6 tracking-wider">
                                    {item.text}
                                </h2>
                                <button className="bg-stone-800 p-2 px-4 rounded-sm w-auto max-w-max text-white font-semibold">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="slider-btn text-sky-950 !left-0 hidden lg:block" onClick={prevSlide}>
                <ArrowLeft/>
            </button>
            <button className="slider-btn text-sky-950 !right-0" onClick={nextSlide}>
                <ArrowRight/>
            </button>
            <div style={{
                position:"absolute",
                bottom:"0.5rem",
                left: "50%",
                translate:"-50%",
                display:"flex",
                gap:"0.5rem"
            }}>
                {
                    CONTENT.map((_,i)=>(
                        <button key={i} className="slider-dot-btn text-white bg-stone-500/10 rounded-full hover:bg-stone-500/50 hover:scale-125 focus-visible:bg-stone-500/50 focus-visible:scale-125" onClick={()=>setImageIndex(i)}>
                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center ">
                                {
                                    imageIndex === i && (
                                        <div className="w-2 h-2 bg-white rounded-full"/>
                                    )
                                }
                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}