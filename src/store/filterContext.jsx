import { createContext, useState, useContext, useRef } from "react";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState([]);
  const [holdData, setHoldData] = useState([]);

  const [time, setTime] = useState("");
  const methodRef = useRef();
  const amountFirstRef = useRef();
  const amountSecondRef = useRef();

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
        setTime,
        methodRef,
        amountFirstRef,
        amountSecondRef,
        transactionData,
        setTransactionData,
        holdData,
        setHoldData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

export default FilterContext;
