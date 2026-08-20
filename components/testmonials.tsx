"use client";

import Avatar1 from "@/public/webp/avatar-1.webp";
import Avatar2 from "@/public/webp/avatar-2.webp";
import Avatar3 from "@/public/webp/avatar-3.webp";
import FarhanNadeem from "@/public/webp/farhan-nadeem.jpeg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    text: '"Working with Lead Softwares was a great experience from start to finish. They understood our business, turned our ideas into a complete digital platform, and delivered a solution that makes Solabran look as professional online as we are in the solar industry. Their attention to detail and commitment to quality really stood out."',
    name: "Jamie Brandon",
    role: "CEO",
    img: Avatar1,
  },
  {
    text: '"Partnering with Lead Softwares was a seamless experience from start to finish. They took the time to truly understand our business, transforming our concept into a robust digital platform—Barq-e-Shop—that perfectly reflects Al-Berq’s reputation in the switchgear industry. Their attention to detail, technical precision, and commitment to quality made all the difference."',
    name: "Farhan Nadeem",
    role: "COO",
    img: FarhanNadeem,
  },
  //   {
  //     text: '"Lead Softwares turned our idea into a powerful e-learning platform with flawless performance. They were always available for feedback and quick changes, helping us launch on time and attract thousands of users right away."',
  //     name: "Amit Verma",
  //     role: "CEO",
  //     img: Avatar3,
  //   },
  {
    text: '"As a startup, building a custom social media platform felt overwhelming, but Lead Softwares made it happen smoothly. They built a super clean MVP, handled real-time features easily, and felt like an extension of our team from day one."',
    name: "Maria Gonzalez",
    role: "Client",
    img: Avatar2,
  },
  {
    text: '"Lead Softwares built a HIPAA-compliant portal that transformed our patient management. They simplified complex clinical workflows into an intuitive interface, drastically reducing administrative overhead while keeping data security rock-solid."',
    name: "Dr. David Chen",
    role: "Client",
    img: Avatar1,
  },
  {
    text: '"We came to Lead Softwares with just a basic idea for a quiz app, and they built something awesome. The UI turned out super clean, students love using it, and the team fixed small bugs before we even noticed them. Super easy team to work with!"',
    name: "Jason Miller",
    role: "Client",
    img: Avatar3,
  },
];

export default function Testimonials() {
  return (
    <section className="md:py-10">
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgb(0, 0, 0) !important;
          opacity: 1 !important;
          margin: -14px 8px !important;
          transition: all 0.3s ease !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          transform: scale(1.2) !important;
        }
        .testimonial-swiper .swiper-pagination-bullet:hover {
          background: rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
      <div className="max-w-3xl mx-auto px-0 lg:px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="testimonial-swiper"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-item md:p-8 rounded-2xl text-center px-6">
                {/* Quote Icon */}
                <div className="testimonial-quote mx-auto mb-6 w-10 h-10 md:w-14 md:h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5c5ad8"
                    viewBox="0 -5 34 34"
                    className="w-full h-full"
                  >
                    <path d="m31.2 0h-7.2l-4.8 9.6v14.4h14.4v-14.4h-7.2zm-19.2 0h-7.2l-4.8 9.6v14.4h14.4v-14.4h-7.2z" />
                  </svg>
                </div>

                {/* Description */}
                <p className="testimonial-description text-xl leading-9 md:leading-11 md:text-2xl text-zinc-200 mb-8">
                  {item.text}
                </p>

                {/* Avatar */}
                <div className="testimonial-avatar-wrapper flex items-center justify-center gap-4 mb-10">
                  <div className="testimonial-avatar-thumb w-18 h-18 relative">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="testimonial-avatar-info text-left">
                    <h5 className="testimonial-avatar-title text-2xl font-semibold text-zinc-200">
                      {item.name}
                    </h5>
                    <span className="testimonial-avatar-designation text-xl text-gray-300">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
