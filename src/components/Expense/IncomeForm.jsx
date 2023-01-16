import React from "react";
import Form from "./Form";
import { incomeType } from "../../utils/data";
import { useExpense } from "../../store/expenseContext";

const IncomeForm = () => {
  const { formData, saveFormData } = useExpense();
  const { income } = formData;

  return (
    <Form
      type={incomeType}
      title="Income-Type"
      buttonTitle="Add Income"
      saveForm={saveFormData}
      selectHead="Select Income"
      method={income}
      name="income"
      subName="Other-Income"
    />
  );
};

export default IncomeForm;
