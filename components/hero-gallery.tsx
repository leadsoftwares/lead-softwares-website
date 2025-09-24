'use client'

import Image from 'next/image'

import Img1 from "@/public/png/website pages ui/Barq e Shop 2.png"
import Img2 from "@/public/png/website pages ui/City 17 1.png"
import Img3 from "@/public/png/website pages ui/Crazy by rasel 2.png"
import Img4 from "@/public/png/website pages ui/IDN 2.png"
import Img5 from "@/public/png/website pages ui/Lawraze 1.png"

const galleryData = [
  { src: Img3, speed: 0.6 },
  { src: Img2, speed: 1.0 },
  { src: Img1, speed: 0.6 },
  { src: Img4, speed: 1.0 },
  { src: Img5, speed: 0.6 },
]

export default function HeroGallery() {
  return (
    <div className="w-full py-10 flex justify-center">
      {/* 🔲 OUTER BIG BORDER BOX */}
      <div
        className="
          w-[95%] max-w-10xl
          border-14 border-zinc-700 rounded-4xl bg-zinc-900
          p-6
          shadow-lg
          overflow-hidden
          relative
          h-screen
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
                {Array.from({ length: 8 }).map((_, i) => (
                  <Image
                    key={i}
                    src={item.src}
                    alt={`hero-thumb-${colIndex + 1}`}
                    width={350}
                    height={150}
                    className="
                      rounded-md
                      border border-gray-200
                      shadow
                      object-cover
                      transition
                      duration-300
                      hover:scale-[1.001]
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
