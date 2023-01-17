import React, { useEffect } from "react";
import { useAppContext } from "../../store/appContext";
import "./Transaction.css";
import Header from "../Header";
import useFetchCollectionByUid from "../../hooks/useFetchUserByUid";
import { userUserContext } from "../../store/userContext";
import { BiWalletAlt } from "react-icons/bi";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import TransactionList from "./TransactionList";
import Filter from "../Filter/Filter";
import { useFilter } from "../../store/filterContext";

const Transaction = () => {
  const { setShowModal, filter, setShowFilter } = useAppContext();
  const { activeUser } = userUserContext();
  const { data } = useFetchCollectionByUid("userId", activeUser.uid, "expense");
  const { transactionData, setTransactionData, setHoldData } = useFilter();

  const totalIncome =
    data &&
    data
      ?.filter((a) => a.type === "income")
      .map((c) => +c.amount)
      ?.reduce((acc, curr) => acc + curr, 0);

  const totalExpense =
    data &&
    data
      ?.filter((a) => a.type === "expense")
      .map((c) => +c.amount)
      ?.reduce((acc, curr) => acc + curr, 0);

  const total = totalIncome - totalExpense;

  useEffect(() => {
    setTransactionData(data);
    setHoldData(data);
  }, [data]);

  return (
    <>
      <div className="overLay" onClick={() => setShowModal("")} />
      <section className="trancMain" onClick={() => setShowFilter(false)}>
        <Header name="Transaction" />

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
        <TransactionList data={transactionData} filter={filter} />
        {filter && <Filter />}
      </section>
    </>
  );
};

export default Transaction;
