'use client'

import Image from 'next/image'

import Img1 from "@/public/png/City 17 D.png"
import Img2 from "@/public/png/City 17 M.png"
import Img3 from "@/public/png/Crazy By Rasel D.png"
import Img4 from "@/public/png/Crazy By Rasel App M.png"
import Img5 from "@/public/png/Super Aurora D.png"

const galleryData = [
  { src: Img1, speed: 0.7 },
  { src: Img2, speed: 0.9 },
  { src: Img3, speed: 0.7 },
  { src: Img4, speed: 0.9 },
  { src: Img5, speed: 0.7 },
]

export default function HeroGallery() {
  return (
    <div className="w-full py-10 flex justify-center">
      {/* 🔲 OUTER BIG BORDER BOX */}
      <div
        className="
          w-[95%] max-w-7xl
          border-4 border-black rounded-2xl bg-zinc-900
          p-6
          shadow-lg
          overflow-hidden
          relative
          h-[600px]
        "
      >
        {/* Inner grid of columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {galleryData.map((item, colIndex) => (
            <div
              key={colIndex}
              className="flex justify-center"
            >
              <div
                className="
                  tp-hero-gallery-item
                  flex flex-col gap-4
                  will-change-transform
                  animate-float
                "
                data-speed={item.speed}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <Image
                    key={i}
                    src={item.src}
                    alt={`hero-thumb-${colIndex + 1}`}
                    width={250}
                    height={150}
                    className="
                      rounded-md
                      border border-gray-200
                      shadow
                      object-cover
                      transition
                      duration-300
                      hover:scale-[1.05]
                    "
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
