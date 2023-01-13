import React from "react";
import "./Expense.css";
import Sidebar from "./Sidebar";

const Expense = () => {
  return (
    <main className="expenseMain">
      <Sidebar />
      <section className="eContent"></section>
    </main>
  );
};

export default Expense;
