import React from "react";
import arrowup from "../assets/arrowup.svg";

const blogPosts = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1vAvYAz-jv~CDRktEzL7J3cwcAoK~lHK3b--P280mzgSokgbbktrz4XuAdcuUe9W16Uhc8WzSLMuuvtqeqp8YDaEX8qcxIvw14cK4AVTkhHz9HwqOiYLwpWpS3cLOOVqEtvmcYSlGz73dEA28s-4cGhcl6Nv7IHg4dtsaVL~JIDipS5d8Z-tUDcOhqXyTuc28xdmITK2EFCr9knT-mJ68oYC6Oyl3ulDB9tmwXBqKkKWT8R-yHcan3kCRvGhTwr-PnJD451-rRE~j060Z29-RPukzRCrq-GcIayGEhQScGsRRQ0P-t~RIo8KBYOz2-t5~HUmRePE3oiYPrXoQ6U4Q__",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X662gWHluVHdLA3TlIqsxFC7Ja1T15ydHsSi5r-OnlUWnyFJA0Tbsnpja8N1afL~OuJ3EwWwa~HSYiXT4Z-JIjdfENP7JDQX6k4t-lSY7E51ei35GtqriX4FJRjCOJjBn0tS3Fbnm0Uu1Qcuu94bK9V6qmXrw0CWJsSIVU2TduDiXPV0MJH2bo04P1u8umcyjV3-s33I5GcUiLJYqOzwGzXiVoOfkJjH6nGrFnlaFk0MFZ-wwABUOvQVxwTeX6U1SrIWTcYnqYyx-YA0uYC~M0dcbCf-riTDNOysEoMPFhqK~zaqUN~cALvi~wiEKA5HctMv4j1Id6sRsUdUPO39Fg__",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: {
      name: "John Carter",
      date: "15 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ip0WTCGAEaFmrrIzKosieNDw8-zwT8l7pQ47PHVrSRLCqLVrs~BbT4iWtCYeR2m63odFuhDnwqaIuRakJAgMUPeEtMJ1ABNlAPEQK7epBpXO6p~8d7H8gj0JIbR-t7h2hLojUg-ZnfGVWhS8I~eker8tXRvk1vzLfHDkpjWGTAZqwo8~bQ6j3QTFHcwe8LKKamL1KhB7mYZnECCXupp4arxYWoww8IE8IFpyBxAgkh1os8CHI-tQob4aq5kppuOJmj94x-SWNzwNboPfk1JkfSqmNbdXTw4vNHcsvVu2a2B-aNt0jb7fURfdlOKpASM~WN7j-g0rfHnCLXRWii2ERg__",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfAUAseu-6-C1DZPs2dzMJxQy-yk1GZiguO5wVCSV-7xcSg1hkLHAi04gpfc-azt97iIEoRcW8PGWCylF8m1wUnz1uf8-mCNz9Uac0d0VjID0ehOh-jpDxxvPf7qUzFQqsYdI~UOvp6GESNLA53P6g0baukAsGC6uym8BFubKmKw3uTdqGbB5UzoE9T73GJpJRUmEtsSSEaKdrP8YvqLHg0LXawZIiDkTCd2jUOgZ6cGJOeM3CgjoIILJbzaLD7wk0fJbHFNYzKQ6d3gOuPlKUTJgwAj1FrxpHEOaHY4qBbdMlKfiTyatWkgu12r4a~cSVuiHslAc1tKV0a7fHgekw__",
  },
  {
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: {
      name: "Lana Steiner",
      date: "18 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q-xeksWbGjMC~mkkrIqD2a0hZkNJs0pV~0w2X0Ki5mgXIdfkHSKvoYdT8okXIu~IFTU~FxBh3sTbqZJrgym-VGHHAiyDZqYgCQKc56mgHnktm0kxw9YpCxeR59Ew7zBh9KOHQ~uob6IRJltWrzcLhSz0p2~SHDDYCTFxJvadjz1xux~ZfA-QO8U388mfFVwjtwvRMoR7hkhQBXKIUJdXwopwbSTkJzcpwwTGD4kWE7TVJUujHSUn5GgsYP-Ed7M8FFs9SaAR4UTr2zlxzewNeF3xhu6olhvTaCAlu-~4kRfC7E6m1bgUxS9GA8kMcE3saY3e-FF3BUrVxzDbZZh0PA__",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibKRFJ5XDtCEKN93v571MDhFB0ILNvs8ucOk2PTy9cDk0fzV73P~7URhocPdEDt2d7pZzibfXD9mYLJt6Wfk9BWqJ7HiLEL3vEV1Ozpj9k~p3sFHZpJCoCC-IgLOcKHzoej5mz~-80ZIzh7pNg33HQP20pUkB3D2oSSsOmffx3pvYVGZy3n6oDWWVYydOFWvPXM1xHxre-bnmjjSfDrIpP8B-ockD7CRApLuIjgGs4ofbWQFqa1vss7~j2inw3W1Y7fpkap8a2xddGaNF~~rXEoZ6NM4dFLVtLfhKiWGd~72~J-7mhr4Rjn7CVTK3seE3IhWBuxZoaMRipaqAOw-qA__",
  },
];

const BlogSection = () => {
  return (
    <div className="flex flex-col py-[96px] gap-[64px] items-center border-b overflow-hidden">
      <div className="flex gap-[32px] w-[1216px]">
        <div className="w-[1216px] flex justify-between">
          <div className="w-[768px] flex gap-[20px] flex-col">
            <div className="w-full flex flex-col gap-[12px]">
              <h6 className="font-semibold text-[16px] leading-[24px] text-[#E63f3A]">
                Our blog
              </h6>
              <h3 className="font-semibold text-[36px] leading-[44px] text-[#101828]">
                Latest blog posts
              </h3>
            </div>
            <p className="font-normal text-[20px] leading-[30px] text-[#475467]">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div className="w-[148px]">
            <button className="px-[20px] py-[12px] border rounded-[8px] w-[148px] bg-[#E63F3A] text-[#FFFFFF] font-semibold text-[16px] leading-[24px]">
              View all posts
            </button>
          </div>
        </div>
      </div>
      <div className="px-32 w-[1280px] flex justify-center gap-[32px]">
        <div className="w-[1216px] flex gap-[32px]">
          {blogPosts.map((post, index) => (
            <div className="flex w-[384px] gap-[24px] flex-col" key={index}>
              <div className="w-[384px] h-[240px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[384px] flex gap-[24px] flex-col">
                <div className="flex flex-col gap-[8px] w-full">
                  <h6 className="text-[#E63f3A] font-semibold text-[14px] leading-[20px]">
                    {post.category}
                  </h6>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex gap-[16px] w-full">
                      <h3 className="text-[#101828] font-semibold text-[24px] leading-[24px] w-[344px]">
                        {post.title}
                      </h3>
                      <div className="w-[24px] h-[28px] pt-[4px]">
                        <div className="w-[24px] h-[24px] relative">
                          <img
                            src={arrowup}
                            alt="arrow"
                            className="w-[10px] h-[10px] top-[7px] left-[7px]"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-[#475467] font-normal leading-[30px] text-[16px]">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px] w-[200px]">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="rounded-[30px] h-[40px] w-[40px]"
                  />
                  <div className="w-[150px]">
                    <h6 className="font-semibold text-[14px] leading-[20px] text-[#101828]">
                      {post.author.name}
                    </h6>
                    <h6 className="text-[14px] leading-[20px] font-normal text-[#475467]">
                      {post.author.date}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
