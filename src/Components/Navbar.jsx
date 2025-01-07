import React from "react";
import arrowDown from "../assets/arrowDown.svg";
import k from "../assets/k.svg";
import s from "../assets/s.svg";
import zy from "../assets/zy.svg";
const Navbar = () => {
  return (
    <div className="px-32 h-[80px]  min-w-[1140px] border-b flex items-center justify-between">
      <div className="flex gap-[40px]">
        <div className="h-[32px] w-[105px] flex relative">
          <div className="w-[42.305px] h-full absolute left-0">
            <img src={zy} alt="logo letter" className="w-full h-full" />
          </div>
          <div className="w-[19.83px] h-[18.62px] absolute left-[36.84px] top-[11px]">
            <img src={s} alt="logo letter" className="w-full h-full" />
          </div>
          <div className="w-[42.79px] h-[32px] absolute left-[41.82px] bottom-[2px]">
            <img src={k} alt="logo letter" className="w-full h-full" />
          </div>
        </div>
        <ul className="flex w-[404px] h-[32px] gap-[32px] font-inter text-base font-semibold text-navColor">
          <li className="cursor-pointer flex items-center">Home</li>
          <li className="cursor-pointer flex items-center gap-[8px]">
            Products{" "}
            <img src={arrowDown} alt="arrow down" width={20} height={20} />
          </li>
          <li className="cursor-pointer flex items-center gap-[8px]">
            Resources
            <img src={arrowDown} alt="arrow down" width={20} height={20} />
          </li>
          <li className="cursor-pointer flex items-center">Pricing</li>
        </ul>
      </div>
      <div className="w-[40px] h-[40px] rounded-full cursor-pointer">
        <img
          src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKT1PQW5MJjG1wmo-acEjMlJw39zheyFtgFnhzE5GDTWDLExEyz7fs5oYHrWA38s1AAryAEXLznOKkxZdjVVoE4PcaKHZ1EUtGVzmLNkNcVMwzAhy0HsVGTc6gT~1e~JX3zWcYEp6rp~D4SK-Fm0whw8RkYwwN7dJKKEQtE6qdcOO-IQEwYWEhEtXUzGNKI7T4uw6v83wTtImimrUMMcCzYyGZO1EKHAFqMZg1Ur2olVQcD9gp~z1tveuNRk6FAXNjIeqKCmWLzx9ZImzFbTMHMzkmt7vqWK7fQ4aRPBq9Dz98F1-4JfbnkTvNC-0A5QTYP8VzRHXQc~wRJ9HlNZcg__"
          alt="profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
