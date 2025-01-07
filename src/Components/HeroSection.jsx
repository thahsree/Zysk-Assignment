import React from "react";
import arrowRight from "../assets/arrowRight.svg";
import play from "../assets/play.svg";
import screen from "../assets/screen.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col pt-[96px] gap-[64px] max-h-[1020px] justify-center items-center overflow-hidden max-md:py-[64px] max-md:gap-[32px] max-md:mt-[32px]">
      <div className="flex flex-wrap px-[32px] gap-[32px] w-full max-md:px-[16px] justify-center">
        <div className="flex flex-col items-center w-full max-w-[1216px] h-auto gap-[48px] max-md:w-[100%]">
          <div className="w-full h-auto flex flex-col items-center gap-[24px] max-md:px-[16px]">
            <div className="w-full h-auto flex flex-col items-center gap-[16px]">
              <div className="flex gap-[12px] py-[4px] pr-[10px] pl-[4px] border border-[#e6403a8c] rounded-full text-[#E63F3A] items-center justify-center max-md:w-[307px]">
                <div className="border border-[#e6403a9f] rounded-full py-[2px] px-[10px]">
                  <h4 className="font-medium text-[14px] text-center max-md:text-[12px] text-nowrap">
                    New feature
                  </h4>
                </div>
                <div className="flex gap-[4px] items-center">
                  <p className="text-[14px] font-medium max-md:text-[12px] text-nowrap">
                    Check out the team dashboard
                  </p>
                  <img
                    src={arrowRight}
                    alt="arrow-right"
                    className="w-[16px] h-[16px] cursor-pointer max-md:w-[9.3px] max-md:h-[9.3px]"
                  />
                </div>
              </div>
              <h2 className="font-semibold text-[50px] font-inter text-center leading-[72px] text-[#101828] max-md:text-[36px] max-md:leading-[44px] max-md:text-center max-md:min-h-[88px] max-md:w-[100%]">
                Beautiful analytics to grow smarter
              </h2>
            </div>
            <p className="font-normal text-[20px] text-[#475467] w-[768px] text-center max-md:text-[18px] max-md:w-[100%]">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>

          <div className="w-full flex gap-[12px] justify-center max-md:flex-col max-md:h-[108px]">
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

      <div className="px-[32px] flex gap-[32px] w-full justify-center max-md:px-[16px]">
        <div className="h-[560px] border-l-[8px] border-t-[8px] border-r-[8px] border-[#101828] rounded-[20px] w-full max-w-[100%] max-md:h-[194px]">
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
