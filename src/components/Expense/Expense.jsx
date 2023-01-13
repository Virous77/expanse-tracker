import React from "react";
import "./Expense.css";
import Sidebar from "./Sidebar";
import { userUserContext } from "../../store/userContext";
import { currentMoment, formatDate } from "../../utils/function";
import ExpenseForm from "./ExpenseForm";

const Expense = () => {
  const { data } = userUserContext();

  return (
    <main className="expenseMain">
      <Sidebar />

      <section className="eContent">
        <header>
          <div className="eUser">
            <h3>{currentMoment(new Date())},</h3>
            <h4>{data[0]?.name}</h4>
          </div>
          <span>{formatDate(new Date()?.toLocaleDateString())}</span>
        </header>

        <ExpenseForm />
      </section>
    </main>
  );
};

export default Expense;
