import React from "react";
import chatBreak from "../assets/chatBreak.svg";
import command from "../assets/command.svg";
import heart from "../assets/heart.svg";
import lightning from "../assets/lightning.svg";
import message from "../assets/messagIcon.svg";
import smile from "../assets/smile.svg";
const Features = () => {
  return (
    <div className="w- flex py-[96px] gap-[64px]  items-center flex-col overflow-hidden max-md:py-[64px] max-md:gap-[48px]">
      <div className="px-[32px] flex gap-[32px] justify-center">
        <div className="flex gap-[48px] w-[1216px]  justify-center">
          <div className="w-[768px] flex gap-[20px] flex-col items-center">
            <div className="flex gap-[12px] w-[768px] flex-col max-md:w-[100vw] max-md:h-max">
              <p className="text-center font-semibold text-[16px] text-[#E63f3A]">
                Features
              </p>
              <h3 className="text-center font-semibold text-[36px] leading-[44px] text-[#101828]">
                Analytics that feels like its's from the future
              </h3>
            </div>
            <p className="text-center w-[768px] text-[#475467] max-md:w-[100vw] max-md:px-[12px]">
              Powerful, self-serve product and growth analytics to help you
              convert, engage and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[64px]">
        <div className="flex gap-[32px] flex-col items-center max-md:gap-[16px] ">
          <div className="w-[48px] h[48px] border rounded-[10px] py-2 border-[#EAECF0] flex items-center justify-center">
            <img
              src={message}
              alt="message-icon"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <h3 className="w-[384px] h-[30px] text-center font-semibold text-[20px] leading-[30px] text-[#101828]">
              Share Team inboxes
            </h3>
            <p className="text-[#475467] font-normal text-[16px] leading-[24px] text-center w-[384px] max-md:w-[100vw]">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
        </div>

        <div className="flex gap-[32px] flex-col items-center max-md:gap-[16px] ">
          <div className="w-[48px] h[48px] border rounded-[10px] py-2 border-[#EAECF0] flex items-center justify-center">
            <img
              src={lightning}
              alt="message-icon"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <h3 className="w-[384px] h-[30px] text-center font-semibold text-[20px] leading-[30px] text-[#101828]">
              Deliver instant answers
            </h3>
            <p className="text-[#475467] font-normal text-[16px] leading-[24px] text-center w-[384px] max-md:w-[100vw]">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
        </div>

        <div className="flex gap-[32px] flex-col items-center max-md:gap-[16px] ">
          <div className="w-[48px] h[48px] border rounded-[10px] py-2 border-[#EAECF0] flex items-center justify-center">
            <img
              src={chatBreak}
              alt="message-icon"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <h3 className="w-[384px] h-[30px] text-center font-semibold text-[20px] leading-[30px] text-[#101828]">
              Manage your team with reports
            </h3>
            <p className="text-[#475467] font-normal text-[16px] leading-[24px] text-center w-[384px] max-md:w-[100vw]">
              Measure what matters with Untitled's easy-to-use reports. You can
              filter, export and drilldown on the data in a couple clicks.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[64px] max-md:w-[100vw] max-md:flex-col">
        <div className="flex gap-[32px] flex-col items-center max-md:gap-[16px] ">
          <div className="w-[48px] h[48px] border rounded-[10px] py-2 border-[#EAECF0] flex items-center justify-center">
            <img src={smile} alt="message-icon" className="w-[24px] h-[24px]" />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <h3 className="w-[384px] h-[30px] text-center font-semibold text-[20px] leading-[30px] text-[#101828]">
              Connect with customers
            </h3>
            <p className="text-[#475467] font-normal text-[16px] leading-[24px] text-center w-[384px] max-md:w-[100vw]">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
        </div>

        <div className="flex gap-[32px] flex-col items-center max-md:gap-[16px]">
          <div className="w-[48px] h[48px] border rounded-[10px] py-2 border-[#EAECF0] flex items-center justify-center">
            <img
              src={command}
              alt="message-icon"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <h3 className="w-[384px] h-[30px] text-center font-semibold text-[20px] leading-[30px] text-[#101828]">
              Connect the tools you already use
            </h3>
            <p className="text-[#475467] font-normal text-[16px] leading-[24px] text-center w-[384px] max-md:w-[100vw]">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar.Plus, our extensive developer tools.
            </p>
          </div>
        </div>

        <div className="flex gap-[32px] flex-col items-center max-md:gap-[16px] ">
          <div className="w-[48px] h[48px] border rounded-[10px] py-2 border-[#EAECF0] flex items-center justify-center">
            <img src={heart} alt="message-icon" className="w-[24px] h-[24px]" />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <h3 className="w-[384px] h-[30px] text-center font-semibold text-[20px] leading-[30px] text-[#101828]">
              Our people make the difference
            </h3>
            <p className="text-[#475467] font-normal text-[16px] leading-[24px] text-center w-[384px] max-md:w-[100vw]">
              We're an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
