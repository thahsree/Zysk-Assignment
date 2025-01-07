import React from "react";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
const FrequentlyAsked = () => {
  return (
    <div className="flex flex-col py-[96px] gap-[64px] items-center border-b overflow-hidden">
      <div className="flex gap-[32px] px-[32px]">
        <div className="flex gap-[48px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-center font-semibold text-[36px] leading-[44px] text-[#101828]">
              Frequently asked questions
            </h3>
            <p className="text-normal text-[20px] text-[#475467] leading-[30px] text-center">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] px-[32px] w-[1280px] items-center">
        <div className="w-[768px] flex flex-col gap-[32px] ">
          <div className="w-full">
            <div className="flex gap-[24px] w-full">
              <div className=" flex flex-col gap-[8px]">
                <h4 className="font-medium leading-[28px] text-[18px] text-[#101828] h-[28px]">
                  Is there a free trial avilable?
                </h4>
                <p className="text-[#475467] font-normal text-[16px] leading-[24px] h-[48px] w-[720px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
              <div className="w-[24px] h-[26px] pt-[2px]">
                <img
                  src={minus}
                  alt="minus icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-t pt-[24px] border-[#EAECF0]">
            <div className="w-full flex h-[28px]">
              <div className="w-full flex gap-[24px]">
                <h3 className="font-medium text-[18px] text-[#101828] leading-[28px]">
                  Can I change my plan later?
                </h3>
              </div>
              <div className="w-[24px] h-[26px] pt-[2px]">
                <img
                  src={plus}
                  alt="minus icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-t pt-[24px] border-[#EAECF0]">
            <div className="w-full flex h-[28px]">
              <div className="w-full flex gap-[24px]">
                <h3 className="font-medium text-[18px] text-[#101828] leading-[28px]">
                  What is your cancellation policy?
                </h3>
              </div>
              <div className="w-[24px] h-[26px] pt-[2px]">
                <img
                  src={plus}
                  alt="minus icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-t pt-[24px] border-[#EAECF0]">
            <div className="w-full flex h-[28px]">
              <div className="w-full flex gap-[24px]">
                <h3 className="font-medium text-[18px] text-[#101828] leading-[28px]">
                  Can other info be added to an invoice?
                </h3>
              </div>
              <div className="w-[24px] h-[26px] pt-[2px]">
                <img
                  src={plus}
                  alt="minus icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-t pt-[24px] border-[#EAECF0]">
            <div className="w-full flex h-[28px]">
              <div className="w-full flex gap-[24px]">
                <h3 className="font-medium text-[18px] text-[#101828] leading-[28px]">
                  How does billing work?
                </h3>
              </div>
              <div className="w-[24px] h-[26px] pt-[2px]">
                <img
                  src={plus}
                  alt="minus icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-t pt-[24px] border-[#EAECF0]">
            <div className="w-full flex h-[28px]">
              <div className="w-full flex gap-[24px]">
                <h3 className="font-medium text-[18px] text-[#101828] leading-[28px]">
                  How do I change my account email?
                </h3>
              </div>
              <div className="w-[24px] h-[26px] pt-[2px]">
                <img
                  src={plus}
                  alt="minus icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[32px] px-[32px] w-[1280px] justify-center">
        <div className="flex flex-col w-[1216px] gap-[32px] p-[32px] rounded-[16px] items-center">
          <div className="w-[120px] h-[56px] relative">
            <div className="flex items-center z-10 bg-[#FFFFFF] justify-center w-[56px] h-[56px] absolute left-[32px] rounded-[200px] border-[1.5px] border-[#E0E0E0] overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1vAvYAz-jv~CDRktEzL7J3cwcAoK~lHK3b--P280mzgSokgbbktrz4XuAdcuUe9W16Uhc8WzSLMuuvtqeqp8YDaEX8qcxIvw14cK4AVTkhHz9HwqOiYLwpWpS3cLOOVqEtvmcYSlGz73dEA28s-4cGhcl6Nv7IHg4dtsaVL~JIDipS5d8Z-tUDcOhqXyTuc28xdmITK2EFCr9knT-mJ68oYC6Oyl3ulDB9tmwXBqKkKWT8R-yHcan3kCRvGhTwr-PnJD451-rRE~j060Z29-RPukzRCrq-GcIayGEhQScGsRRQ0P-t~RIo8KBYOz2-t5~HUmRePE3oiYPrXoQ6U4Q__"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex items-center justify-center w-[48px] h-[48px] absolute left-[72px] top-[8px] rounded-[200px] border-[1.5px] border-[#E0E0E0] overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fbvBnWtyfX52DKTBgQJozlSpQbCt3-Za7ZJWht8N5VkbiAa7a-TBmQumVX0Agqh-cKP41Xq51hjbLG-HVPaJ4FpAxElDQdWR1139~E9WSxJ2nl20OoCKnU2eja5hM7hqLAj27guvwV9sf892R4MfBmqpKBtx3M13gA0SmwRu1fmPco3sthQ2yDyqx4Y4hjgNefvTRdRbXxna90TYdV64pdiGWW483UW0fJAfcYFHtF10YBupETvAK5l5X5MIizYofcbm2TexLRa-IVW0whdo9v9ddpjx3H2L02jOvAlTVTXvye1MWquELhKeGSqvUkSyny4~Nr8ABfF21Qmrl2NgmA__"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex items-center justify-center w-[48px] h-[48px] absolute top-[8px] rounded-[200px] border-[1.5px] border-[#E0E0E0] overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gh3SGKg6Z3HdTkfpILgLb5gLlhRtykdaBX5~3rHXdop2OsfOaQyn9ScKK~ajktywN3dWpgHG4svyl4M9Q7lvFtu3R2UrZoX4idNcpsGwU9fF2Ta80oqvAvB0kJokjr~PTuMlGIO-NT0aJT25ljya52bMjavw1tM0XfKGa8rfh~88wq84gP9a4~0u2XXfnT5OlZNFFnxPSQCEbi~~mirpXbHigCkcu7ToG1i1k-INy-r9mE7ICZGNDQlI~n7gymROokgmbSulhvvfmhB-nvp5dOskWaOgqAAL0MPVP6UoSxXZyeh1UYXqmXXw9rb2n1HjwQ5qrEiDjDswcnbJtHx~fw__"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="w-[768px] flex flex-col gap-[8px] items-center ">
            <h3 className="font-semibold text-[20px] leading-[30px] text-center text-[#101828] ">
              Still have questions?
            </h3>
            <p className="font-normal text-[18px] text-center leading-[28px] text-[#475467]">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="w-[134px]">
            <button className="bg-[#E63F3A] px-[20px] py-[12px] border rounded-[8px] font-semibold text-[16px] text-[#FFFFFF] text-nowrap">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
