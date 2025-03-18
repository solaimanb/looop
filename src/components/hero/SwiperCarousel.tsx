"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./carousel.css";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Define the product type
type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
  buttonLink: string;
};

// Sample product data with modern jackets
const products: Product[] = [
  {
    id: "1",
    name: "Urban Explorer Jacket",
    description: "Lightweight waterproof jacket perfect for city adventures",
    price: "$129.99",
    image:
      "https://i.pinimg.com/736x/9a/a1/8f/9aa18fa77567e3306103fb9045e9769f.jpg",
    buttonText: "Shop Now",
    buttonLink: "/shop/jackets/urban-explorer",
  },
  {
    id: "2",
    name: "Premium Leather Bomber",
    description: "Classic bomber jacket crafted from premium leather",
    price: "$249.99",
    image:
      "https://i.pinimg.com/736x/09/9b/9c/099b9c40384e5c1773e2bd9f46362a7d.jpg",
    buttonText: "View Details",
    buttonLink: "/shop/jackets/leather-bomber",
  },
  {
    id: "3",
    name: "Tech Fleece Windbreaker",
    description: "Ultra-modern windbreaker with tech fleece lining",
    price: "$159.99",
    image:
      "https://i.pinimg.com/736x/66/a4/1b/66a41ba552188a2f6549afd3e4e2bdb3.jpg",
    buttonText: "Add to Cart",
    buttonLink: "/shop/jackets/tech-windbreaker",
  },
  {
    id: "4",
    name: "Quilted Puffer Jacket",
    description: "Stylish yet practical quilted puffer for cold weather",
    price: "$179.99",
    image:
      "https://i.pinimg.com/736x/f7/62/76/f762762b6c2d675c2b49112fe41b1d31.jpg",
    buttonText: "Choose Color",
    buttonLink: "/shop/jackets/quilted-puffer",
  },
  {
    id: "5",
    name: "Minimalist Trench Coat",
    description: "Contemporary take on the classic trench coat design",
    price: "$199.99",
    image:
      "https://i.pinimg.com/736x/66/a4/1b/66a41ba552188a2f6549afd3e4e2bdb3.jpg",
    buttonText: "Explore",
    buttonLink: "/shop/jackets/minimalist-trench",
  },
  {
    id: "6",
    name: "Vintage Denim Jacket",
    description: "Timeless denim jacket with distressed detailing",
    price: "$149.99",
    image:
      "https://i.pinimg.com/736x/d4/49/64/d4496423ddaf618630b6f8fce26b8dc1.jpg",
    buttonText: "Buy Now",
    buttonLink: "/shop/jackets/vintage-denim",
  },
  {
    id: "7",
    name: "Performance Rain Shell",
    description: "Ultra-lightweight rain shell for outdoor activities",
    price: "$189.99",
    image:
      "https://i.pinimg.com/736x/85/6d/04/856d04dddedb88021278912dc0d3d155.jpg",
    buttonText: "See Features",
    buttonLink: "/shop/jackets/rain-shell",
  },
  {
    id: "8",
    name: "Oversized Wool Coat",
    description: "Luxurious oversized wool coat for a dramatic silhouette",
    price: "$279.99",
    image:
      "https://i.pinimg.com/736x/83/94/9e/83949ea53125aa7f71d5cf4cfcc4ba7a.jpg",
    buttonText: "Try On",
    buttonLink: "/shop/jackets/wool-coat",
  },
  {
    id: "9",
    name: "Varsity Baseball Jacket",
    description: "Classic varsity jacket with modern athletic details",
    price: "$169.99",
    image:
      "https://i.pinimg.com/736x/f2/f7/3d/f2f73d4a77094a132bb4030bb30a0032.jpg",
    buttonText: "View Colors",
    buttonLink: "/shop/jackets/varsity-jacket",
  },
  {
    id: "10",
    name: "Cropped Moto Jacket",
    description: "Edgy cropped motorcycle jacket with asymmetrical zipper",
    price: "$219.99",
    image:
      "https://i.pinimg.com/736x/7e/0e/ef/7e0eef8e216925caeeec42b03cb53100.jpg",
    buttonText: "Shop Collection",
    buttonLink: "/shop/jackets/moto-jacket",
  },
  {
    id: "11",
    name: "Shearling Aviator",
    description: "Luxurious shearling-lined aviator jacket for ultimate warmth",
    price: "$349.99",
    image:
      "https://i.pinimg.com/736x/61/2d/c6/612dc603b5c617d17d43b01cfc4927f4.jpg",
    buttonText: "Premium Selection",
    buttonLink: "/shop/jackets/shearling-aviator",
  },
  {
    id: "12",
    name: "Technical Field Jacket",
    description:
      "Multi-pocket field jacket with technical weather-resistant fabric",
    price: "$229.99",
    image:
      "https://i.pinimg.com/736x/ef/d2/08/efd2088ad7efeb0cf891733c964f236d.jpg",
    buttonText: "Explore Details",
    buttonLink: "/shop/jackets/field-jacket",
  },
  {
    id: "13",
    name: "Corduroy Trucker Jacket",
    description: "Retro-inspired corduroy trucker jacket with sherpa lining",
    price: "$159.99",
    image:
      "https://i.pinimg.com/736x/d5/de/e6/d5dee6204d915dd5e519e32b9363b7ed.jpg",

    buttonText: "Check Availability",
    buttonLink: "/shop/jackets/corduroy-trucker",
  },
  {
    id: "14",
    name: "Down Alpine Parka",
    description: "Expedition-grade down parka for extreme cold conditions",
    price: "$399.99",
    image:
      "https://i.pinimg.com/736x/05/33/f1/0533f197e1d0b58948b18e12d30b6ed6.jpg",
    buttonText: "Winter Collection",
    buttonLink: "/shop/jackets/alpine-parka",
  },
  {
    id: "15",
    name: "Lightweight Track Jacket",
    description: "Performance track jacket with breathable mesh panels",
    price: "$119.99",
    image:
      "https://i.pinimg.com/736x/e7/a2/94/e7a294407e49b91a04cb13407fadae3d.jpg",
    buttonText: "Active Wear",
    buttonLink: "/shop/jackets/track-jacket",
  },
];

export default function SwiperCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative swiper-carousel-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={600}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="custom-slide">
            <div
              className={`slide-content rounded-[28px] border-2 border-gray-200 h-full w-full overflow-hidden ${
                products[activeIndex].id === product.id ? "active-slide" : ""
              }`}
            >
              {/* Product image - shown on all slides */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={products[activeIndex].id === product.id}
                />
              </div>

              {/* Product details - only shown on active (center) slide */}
              {products[activeIndex].id === product.id && (
                <div className="absolute inset-0 flex flex-col bg-black/20">
                  <div className="card-header flex items-center justify-center">
                    <h3 className="font-bebas-neue text-2xl text-center text-white">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex-1"></div>

                  <div className="card-footer p-2">
                    <div className="w-full py-4 bg-white text-black font-bebas-neue text-lg text-center block transition-all duration-300 hover:bg-gray-100 animate-fadeIn rounded-3xl">
                      {product.buttonText}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination"></div>

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button
          className="carousel-nav-button carousel-nav-button-prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          className="carousel-nav-button carousel-nav-button-next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
