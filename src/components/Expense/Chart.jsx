import React, { useEffect, useState } from "react";
import { useFilter } from "../../store/filterContext";
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
import Sort from "./Sort";

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
  const [income, setIncome] = useState({
    data: [],
    label: [],
  });
  const [expense, setExpense] = useState({
    data: [],
    label: [],
  });

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

  const data = {
    labels: expense.label,
    datasets: [
      {
        label: "Last 30 Days",
        data: expense.data,
        backgroundColor: "red",
      },
    ],
  };

  const data2 = {
    labels: income.label,
    datasets: [
      {
        label: "Last 30 Days",
        data: income.data,
        backgroundColor: "green",
      },
    ],
  };

  const handleIncomeChange = ({ value, data, setType }) => {
    if (value === "asc") {
      const sortLabel = data
        .sort((a, b) => a.amount - b.amount)
        .map((trans) => trans.formType);
      const sortData = data
        .sort((a, b) => a.amount - b.amount)
        .map((trans) => trans.amount);

      return setType({ ...income, data: sortData, label: sortLabel });
    }

    if (value === "des") {
      const sortLabel = data
        .sort((a, b) => b.amount - a.amount)
        .map((trans) => trans.formType);
      const sortData = data
        .sort((a, b) => b.amount - a.amount)
        .map((trans) => trans.amount);

      return setType({ ...income, data: sortData, label: sortLabel });
    }

    if (value === "null") {
      const mapData = data.map((transc) => transc.amount);
      const mapLabel = data.map((transc) => transc.formType);
      return setType({
        ...income,
        data: mapData,
        label: mapLabel,
      });
    }

    if (value !== "null" || value !== "des" || value !== "asc") {
      const today = new Date();
      const DaysAgo = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - +value
      );

      const sortLabel = data
        .filter(
          (transc) =>
            new Date(
              transc.createdAt.seconds * 1000 +
                transc.createdAt.nanoseconds / 1000000
            ) >= DaysAgo
        )
        .map((transc) => transc.formType);

      const sortData = data
        .filter(
          (transc) =>
            new Date(
              transc.createdAt.seconds * 1000 +
                transc.createdAt.nanoseconds / 1000000
            ) >= DaysAgo
        )
        .map((transc) => transc.amount);

      return setType({
        ...income,
        data: sortData,
        label: sortLabel,
      });
    }
  };

  useEffect(() => {
    setIncome({
      ...income,
      data: incomeData.map((transc) => transc.amount),
      label: incomeData.map((transc) => transc.formType),
    });

    setExpense({
      ...income,
      data: expenseData.map((transc) => transc.amount),
      label: expenseData.map((transc) => transc.formType),
    });
  }, []);

  return (
    <main className="chartMain">
      {holdData.length > 0 ? (
        <>
          {expenseData.length > 0 && (
            <div className="expense-chart">
              <Sort
                title="Expense Transaction"
                handleChange={(e) =>
                  handleIncomeChange({
                    value: e.target.value,
                    data: expenseData,
                    setType: setExpense,
                  })
                }
              />
              <Bar options={options} data={data} />
            </div>
          )}

          {incomeData.length > 0 && (
            <div style={{ marginTop: "3rem" }} className="cool">
              <Sort
                title="Income Transaction"
                handleChange={(e) =>
                  handleIncomeChange({
                    value: e.target.value,
                    data: incomeData,
                    setType: setIncome,
                  })
                }
              />
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
