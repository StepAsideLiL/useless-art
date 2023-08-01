import React from "react";
import blogImage from "../../../assets/images/blog/image3.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Blog1MoneyIsASocialConstructProps = {
  className?: string;
};

const Blog1MoneyIsASocialConstruct: React.FC<
  Blog1MoneyIsASocialConstructProps
> = ({ className }) => {
  return (
    <article
      className={`${className} flex items-center rounded-lg bg-slate-100`}
    >
      <div className="p-10 space-y-5">
        <h1 className="text-2xl font-semibold">Money Is A Social Construct</h1>

        <p>
          Money is an abstract concept created by human societies for efficient
          trade and exchange. Its value is not inherent but derived from
          collective belief. As a social construct, money can influence power
          dynamics and perpetuate inequality. Understanding its true nature
          empowers us to question its impact and strive for responsible use,
          valuing meaningful connections and positive experiences over mere
          accumulation.
        </p>

        <Button asChild>
          <Link href="/money-is-a-social-construct">Read More</Link>
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

export default Blog1MoneyIsASocialConstruct;
