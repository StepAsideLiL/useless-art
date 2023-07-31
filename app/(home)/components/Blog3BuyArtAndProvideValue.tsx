import React from "react";
import blogImage from "../../../assets/images/blog/image2.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Blog3BuyArtAndProvideValueProps = {
  className?: string;
};

const Blog3BuyArtAndProvideValue: React.FC<Blog3BuyArtAndProvideValueProps> = ({
  className,
}) => {
  return (
    <article
      className={`${className} flex items-center rounded-lg bg-slate-100`}
    >
      <div className="p-10 space-y-5">
        <h1 className="text-2xl font-semibold">Buy Art And Provide Value</h1>

        <p>
          Celebrating the essence of creative expression. In a pragmatic world,
          art&apos;s true worth lies in its emotional and cultural enrichment.
          Purchasing art supports artists and embraces individuality,
          challenging traditional notions of value.
        </p>

        <Button asChild>
          <Link href="buy-art-and-provide-value">Read More</Link>
        </Button>
      </div>

      <div>
        <div className="w-[512px]">
          <AspectRatio ratio={1 / 1}>
            <Image src={blogImage} alt="Image" />
          </AspectRatio>
        </div>
      </div>
    </article>
  );
};

export default Blog3BuyArtAndProvideValue;
