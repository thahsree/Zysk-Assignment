import React from "react";
import k from "../assets/k.svg";
import s from "../assets/s.svg";
import zy from "../assets/zy.svg";
const Footer = () => {
  const data = [
    {
      heading: "Product",
      sections: [
        "Overview",
        "Fetures",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      heading: "Company",
      sections: [
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
    },
    {
      heading: "Resources",
      sections: [
        "Blog",
        "Newsletter",
        "Events",
        "Help center",
        "Tutorials",
        "Support",
      ],
    },
    {
      heading: "Use cases",
      sections: [
        "Startups",
        "Enterprise",
        "Government",
        "Saas center",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      heading: "Social",
      sections: [
        "Twitter",
        "Linkedin",
        "Facebook",
        "Github",
        "AngelList",
        "Dribble",
      ],
    },
    {
      heading: "Legal",
      sections: [
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Settings",
        "Contact",
      ],
    },
  ];
  return (
    <div className="bg-[#FFFFFF] py-[64px] flex flex-col w-full gap-[64px] items-center">
      <div className="px-[32px] flex gap-[48px] w-[1280px]">
        <div className="flex gap-[32px] w-[1216px] item-center ">
          {/* MAPING */}
          {data.map((item, i) => (
            <div key={i} className="w-[176px] flex flex-col gap-[16px]">
              <h6 className="text-[#667085] font-semibold text-[14px] leading-[20px]">
                {item.heading}
              </h6>
              <ul className="w-[74px] flex flex-col gap-[12px]">
                {item.sections.map((item) => (
                  <li
                    key={item}
                    className="text-[#475467] font-semibold text-[16px] leading-[24px] flex gap-[8px]"
                  >
                    <p className="text-nowrap">{item}</p>
                    {item === "Solutions" ? (
                      <div className="px-[8px] py-[2px] flex items-center justify-center w-[42px] h-[22px] rounded-[16px] border border-[#ABEFC6] bg-[#abefc636]">
                        <p className="text-center text-[12px] font-medium text-[#067647]">
                          New
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-[32px] px-[32px] w-[1280px]">
        <div className="flex justify-between w-[1216px] pt-[32px] border-t border-[#EAECF0]">
          <div className="w-[84.62px] h-[32px] relative">
            <div className="w-[42.305px] h-[23.62px] top-[10.2px] absolute left-0">
              <img src={zy} alt="logo letter" className="w-full h-full" />
            </div>
            <div className="w-[18.83px] h-[18.62px] absolute left-[38.84px] top-[15.37px]">
              <img src={s} alt="logo letter" className="w-full h-full" />
            </div>
            <div className="w-[42.79px] h-[32px] absolute left-[41.82px] top-[2px]">
              <img src={k} alt="logo letter" className="w-full h-full" />
            </div>
          </div>
          <p className="w-[344px] text-[#667085] font-normal text-[16px]">
            &copy; 2077 zysktechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
