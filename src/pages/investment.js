// pages/investment.js

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PropertyCategory from "@/components/PropertyCategory";
import WhyInvestWithUs from "@/components/WhyInvest";

export default function Investment() {
  return (
    <div
      style={{
        backgroundColor: "#ffcccc", // Light red color
        height: "100vh", // Full viewport height
        width: "100%", // Full width
      }}
    >
      {/* Navigation bar */}
      <Navbar />
      {/* 
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/investment.jpeg')" }}
      > */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images//investment.jpeg')",
          // transform: "scaleX(-1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />
        <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4 ">
          <h1 className="text-4xl md:text-6xl font-bold">Investment</h1>
          <p className="text-base md:text-lg  max-w-xl border-l-4 border-red-500 pl-4">
            Our projects are strategically designed to maximize value, offering
            you the chance to grow your wealth through safe and reliable
            ventures in Nigeria’s dynamic real estate market.
          </p>
        </div>
      </div>

      <WhyInvestWithUs />
      <PropertyCategory />
      {/* Content can be added here */}
      <Footer />
    </div>
  );
}
