import { ImgSlider } from "@/components/img-slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen w-full pt-[100px]"
      >
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-start items-center py-5">
          <div className="w-full h-[500px] bg-gray-400 rounded-sm overflow-hidden">
            <ImgSlider/>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100"></div>
    </>
  );
}
