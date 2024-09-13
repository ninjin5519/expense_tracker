"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [chartData, setChartData] = useState();

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("DD", res.data);
      setTransactions(res.data.transaction);
    } catch (error) {
      console.error("=======>", error);
      toast.error("Failed to fetch transactions");
    }
  };

  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch card info");
    }
  };

  const getChartData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/records/chart`);
      if (response.status === 200) {
        setChartData(response.data);
      }
    } catch (error) {
      console.log("ERR", error);
      toast.error("Aldaa garlaa sain oroldon uu");
    }
  };
  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
    getChartData();
  }, []);
  return (
    <DashboardContext.Provider value={{ transactions, cardInfo, chartData }}>
      {children}
    </DashboardContext.Provider>
  );
};
