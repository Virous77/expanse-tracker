import { createContext, useState, useContext, useEffect } from "react";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [activeType, setActiveType] = useState("income");

  const incomeState = {
    income: "",
    amount: "",
    notes: "",
    date: "",
  };

  const expenseState = {
    expense: "",
    amount: "",
    notes: "",
    date: "",
  };

  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData(activeType === "income" ? incomeState : expenseState);
  }, [activeType]);

  return (
    <ExpenseContext.Provider
      value={{ activeType, setActiveType, formData, setFormData, handleChange }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);

export default ExpenseContext;
