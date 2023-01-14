import React from "react";
import Form from "./Form";
import { expenseType } from "../../utils/data";
import { useExpense } from "../../store/expenseContext";

const ExpenseForm = () => {
  const { formData } = useExpense();
  const { expense } = formData;

  const saveExpense = () => {
    console.log(formData);
  };

  return (
    <Form
      type={expenseType}
      title="Expense-Type"
      buttonTitle="Add Expense"
      saveForm={saveExpense}
      selectHead="Select Expense"
      method={expense}
      name="expense"
    />
  );
};

export default ExpenseForm;
