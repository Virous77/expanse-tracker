import React, { useState } from "react";
import { formatDate } from "../../utils/function";

const TransactionList = ({ data }) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <section className="transListMain">
      {data &&
        data?.map((item) => (
          <div
            className={`transList ${
              item.type === "income" ? "tIncBorder" : "tExpBorder"
            }`}
            key={item.id}
          >
            <div className="TIcon"></div>
            <div className="TContent">
              <h3>{item.formType}</h3>
              <span>{item.date}</span>
            </div>
            <div className="tAmount">
              <span>{item.amount}$</span>
            </div>

            {showDetails && (
              <div>
                <span>Type: {item.type}</span>
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
