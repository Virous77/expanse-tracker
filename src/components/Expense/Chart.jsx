import React from "react";
import { useFilter } from "../../store/filterContext";
import { useAppContext } from "../../store/appContext";
import "./Chart.css";
import empty from "../../assets/empty.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Recent Expense Transactions",
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Recent Income Transactions",
    },
  },
};

const Chart = () => {
  const { holdData } = useFilter();
  const { setShowModal } = useAppContext();

  const today = new Date();
  const thirtyDaysAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 30
  );

  const lastThirtyDaysData = holdData.filter(
    (item) =>
      new Date(
        item.createdAt.seconds * 1000 + item.createdAt.nanoseconds / 1000000
      ) >= thirtyDaysAgo
  );

  const expenseData = lastThirtyDaysData.filter(
    (transc) => transc.type === "expense"
  );
  const incomeData = lastThirtyDaysData.filter(
    (transc) => transc.type === "income"
  );
  const expenseLabels = expenseData.map((transc) => transc.formType);
  const incomeLabels = incomeData.map((transc) => transc.formType);
  const expense = expenseData.map((transc) => transc.amount);
  const income = incomeData.map((transc) => transc.amount);

  const data = {
    labels: expenseLabels,
    datasets: [
      {
        label: "Last 30 Days",
        data: expense,
        backgroundColor: "red",
      },
    ],
  };

  const data2 = {
    labels: incomeLabels,
    datasets: [
      {
        label: "Last 30 Days",
        data: income,
        backgroundColor: "green",
      },
    ],
  };

  return (
    <main className="chartMain">
      {holdData.length > 0 ? (
        <>
          {expenseData.length > 0 && (
            <div>
              <Bar options={options} data={data} />
            </div>
          )}

          {incomeData.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <Bar options={options2} data={data2} />
            </div>
          )}
        </>
      ) : (
        <div className="empty-trans">
          <img src={empty} alt="empty" />
          <p>You haven't done any transaction yet.</p>
        </div>
      )}
    </main>
  );
};

export default Chart;
