import { createContext, useState, useContext } from "react";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
};

export const useExpense = () => useContext(ExpenseContext);

export default ExpenseContext;
