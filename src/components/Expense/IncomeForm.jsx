import React from "react";
import Form from "./Form";
import { incomeType } from "../../utils/data";
import { useExpense } from "../../store/expenseContext";

const IncomeForm = () => {
  const { formData } = useExpense();
  const { income } = formData;

  const saveIncome = () => {
    console.log(formData);
  };

  return (
    <Form
      type={incomeType}
      title="Income-Type"
      buttonTitle="Add Income"
      saveForm={saveIncome}
      selectHead="Select Income"
      method={income}
      name="income"
    />
  );
};

export default IncomeForm;
