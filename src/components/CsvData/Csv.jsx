import React from "react";
import { CSVLink } from "react-csv";
import { useFilter } from "../../store/filterContext";

const Csv = () => {
  const { transactionData } = useFilter();

  const headers = [
    { label: "Transaction Name", key: "transaction" },
    { label: "Amount", key: "amount" },
    { label: "Date", key: "date" },
    { label: "Type", key: "type" },
  ];

  const csvData = transactionData.map((item) => ({
    transaction: item.formType,
    amount: item?.amount,
    date: item.date,
    type: item.type,
  }));

  const csvReport = {
    filename: `Transaction-${new Date().getDate()}.csv`,
    headers: headers,
    data: csvData,
  };

  return (
    <CSVLink style={{ marginTop: "8px", fontSize: "13px" }} {...csvReport}>
      Download Transaction Csv
    </CSVLink>
  );
};

export default Csv;
