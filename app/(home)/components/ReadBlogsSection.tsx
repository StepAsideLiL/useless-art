import React from "react";
import Blog1MoneyIsASocialConstruct from "./Blog1MoneyIsASocialConstruct";
import Blog2ArtIsUselessAndValueless from "./Blog2ArtIsUselessAndValueless";
import Blog3BuyArtAndProvideValue from "./Blog3BuyArtAndProvideValue";

type ReadBlogsSectionProps = {
  className?: string;
};

const ReadBlogsSection: React.FC<ReadBlogsSectionProps> = ({ className }) => {
  return (
    <section className={`${className} space-y-20`}>
      <h1 className="text-4xl font-semibold text-center">About Useless Art</h1>

      <div className="container max-w-5xl mx-auto space-y-40">
        <Blog1MoneyIsASocialConstruct />

        <Blog2ArtIsUselessAndValueless />

        <Blog3BuyArtAndProvideValue />
      </div>
    </section>
  );
};

export default ReadBlogsSection;
