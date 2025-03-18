import React from "react";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Hero title="L-O-O-O-P" subtitle="feel the poshness" />
      <div className="text-[9px] font-bold text-end w-full px-4 mt-auto">
        All right reserved &copy;
        <a href="https://github.com/solaimanb" className="ml-1" target="_blank">
          S010
        </a>
      </div>
    </main>
  );
}
