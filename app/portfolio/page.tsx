"use client";
import HeroGallery from "@/components/hero-gallery";
import PortfolioImg from "@/public/png/Lead software pages Images/Portfolio.png";
import Image from "next/image";
import React, { useEffect } from "react";
import NavbarTitle from "../about/components/NavbarTitle";
import { DesktopProjects } from "./Data/Desktop-Projects";
import { MobileProjects } from "./Data/Mobile-Projects";

const PortfolioStyles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <NavbarTitle
        title="Portfolio"
        desc="From vision to victory — explore how Lead Softwares transforms ideas into results."
        src={PortfolioImg}
        width={700}
        height={700}
      />
      <HeroGallery />

      <div className="w-full py-10 md:py-12 lg:py-16 bg-bg overflow-hidden">
        <div className="w-[100%] md:w-[85%] lg:w-[80%] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8 lg:mb-10 text-center">
            Our Multi-Platform Solutions
          </h2>

          <div className="mb-12 md:mb-16">
            <h3 className="px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
              Web Applications
            </h3>
            <div className="overflow-hidden py-4">
              <div
                className="flex whitespace-nowrap animate-marquee"
                style={{ width: "max-content" }}
              >
                {[...Array(2)].map((_, repeatIndex) => (
                  <div key={repeatIndex} className="flex">
                    {DesktopProjects.slice(0, 8).map((item, index) => (
                      <div
                        key={`web-${repeatIndex}-${index}`}
                        className="mx-4 md:mx-6 flex-shrink-0 rounded-2xl overflow-hidden bg-primary/5 border border-black/[0.06] transition-transform duration-300 ease-out hover:-translate-y-1.5 group"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          className="block w-[320px] md:w-[340px] lg:w-[340px]"
                        >
                          {/* Image with zoom */}
                          <div className="relative w-full h-[200px] md:h-[210px] lg:h-[220px] overflow-hidden">
                            <Image
                              width={340}
                              height={340}
                              src={item.imgSrc}
                              alt={item.title || ""}
                              className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            />
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Footer */}
                          {item.title && (
                            <div className="flex items-center justify-between px-4 py-3.5 border-t border-black/[0.06]">
                              <span className="font-medium text-[15px] text-gray-900 leading-snug">
                                {item.title}
                              </span>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                {/* Arrow button */}
                                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-black/10 bg-gray-50 text-gray-400 transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-gray-900 flex-shrink-0">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                  >
                                    <path
                                      d="M2 12L12 2M12 2H5M12 2V9"
                                      stroke="currentColor"
                                      strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <h3 className="px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
              Mobile Applications
            </h3>
            <div className="relative overflow-x-hidden py-4">
              <div className="flex animate-marquee2 whitespace-nowrap">
                {[...Array(6)].map((_, repeatIndex) => (
                  <React.Fragment key={repeatIndex}>
                    {MobileProjects.map((item, index) => (
                      <div
                        key={`${repeatIndex}-${index}`}
                        className="mx-2 flex-shrink-0 rounded-2xl overflow-hidden bg-primary/5 border border-black/[0.06] transition-transform duration-300 ease-out hover:scale-105 group"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          className="block w-[280px] md:w-[200px] lg:w-[280px]"
                        >
                          {/* Image with zoom on hover */}
                          <div className="relative w-full h-[340px] md:h-[300px] lg:h-[340px] overflow-hidden">
                            <Image
                              width={280}
                              height={400}
                              src={item.img}
                              alt={item.title || ""}
                              className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            />
                            {/* Gradient overlay, fades in on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Footer */}
                          {item.title && (
                            <div className="flex items-center justify-between px-4 py-3.5 border-t border-black/[0.06]">
                              <span className="font-medium text-[15px] text-gray-900 leading-snug">
                                {item.title}
                              </span>
                              {/* Arrow button — inverts on card hover */}
                              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-black/10 bg-gray-50 text-gray-400 transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-gray-900 flex-shrink-0">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M2 12L12 2M12 2H5M12 2V9"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </a>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStyles;
