import React from "react";
import { useExpense } from "../../store/expenseContext";

const Form = ({
  type,
  title,
  buttonTitle,
  saveForm,
  selectHead,
  method,
  name,
}) => {
  const { formData, handleChange } = useExpense();
  const { date, notes, amount } = formData;

  return (
    <>
      <form className="incomeForm" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <label htmlFor="income">{title}</label>
          <select
            name={name}
            value={method}
            id="income"
            onChange={handleChange}
          >
            <option value="">{selectHead}</option>
            {type.map((type) => (
              <option value={type.name} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            onChange={handleChange}
            name="amount"
            value={amount}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="date">Date</label>
          <input type="date" onChange={handleChange} name="date" value={date} />
        </fieldset>

        <fieldset>
          <label htmlFor="note">Add Note</label>
          <input
            type="text"
            onChange={handleChange}
            name="notes"
            value={notes}
          />
        </fieldset>

        <button onClick={saveForm}>{buttonTitle}</button>
      </form>
    </>
  );
};

export default Form;
