import React from "react";

const HeroSection = () => {
  return (
    <div className="flex pt-[96px] gap-[64px] max-h-[1020px] justify-center items-center">
      <div className="flex px-[32px] gap-[32px] max-w-[1280px] h-[300px] justify-center">
        <div className="w-[1216px] h-[300px] flex gap-[48px] flex-col">
          <div className="w-full  h-[204px] flex gap-[24px] justify-center">
            <div className="w-[1024px] h-[120px] flex flex-col items-center gap-[16px]">
              <div className="">Badge</div>
              <h2 className="font-semibold text-[50px] font-inter text-center leading-72 text-[#101828]">
                Beautiful analytics to grow smarter
              </h2>
            </div>
          </div>
          <div className="w-[225px] h-[48px] gap-[12px]">Actions</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
