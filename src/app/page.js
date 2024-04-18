"use client";
import CoreFeatures from "@/components/CoreFeatures";
import HeroSection from "@/components/HeroSection";
import QualityFeatures from "@/components/QualityFeatures";



export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-48">
      <HeroSection />
      <QualityFeatures />
   
      <CoreFeatures />
    </div>
  );
}
