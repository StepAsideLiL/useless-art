import React from "react";
import blogImage from "../../../assets/images/blog/image1.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Blog2ArtIsUselessAndValuelessProps = {
  className?: string;
};

const Blog2ArtIsUselessAndValueless: React.FC<
  Blog2ArtIsUselessAndValuelessProps
> = ({ className }) => {
  return (
    <article
      className={`${className} flex items-center rounded-lg bg-slate-100`}
    >
      <div>
        <div className="w-[512px]">
          <AspectRatio ratio={1 / 1}>
            <Image src={blogImage} alt="Image" />
          </AspectRatio>
        </div>
      </div>

      <div className="p-10 space-y-5">
        <h1 className="text-2xl font-semibold">Art Is Useless And Valueless</h1>

        <p>
          Art is useless and valueless, but it holds profound significance in
          evoking emotions, fostering self-expression, preserving culture, and
          inspiring creativity. Art challenges conventions, enriches lives, and
          connects us on a deep level, transcending mere practicality.
        </p>

        <div className="text-right">
          <Button asChild>
            <Link href="/art-is-useless-and-valueless">Read More</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Blog2ArtIsUselessAndValueless;
