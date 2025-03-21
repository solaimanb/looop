import React from "react";
import SwiperCarousel from "./SwiperCarousel";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-16 mx-auto">
      {(title || subtitle) && (
        <div className="text-center mb-10 max-w-4xl mx-auto font-bebas-neue">
          {title && (
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          )}
          <div className="flex justify-center bg-muted w-fit mx-auto rounded-xl px-4 pt-0.5">
            {subtitle && <p className="text-sm tracking-widest">{subtitle}</p>}
          </div>
        </div>
      )}
      <SwiperCarousel />
    </section>
  );
};

export default Hero;
