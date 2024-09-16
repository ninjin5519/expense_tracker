"use client";

import { toast } from "react-toastify";

import BarChart from "@/app/components/dashboard/barChart";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

import { useContext } from "react";
import { DashboardContext } from "@/app/context/dashboard-context";
import IncExpCards from "@/app/components/inc.exp.cards";
import RecordCard from "@/app/components/dashboard/record-card";
import DoughnurChart from "@/app/components/dashboard/doughnut";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { transactions, chartData } = useContext(DashboardContext);
  return (
    <div className="container mx-auto mt-6">
      <div className="container  gap-10 pt-5 mb-5">
        <IncExpCards />
        <div className="flex gap-4 mt-5">
          <BarChart barChartData={chartData?.bar} />
          <DoughnurChart chartData={chartData?.donut} />
        </div>
        <div className=" mt-6">
          <table className="table  bg-white rounded-xl">
            <div className="p-5 border-b">
              <thead className="font-semibold text-base text-black  ">
                Last Records
              </thead>
            </div>
            {transactions?.map((tr) => (
              <RecordCard transaction={tr} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
