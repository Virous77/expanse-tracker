import React from "react";
import { CSVLink } from "react-csv";
import { useFilter } from "../../store/filterContext";

const Csv = () => {
  const { holdData } = useFilter();

  const headers = [
    { label: "Transaction", key: "transaction" },
    { label: "Amount", key: "amount" },
    { label: "Date", key: "date" },
  ];

  const getCSVData = (data) => {
    let csvData = [];
    data?.map((item) => {
      const testData = {
        Transaction: item.formType,
        Amount: item?.amount,
        Date: item.date,
      };
      csvData = [...csvData, { ...testData }];
    });

    return csvData;
  };

  const csvButtonStyle = {
    color: "red",
    marginLeft: 5,
    border: "1px solid",
    padding: "14px",
    borderRadius: "8px",
    borderColor: "grey",
  };

  const csvReport = {
    filename: `Transaction-${new Date().getDate()}.csv`,
    headers: headers,
    data: getCSVData(holdData),
  };

  console.log(csvReport);

  return (
    <CSVLink style={csvButtonStyle} {...csvReport}>
      Download me
    </CSVLink>
  );
};

export default Csv;
