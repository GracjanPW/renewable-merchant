import { ImgSlider } from "@/components/img-slider";
import { ReviewSlider } from "@/components/review-slider";
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
      <div className="bg-sky-600">
        <div className="max-w-6xl mx-auto py-10 px-5">
          <h2 className="text-center text-4xl font-semibold text-white tracking-wide">
            Our Story
          </h2>
          <div className="space-y-8 text-stone-100 leading-6 tracking-wide pb-10 lg:text-lg">
            <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 gap-6">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci quidem odit dolores vero error reprehenderit, quaerat
                ipsum id quae facilis eligendi perferendis obcaecati eum
                deleniti placeat labore, in dolore consectetur.
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                exercitationem eius reiciendis dicta omnis, dolore vel maiores
                voluptas quibusdam ad aut doloremque nulla saepe laborum
                consequuntur veritatis, itaque sit? Rem atque quo voluptate
                porro esse dicta, dolore quaerat quam aliquid? Illum tempore
                fuga alias.
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus deserunt illum, unde quasi quas maxime, est
              possimus nam quo sunt. Quaerat, quibusdam accusamus, quis
              voluptates repellat vitae suscipit quod porro repudiandae iure
              animi. Ipsa nulla possimus aliquam porro corrupti beatae debitis
              dolore, animi pariatur nobis et molestiae numquam quod.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto py-10 space-y-6">
          <h2 className="text-center text-4xl font-semibold text-stone-800 tracking-wide">
            Our Customers
          </h2>
          <div className="w-full min-h-[300px] h-[300px]">
            <ReviewSlider />
          </div>
        </div>
      </div>
    </>
  );
}
