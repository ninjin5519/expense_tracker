import { apiUrl } from "@/utils/util";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";

const DoughnurChart = ({ chartData }) => {
  const lbl = chartData?.map((c) => c.cat_name);
  const amounts = chartData?.map((c) => c.sum);
  console.log(lbl);

  const data2 = {
    datasets: [
      {
        data: amounts,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: lbl,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card w-1/2 ">
      <div className="h-96 w-96">
        <Doughnut options={options2} data={data2} />
        <p></p>
      </div>
    </div>
  );
};

export default DoughnurChart;
