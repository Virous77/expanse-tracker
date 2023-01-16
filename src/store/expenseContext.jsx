import { createContext, useState, useContext, useEffect } from "react";
import { userUserContext } from "../store/userContext";
import { db } from "../firebase/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAppContext } from "./appContext";
import { validate } from "../utils/function";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [activeType, setActiveType] = useState("income");

  const incomeState = {
    income: "",
    amount: "",
    notes: "",
    date: "",
    others: "",
  };

  const expenseState = {
    expense: "",
    amount: "",
    notes: "",
    date: "",
    others: "",
  };
  const [formData, setFormData] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  //Custom hooks
  const { activeUser } = userUserContext();
  const { notificationSet } = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  ///Add user Data
  const saveFormData = async () => {
    const checkError = validate({
      type: formData.income || formData.expense,
      input: activeType === "income" ? "income" : "expense",
      types: formData,
      formType: activeType,
      errorSet: notificationSet,
    });

    if (checkError === "error") return;

    setFormLoading(true);

    const inputTypeIncome =
      activeType === "income" && formData.income === "others"
        ? formData.others
        : formData.income;
    const inputTypeExpense =
      activeType === "expense" && formData.expense === "others"
        ? formData.others
        : formData.expense;

    const tempData = {
      userId: activeUser.uid,
      createdAt: serverTimestamp(),
      date: formData.date,
      note: formData.notes || null,
      amount: formData.amount,
      type: activeType,
      formType: inputTypeExpense || inputTypeIncome,
    };

    try {
      await addDoc(collection(db, "expense"), tempData);
      setFormLoading(false);
      notificationSet({
        message: `Transaction successfully saved!`,
        status: "success",
      });

      setFormData(incomeState || expenseState);
    } catch (error) {
      setFormLoading(false);
      notificationSet({
        message: "Something went wrong,Try again!",
        status: "error",
      });
    }
  };

  useEffect(() => {
    setFormData(activeType === "income" ? incomeState : expenseState);
  }, [activeType]);

  return (
    <ExpenseContext.Provider
      value={{
        activeType,
        setActiveType,
        formData,
        setFormData,
        handleChange,
        saveFormData,
        formLoading,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);

export default ExpenseContext;
