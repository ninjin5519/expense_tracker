import React, { useContext } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { DashboardContext } from "../context/dashboard-context";

const IncExpCards = () => {
  const { cardInfo } = useContext(DashboardContext);
  return (
    <div className="flex gap-5">
      <div className="relative w-full shadow-xl card bg-base-100">
        <img src="/images/Large.png" alt="Shoes" />
        <div className="absolute items-end justify-end text-lg text-black card-body bottom-1 ">
          <h3 className="">CASH</h3>
          <p>11,250,657.89</p>
        </div>
      </div>
      {/* INC */}
      <div className="w-full p-0 shadow-xl card bg-base-100">
        <div className="flex flex-col gap-5 card-body ">
          <div className="flex items-center border-b-2 ">
            <TbPointFilled color="green" />
            <h2 className="card-title ">Your Income </h2>
          </div>
          <h1 className="text-3xl font-semibold">{cardInfo?.income?.sum}₮</h1>

          <span className="opacity-50">Your Income Account</span>
          <div className="flex items-end ">
            <FaArrowAltCircleUp color="green" size={20} className="mr-2" />
            <span>32&#37; from last month</span>
          </div>
        </div>
      </div>
      {/* INC */}
      {/* EXP */}
      <div className="w-full shadow-xl card bg-base-100 ">
        <div className="flex flex-col gap-5 card-body ">
          <div className="flex items-center border-b-2">
            <TbPointFilled color="blue" />
            <h2 className="card-title ">Total expenses </h2>
          </div>
          <h1 className="text-3xl font-semibold">{cardInfo?.expense?.sum}₮</h1>
          <span className="opacity-50">Your Income Account</span>
          <div className="flex items-end ">
            <FaArrowAltCircleDown color="green" size={20} className="mr-2" />
            <span>32&#37; from last month</span>
          </div>
        </div>
      </div>
      {/* EXP */}
    </div>
  );
};

export default IncExpCards;
