import React from "react";
import "./Filter.css";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../../store/appContext";
import { useFilter } from "../../store/filterContext";

const Filter = () => {
  const { setShowFilter } = useAppContext();
  const {
    time,
    setTime,
    methodRef,
    handleFilter,
    amountFirstRef,
    amountSecondRef,
    transactionData,
    setTransactionData,
    holdData,
    setHoldData,
  } = useFilter();

  return (
    <section className="filter" onClick={(e) => e.stopPropagation()}>
      <header>
        <h2>Filter</h2>
        <AiOutlineClose
          size={20}
          cursor="pointer"
          onClick={() => setShowFilter(false)}
        />
      </header>
      <div className="allF">
        <label>Method</label>
        <select ref={methodRef}>
          <option value="all">All</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div className="fTime allF">
        <label>Time</label>

        <div className="fTimeList">
          <button
            className={time === 10 ? "activeF" : "noActiveF"}
            onClick={() => setTime(10)}
          >
            10 Days
          </button>
          <button
            className={time === 30 ? "activeF" : "noActiveF"}
            onClick={() => setTime(30)}
          >
            30 Days
          </button>
          <button
            className={time === 90 ? "activeF" : "noActiveF"}
            onClick={() => setTime(90)}
          >
            90 Days
          </button>
        </div>
      </div>

      <div className="fAmountMain">
        <div className="fAmount allF ">
          <label>Amount From</label>
          <input type="number" ref={amountFirstRef} />
        </div>

        <div className="fAmount allF ">
          <label>Amount To</label>
          <input type="number" ref={amountSecondRef} />
        </div>
      </div>

      <div className="fAction">
        <button
          style={{ backgroundColor: "black" }}
          onClick={() => handleFilter("clear")}
        >
          Clear
        </button>
        <button
          style={{ backgroundColor: "blueviolet" }}
          onClick={() => handleFilter("save")}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Filter;
