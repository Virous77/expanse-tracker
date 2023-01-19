import React from "react";
import TransactionList from "./TransactionList";
import { useFilter } from "../../store/filterContext";

const MiniStateMent = () => {
  const { holdData } = useFilter();

  return (
    <section>
      <h2>Mini Statement</h2>
      <TransactionList data={holdData?.slice(0, 5)} />
    </section>
  );
};

export default MiniStateMent;
