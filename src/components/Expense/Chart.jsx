import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useFilter } from "../../store/filterContext";
import { useAppContext } from "../../store/appContext";
import "./Chart.css";
import empty from "../../assets/empty.svg";

const Chart = () => {
  const { holdData } = useFilter();
  const { setShowModal } = useAppContext();

  const z =
    holdData &&
    holdData
      ?.filter((li) => li.type === "income")
      ?.slice(0, 5)
      ?.map((li, idx) => {
        const cc = 11;
        const y = {
          title: li.formType,
          value: +li.amount,
          color: `#028${cc + idx}f`,
        };

        return y;
      });

  const m =
    holdData &&
    holdData
      ?.filter((li) => li.type === "expense")
      ?.slice(0, 5)
      ?.map((li, idx) => {
        const cc = 1030;
        const y = {
          title: li.formType,
          value: +li.amount,
          color: `#ff${cc * idx}`,
        };

        return y;
      });

  const incomeTags = holdData
    ?.filter((li) => li.type === "income")
    ?.map((li) => li.formType);

  const expenseTags = holdData
    ?.filter((li) => li.type === "expense")
    ?.map((li) => li.formType);

  const uniqueIncome = [...new Set(incomeTags)];
  const uniqueExpense = [...new Set(expenseTags)];

  return (
    <main className="chartMain">
      <button onClick={() => setShowModal("")}>Go Back</button>
      {holdData && holdData.length > 0 ? (
        <>
          <p>Last 5 Transaction Chart</p>
          <section className="chart">
            <div className="ppp">
              <h1>Income</h1>

              <div className="incomeTags">
                {uniqueIncome?.slice(0, 5)?.map((data) => (
                  <span className="tagsList" key={data}>
                    {data}
                  </span>
                ))}
              </div>

              <PieChart
                style={{ fontSize: "8px", color: "white" }}
                data={[...new Set(z)]}
                lineWidth={50}
                animate={true}
                animationDuration={1000}
                labelPosition={80}
                label={({ dataEntry }) => dataEntry.value}
              />
            </div>

            <div className="ppp">
              <h1>Expense</h1>

              <div className="incomeTags">
                {uniqueExpense?.slice(0, 5)?.map((data) => (
                  <span className="tagsList ccc" key={data}>
                    {data}
                  </span>
                ))}
              </div>

              <PieChart
                style={{ fontSize: "8px", color: "white" }}
                data={[...new Set(m)]}
                lineWidth={50}
                animate={true}
                animationDuration={1000}
                labelPosition={80}
                label={({ dataEntry }) => dataEntry.value}
              />
            </div>
          </section>
        </>
      ) : (
        <div className="empty">
          <img src={empty} alt="empty" />
          <p>No Transaction yet!</p>
        </div>
      )}
    </main>
  );
};

export default Chart;
