import React from "react";
import arrowRight from "../assets/arrowRight.svg";
import play from "../assets/play.svg";
import screen from "../assets/screen.svg";
const HeroSection = () => {
  return (
    <div className="flex pt-[96px] gap-[64px] max-h-[1020px] justify-center items-center flex-col">
      <div className="flex px-[32px] gap-[32px] max-w-[1280px] h-[300px] justify-center ">
        <div className="w-[1216px] h-[300px] flex gap-[48px] flex-col items-center">
          <div className="w-full  h-[204px] flex gap-[24px] flex-col items-center">
            <div className="w-[1024px] h-[120px] flex flex-col items-center gap-[16px]">
              <div className="flex gap-[12px] py-[4px] pr-[10px] pl-[4px] border border-[#e6403a8c] rounded-full text-[#E63F3A] items-center justify-center">
                <div className="border border-[#e6403a9f] rounded-full py-[2px] px-[10px]">
                  <h4 className="font-medium text-[14px] text-center">
                    New feature
                  </h4>
                </div>
                <div className="flex gap-[4px] items-center">
                  <p className="text-[14px] font-medium">
                    Check out the team dashboard
                  </p>
                  <img
                    src={arrowRight}
                    alt="arrow-right"
                    className="w-[16px] h-[16px] cursor-pointer"
                  />
                </div>
              </div>
              <h2 className="font-semibold text-[50px] font-inter text-center leading-72 text-[#101828]">
                Beautiful analytics to grow smarter
              </h2>
            </div>
            <p className="font-normal text-[20px] text-[#475467] w-[768px] text-center">
              Powerful , self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="w-[225px] h-[48px] flex gap-[12px] ">
            <button className="border py-[12px] px-[20px] border-[#D0D5DD] rounded-full font-semibold text-[16px] text-[#344054] flex gap-[8px] items-center">
              <img src={play} alt="play" className="w-[20px] h-[20px]" />
              Demo
            </button>
            <button className="border py-[12px] px-[20px] rounded-full font-semibold text-[16px] text-[#FFFFFF] bg-[#E63F3A] text-nowrap">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="px-[32px] flex gap-[32px]">
        <div className="h-[560px] border-l-[8px] border-t-[8px] border-r-[8px] border-[#101828] rounded-[20px] w-full">
          <img
            src={screen}
            alt="screen mockup"
            className="w-full h-full rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
