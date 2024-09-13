import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
  const lbl = barChartData?.map((c) => c.sar);
  const totalExpence = barChartData?.map((c) => c.total_exp);
  const totalIncome = barChartData?.map((c) => c.total_inc);

  const data1 = {
    labels: lbl,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: totalIncome,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: totalExpence,
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card w-1/2">
      <div className="w-full p-4 ">
        <h2 className="card-title  text-base ">Income - Expense </h2>
      </div>
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
