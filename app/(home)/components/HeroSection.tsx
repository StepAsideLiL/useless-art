"use client";

import React, { useEffect, useState } from "react";
import Image1 from "../../../assets/images/home/image01.png";
import Image2 from "../../../assets/images/home/image02.png";
import Image3 from "../../../assets/images/home/image03.png";
import Image from "next/image";
import { Anton } from "next/font/google";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type HeroSectionProps = {
  className?: string;
};

const anton = Anton({ weight: "400", subsets: ["latin-ext"] });

const images = [Image1, Image2, Image3];

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  console.log(Image1);

  return (
    <div className={`${className} space-y-10`}>
      <div className={anton.className}>
        <h3 className="text-6xl font-bold text-center">
          We Create Value In Art
        </h3>
      </div>

      {/* Background Container */}
      <div className="relative h-[580px]">
        {/* Background Image */}
        <div className="w-full h-full">
          <Image
            src={images[index]}
            alt="Image"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="space-y-5">
            <div className="w-[412px] mx-auto">
              <AspectRatio ratio={1 / 1}>
                <Image src={images[index]} alt="Image" />
              </AspectRatio>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="/arts">Buy Art</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
