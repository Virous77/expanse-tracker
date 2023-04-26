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

  const handleFilter = (id) => {
    const today = new Date();
    const DaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - time
    );

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
        .filter((transc) => {
          if (time) {
            return (
              new Date(
                transc.createdAt.seconds * 1000 +
                  transc.createdAt.nanoseconds / 1000000
              ) >= DaysAgo
            );
          } else {
            return transc;
          }
        });
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
        total,
        totalIncome,
        totalExpense,
        setTime,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

export default FilterContext;
