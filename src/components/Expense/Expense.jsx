import React from "react";
import "./Expense.css";
import Sidebar from "./Sidebar";
import { userUserContext } from "../../store/userContext";
import { currentMoment, formatDate } from "../../utils/function";
import Tracker from "./Tracker";
import Chart from "./Chart";
import { useAppContext } from "../../store/appContext";
import Home from "./Home";

const Expense = () => {
  const { data, userData } = userUserContext();
  const { showModal } = useAppContext();

  const { isLoggedIn } = userData;

  return (
    <main className="expenseMain">
      <Sidebar />

      {isLoggedIn && (
        <>
          {showModal !== "chart" && (
            <section className="eContent">
              <header>
                <div className="eUser">
                  <h3>{currentMoment(new Date())},</h3>
                  <h4>{data[0]?.name}</h4>
                </div>
                <span>{formatDate(new Date()?.toLocaleDateString())}</span>
              </header>

              <Tracker />
            </section>
          )}
        </>
      )}

      {!isLoggedIn && <Home />}

      {showModal === "chart" && <Chart />}
    </main>
  );
};

export default Expense;
