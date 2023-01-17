import React, { useState } from "react";
import { formatDate, handleIcon, formatDate2 } from "../../utils/function";
import { BsFillNutFill } from "react-icons/bs";

const TransactionList = ({ data, filter }) => {
  const [showDetails, setShowDetails] = useState("");

  return (
    <section className="transListMain">
      {data &&
        data?.map((item, idx) => (
          <div
            className={`transList ${
              item.type === "income" ? "tIncBorder" : "tExpBorder"
            }`}
            key={item.id}
          >
            <div
              className="wrap"
              onClick={() => {
                if (!filter) {
                  if (showDetails === idx) {
                    setShowDetails("");
                  } else {
                    setShowDetails(idx);
                  }
                }
              }}
            >
              <p
                className={`TIcon ${
                  item.type === "income" ? "greenIcon" : "redIcon"
                }`}
              >
                {handleIcon(item.formType) || <BsFillNutFill />}
              </p>
              <div className="TContent">
                <h3>{item.formType}</h3>
                <span>{formatDate2(item.date)}</span>
              </div>
              <span className="tAmount">{item.amount}$</span>
            </div>

            {showDetails === idx && (
              <div className="Tshow">
                <span>Method:- {item.type}</span>
                <p>{item.note && item.note}</p>

                <b>
                  {formatDate(item?.createdAt?.toDate()?.toLocaleDateString())}{" "}
                  {item?.createdAt?.toDate()?.toLocaleTimeString()}
                </b>
              </div>
            )}
          </div>
        ))}
    </section>
  );
};

export default TransactionList;
