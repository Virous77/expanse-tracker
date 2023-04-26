import React from "react";
import "./Filter.css";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../../store/appContext";
import { useFilter } from "../../store/filterContext";
import Csv from "../CsvData/Csv";

const Filter = () => {
  const { setShowFilter } = useAppContext();

  const {
    methodRef,
    handleFilter,
    amountFirstRef,
    amountSecondRef,
    time,
    setTime,
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
            className={time === 5 ? "activeF" : "noActiveF"}
            onClick={() => setTime(5)}
          >
            05 Days
          </button>
          <button
            className={time === 15 ? "activeF" : "noActiveF"}
            onClick={() => setTime(15)}
          >
            15 Days
          </button>
          <button
            className={time === 30 ? "activeF" : "noActiveF"}
            onClick={() => setTime(30)}
          >
            30 Days
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

      <div>
        <Csv />
      </div>

      <div className="fAction">
        <button
          style={{ backgroundColor: "black" }}
          onClick={() => {
            handleFilter("clear");
            setShowFilter("");
          }}
        >
          Clear
        </button>
        <button
          style={{ backgroundColor: "blueviolet" }}
          onClick={() => {
            handleFilter("save");
            setShowFilter("");
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Filter;
