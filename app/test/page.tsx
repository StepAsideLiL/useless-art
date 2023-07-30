import Image from "next/image";
import React from "react";
import image from "../../assets/images/home/image01.png";

const TestPage = () => {
  return (
    <div>
      <h1 className="py-10 text-3xl font-semibold text-center">
        Test Background
      </h1>

      {/* Background Container */}
      <div className="relative h-96">
        {/* Background Image */}
        <div className="w-full h-full">
          <Image
            src={image}
            alt="Image"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <div>
            <h1>hello</h1>
            <p>world</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
