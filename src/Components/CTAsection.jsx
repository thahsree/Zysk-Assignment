import React from "react";

const CTAsection = () => {
  return (
    <div className="flex gap-[64px] py-[96px] w-[1440px] justify-center bg-[#F9FAFB] overflow-hidden max-md:w-[100vw] max-md:py-[64px]">
      <div className="w-[1280px] px-[32px] flex gap-[32px] justify-center max-md:w-[100vw]">
        <div className="w-full flex gap-[40px] flex-col items-center">
          <div className="flex flex-col gap-[20px] w-[768px] max-md:w-[100vw]">
            <h3 className="font-semibold text-[36px] leading-[46px] w-[768px] text-[#101828] text-center max-md:text-[30px] max-md:w-[100vw]">
              Start your free trial
            </h3>
            <p className="font-normal text-[20px] text-center text-[#475467] leading-[30px] max-md:w-[100vw]">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="flex gap-[12px] w-[269px] max-md:flex-col">
            <button className="text-nowrap py-[12px] px-[20px] flex justify-center gap-[8px] border rounded-[8px] w-[128px] h-[49px] border-[#D0D5DD] bg-[#FFFFFF] font-semibold text-[#344054] text-[16px] text-center max-md:w-full ">
              Learn more
            </button>
            <button className="px-[20px] py-[12px] border border-[#E63F3A] bg-[#E63F3A] rounded-[8px] w-[129px] text-[#FFFFFF] font-semibold text-[16px] text-center max-md:w-full">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAsection;
