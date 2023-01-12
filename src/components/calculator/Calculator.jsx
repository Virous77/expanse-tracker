import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const value = [
    {
      id: 1,
      name: "c",
    },
    {
      id: 2,
      name: "%",
    },
    {
      id: 3,
      name: "(2)",
    },
    {
      id: 4,
      name: "/",
    },
    {
      id: 5,
      name: "7",
    },
    {
      id: 6,
      name: "8",
    },
    {
      id: 7,
      name: "9",
    },
    {
      id: 8,
      name: "X",
    },
    {
      id: 9,
      name: "4",
    },
    {
      id: 10,
      name: "5",
    },
    {
      id: 11,
      name: "6",
    },
    {
      id: 12,
      name: "-",
    },
    {
      id: 13,
      name: "3",
    },
    {
      id: 14,
      name: "2",
    },
    {
      id: 15,
      name: "1",
    },
    {
      id: 16,
      name: "+",
    },
  ];

  const [firstEnt, setFirstEnt] = useState([]);
  const [secondEnt, setSecondEnt] = useState([]);
  const [arg, setArg] = useState(null);
  // const [arg2, setArg2] = useState(false);

  const handleInput = (id) => {
    if (arg) {
      setSecondEnt([...secondEnt, id]);
    } else {
      setFirstEnt([...firstEnt, id]);
    }
  };

  const handleArg = (id) => {
    if (arg && id === "x") {
      console.log(+firstEnt.join("") * +secondEnt.join(""));
    } else {
      setArg(id);
    }

    if (arg && id === "+") {
      console.log(+firstEnt.join("") + +secondEnt.join(""));
    } else {
      setArg(id);
    }

    if (arg && id === "-") {
      console.log(+firstEnt.join("") - +secondEnt.join(""));
    } else {
      setArg(id);
    }
  };

  return (
    <>
      <div className="overLay" />
      <section className="calcMain">
        <h1>{firstEnt}</h1>
        <p>{secondEnt}</p>
        <div className="clac">
          <span>C</span>
          <span>%</span>
          <span>(2)</span>
          <span>/</span>
          <span onClick={() => handleInput(9)}>9</span>
          <span onClick={() => handleInput(8)}>8</span>
          <span onClick={() => handleInput(7)}>7</span>
          <span onClick={() => handleArg("x")}>X</span>
          <span onClick={() => handleInput(6)}>6</span>
          <span onClick={() => handleInput(5)}>5</span>
          <span onClick={() => handleInput(4)}>4</span>
          <span onClick={() => handleArg("-")}>-</span>
          <span onClick={() => handleInput(3)}>3</span>
          <span onClick={() => handleInput(2)}>2</span>
          <span onClick={() => handleInput(1)}>1</span>
          <span onClick={() => handleArg("+")}>+</span>
        </div>
        <div className="calcZero">
          <span className="zero">0</span>
          <div className="equal">
            <span>.</span>
            <span className="dot">=</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
