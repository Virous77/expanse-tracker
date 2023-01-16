import React from "react";
import { useExpense } from "../../store/expenseContext";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import Chart from "./Chart";

const Tracker = () => {
  const { activeType, setActiveType } = useExpense();

  return (
    <main className="eForm">
      <header>
        <span
          onClick={() => setActiveType("income")}
          className={activeType === "income" ? "eOpBorder" : "eOpBorderN"}
        >
          Income
        </span>
        <span
          className={activeType === "expense" ? "eOpBorder" : "eOpBorderN"}
          onClick={() => setActiveType("expense")}
        >
          Expense
        </span>
      </header>

      <section className="subTracker">
        {activeType === "income" && <IncomeForm />}
        {activeType === "expense" && <ExpenseForm />}

        <Chart />
      </section>
    </main>
  );
};

export default Tracker;
