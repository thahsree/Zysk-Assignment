import React from "react";
import sysyphous from "../assets/Sysyphouus.svg";
const Testimonials = () => {
  return (
    <div className="flex flex-col gap-[64px] py-[96px] h-[552px] items-center border-b">
      <div className="flex px-[32px] gap-[32px]">
        <div className="flex gap-[40px] justify-center">
          <div className="flex flex-col gap-[32px] w-[1216px] items-center">
            <div className="w-[140..83px] h-[40px]">
              <img
                src={sysyphous}
                alt="company-logo"
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium text-[#101828] text-center leading-[60px] text-[48px]">
              We've been using Untitled to kick start every new project and
              can't imagine working without it.
            </h3>
            <div className="flex flex-col gap-[16px] h-[136px] items-center">
              <div className="w-[64px] h-[64px] rounded-full border bg-[#E0E0E0] overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqKT1V2GJ23Bb~cM4btny8WJyt~K4aLgFN1vGlUNfkjaWIVkgFYHkURxbJWQQPQdLa0Aia6JdbMQmFi49pKm3Y8EDCWfw9wUCFp43mFqyhXDC9EUTX8rfIFr3MDJXEGqM0Zgih6jlW~ZyDQD-M24OhqmeMaS6kYbLnpR7DNmDDk45xKZwIETjyuUbfzyoOhRdWE13YnCHf2e2lcJReaMcZRX9-OhjAfIK9wr39rF0nvjknHsYqXtNG3ckqY4QUvd2UUBZLuiFThPd5C5-cQ4fiDAE4qGQ3E5XAEUVd27C2RakN~-4i4PqJqsdTu4HIJGHhy0fay3sZH0SJuHSCESJA__"
                  alt="person"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h4 className="font-semibold leading-[28px] text-[18px] text-center text-[#101828] h-[24px]">
                  Candice Wu
                </h4>
                <p className="text-[#475467] font-normal text-center leading-[24px] text-[16px]">
                  Product Manager, Sysyphus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
