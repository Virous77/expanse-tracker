import React, { useState } from "react";
import { handleIcon, formatDate3, formatDate2 } from "../../utils/function";
import { BsFillNutFill } from "react-icons/bs";
import empty from "../../assets/empty.svg";

const TransactionList = ({ data, filter, title }) => {
  const [showDetails, setShowDetails] = useState("");

  return (
    <>
      {data && data.length > 0 ? (
        <section
          className={`transListMain ${title === "tMain" ? "MTrans" : ""}`}
        >
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
                  <span className="tAmount">{item.amount}₹</span>
                </div>

                {showDetails === idx && (
                  <div className="Tshow">
                    <span>Method:- {item.type}</span>
                    <p>{item.note && item.note}</p>

                    <b>{formatDate3(item.createdAt)}</b>
                  </div>
                )}
              </div>
            ))}
        </section>
      ) : (
        <div className="empty">
          <img src={empty} alt="empty" />
          <span>No Transaction Yet!</span>
        </div>
      )}
    </>
  );
};

export default TransactionList;
