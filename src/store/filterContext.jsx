import { createContext, useState, useContext, useRef } from "react";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState([]);
  const [holdData, setHoldData] = useState([]);

  const [time, setTime] = useState("");
  const methodRef = useRef();
  const amountFirstRef = useRef();
  const amountSecondRef = useRef();

  const totalIncome =
    holdData &&
    holdData
      ?.filter((a) => a.type === "income")
      .map((c) => +c.amount)
      ?.reduce((acc, curr) => acc + curr, 0);

  const totalExpense =
    holdData &&
    holdData
      ?.filter((a) => a.type === "expense")
      .map((c) => +c.amount)
      ?.reduce((acc, curr) => acc + curr, 0);

  const total = totalIncome - totalExpense;

  const date = (date) => {
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - +date));

    const splitDate = priorDate.toLocaleDateString()?.split("/");
    const makeDate =
      splitDate[0] +
      "/" +
      `${+splitDate[1] < 10 ? `0${splitDate[1]}` : splitDate[1]}` +
      "/" +
      splitDate[2];

    setTime(makeDate);
  };

  const handleFilter = (id) => {
    if (id === "save") {
      const filterData = holdData
        .filter((li) => {
          if (amountFirstRef.current.value) {
            return +li.amount >= +amountFirstRef.current.value;
          } else {
            return li;
          }
        })
        .filter((li) => {
          if (amountSecondRef.current.value) {
            return +li.amount <= +amountSecondRef.current.value;
          } else {
            return li;
          }
        })
        .filter((c) => {
          if (methodRef.current.value === "all") {
            return c;
          }
          return c.type === methodRef.current.value;
        })
        .filter((c) => c.createdAt?.toDate()?.toLocaleDateString() >= time);
      setTransactionData(filterData);
    } else {
      setTransactionData(holdData);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        transactionData,
        setTransactionData,
        handleFilter,
        time,
        methodRef,
        amountFirstRef,
        amountSecondRef,
        transactionData,
        setTransactionData,
        holdData,
        setHoldData,
        date,
        total,
        totalIncome,
        totalExpense,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

export default FilterContext;
