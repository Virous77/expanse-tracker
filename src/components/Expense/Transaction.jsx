import React from "react";
import { useAppContext } from "../../store/appContext";
import "./Transaction.css";
import Header from "../Header";
import { BiWalletAlt } from "react-icons/bi";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import TransactionList from "./TransactionList";
import Filter from "../Filter/Filter";
import { useFilter } from "../../store/filterContext";

const Transaction = () => {
  const { setShowModal, filter, setShowFilter } = useAppContext();
  const { transactionData, totalExpense, totalIncome, total } = useFilter();

  return (
    <>
      <div className="overLay" onClick={() => setShowModal("")} />
      <section className="trancMain" onClick={() => setShowFilter(false)}>
        <Header name="Transaction" />

        {transactionData && transactionData.length > 0 && (
          <header className="incomeInfo">
            <div className="leftTrans">
              <p>
                <GiReceiveMoney size={20} /> Income: {totalIncome}$
              </p>
              <p>
                <GiPayMoney size={20} /> Expense: {totalExpense}$
              </p>
            </div>

            <span>
              <BiWalletAlt size={20} /> Total: {total}$
            </span>
          </header>
        )}
        <TransactionList data={transactionData} filter={filter} title="tMain" />
        {filter && <Filter />}
      </section>
    </>
  );
};

export default Transaction;
