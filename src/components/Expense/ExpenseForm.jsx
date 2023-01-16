import React from "react";
import Form from "./Form";
import { expenseType } from "../../utils/data";
import { useExpense } from "../../store/expenseContext";

const ExpenseForm = () => {
  const { formData, saveFormData } = useExpense();
  const { expense } = formData;

  return (
    <Form
      type={expenseType}
      title="Expense-Type"
      buttonTitle="Add Expense"
      saveForm={saveFormData}
      selectHead="Select Expense"
      method={expense}
      name="expense"
      subName="Other-Expense"
    />
  );
};

export default ExpenseForm;
