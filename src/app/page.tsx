import { ImgSlider } from "@/components/img-slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full pt-[70px] md:pt-[100px] px-5">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-start items-center py-5 space-y-5">
          <div className="w-full h-[500px] bg-gray-400 rounded-sm overflow-hidden">
            <ImgSlider />
          </div>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div
              className="w-full h-[300px] bg-gray-400"
              style={{
                backgroundImage: "url('/solar-panel.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-sky-700/80 via-sky-600/30 to-white/10 flex flex-col justify-end">
                <div className="flex items-end">
                  <div className="text-stone-100 p-4">
                    <h1 className="text-xl font-semibold">Solar panels</h1>
                    <h2 className="text-wrap font-medium">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum voluptate dignissimos veniam eligendi corporis.
                    </h2>
                  </div>
                  <button className="p-2 px-4 rounded-sm font-bold bg-stone-800 text-white m-2 flex-shrink-0">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full h-[300px] bg-gray-400"
              style={{
                backgroundImage: "url('/electric-charger.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-sky-600/80 via-sky-600/30 to-white/10 flex flex-col justify-end">
              <div className="flex items-end">
                  <div className="text-stone-100 p-4">
                    <h1 className="text-xl font-semibold">Electric Chargers</h1>
                    <h2 className="text-wrap font-medium">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum voluptate dignissimos veniam eligendi corporis.
                    </h2>
                  </div>
                  <button className="p-2 px-4 rounded-sm font-bold bg-stone-800 text-white m-2 flex-shrink-0">
                    Shop now
                  </button>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100">
            


      </div>
    </>
  );
}
