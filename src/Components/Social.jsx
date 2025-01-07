import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";

const Social = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div className="absolute -top-[20px] flex flex-col px-[32px] py-[92px] z-10 bg-[#FFFFFF] w-full border-b max-md:py-0 max-md:pb-[64px] max-md:top-0">
      <div className="px-[32px] flex gap-[32px] flex-col w-full items-center justify-center max-md:px-[16px] text-center">
        <p className="font-medium text-[16px] align-center text-[#475467] text-nowrap">
          Join 4,000+ companies already growing
        </p>
        <div className="flex w-[1216px] justify-between items-center flex-wrap max-md:w-[100vw] max-md:px-[5px] max-md:items-center">
          {logos.map((item) => (
            <img
              src={item}
              alt="fictional logo"
              className="w-[170px] h-[48px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
