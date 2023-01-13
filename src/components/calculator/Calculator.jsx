import React, { useState } from "react";
import "./Calculator.css";
import { useAppContext } from "../../store/appContext";

const Calculator = () => {
  /////Local state
  const [firstEnt, setFirstEnt] = useState([]);
  const [secondEnt, setSecondEnt] = useState([]);
  const [arg, setArg] = useState(null);
  const [total, setTotal] = useState("");

  ///Custom hooks
  const { setShowModal } = useAppContext();

  //Putting entry
  const handleInput = (id) => {
    if (arg) {
      if (secondEnt.length >= 9) return;
      if (id === "." && secondEnt.includes(".")) return;
      setSecondEnt([...secondEnt, id]);
    }

    if (!arg) {
      if (firstEnt.length >= 9) return;
      if (id === "." && firstEnt.includes(".")) return;
      setFirstEnt([...firstEnt, id]);
    }
  };

  ///Validating maths
  const handleArg = (id) => {
    ///Other Maths
    if (arg && id === "x") {
      setTotal(+firstEnt.join("") * +secondEnt.join(""));
    } else {
      setArg(id);
    }

    if (arg && id === "+") {
      setTotal(+firstEnt.join("") + +secondEnt.join(""));
    } else {
      setArg(id);
    }

    if (arg && id === "-") {
      setTotal(+firstEnt.join("") - +secondEnt.join(""));
    } else {
      setArg(id);
    }

    if (arg && id === "/") {
      setTotal(+firstEnt.join("") / +secondEnt.join(""));
    } else {
      setArg(id);
    }

    ///Square
    if (id === "(2)") {
      setTotal(+firstEnt.join("") * +firstEnt.join(""));
    } else {
      setArg(id);
    }

    ////Percentage
    if (id === "%" && total) {
      setTotal(total / 100);
    }

    if (id === "%" && !total) {
      setTotal(+firstEnt.join("") / 100);
    }

    ///Equal Button
    if (arg === "+" && id === "=") {
      setTotal(+firstEnt.join("") + +secondEnt.join(""));
    }

    if (arg === "/" && id === "=") {
      setTotal(+firstEnt.join("") / +secondEnt.join(""));
    }

    if (arg === "-" && id === "=") {
      setTotal(+firstEnt.join("") - +secondEnt.join(""));
    }

    if (arg === "x" && id === "=") {
      setTotal(+firstEnt.join("") * +secondEnt.join(""));
    }

    ///Reset State
    if (id === "C") {
      setArg(null);
      setFirstEnt([]);
      setSecondEnt([]);
      setTotal("");
    }
  };

  //Format Number
  const activeInput = (number) => {
    const c = Number(number?.join(""))
      ?.toString()
      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    console.log(c);
    return c;
  };

  const totalNumber = (number) => {
    return Number(number)
      ?.toString()
      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className="overLay" onClick={() => setShowModal("")} />
      <section className="calcMain">
        {total ? (
          <h1>
            {String(total)?.includes(".")
              ? Number(total)?.toFixed(2)
              : totalNumber(total)}
          </h1>
        ) : (
          <div>
            {!arg ? (
              <h1>{firstEnt.length === 0 ? 0 : activeInput(firstEnt)} </h1>
            ) : (
              <h1>
                {secondEnt.length === 0
                  ? activeInput(firstEnt)
                  : activeInput(secondEnt)}
              </h1>
            )}
          </div>
        )}

        <div className="clac">
          <span onClick={() => handleArg("C")}>C</span>
          <span onClick={() => handleArg("%")}>%</span>
          <span onClick={() => handleArg("(2)")}>(2)</span>
          <span onClick={() => handleArg("/")}>/</span>
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
          <span className="zero" onClick={() => handleInput(0)}>
            0
          </span>
          <div className="equal">
            <span onClick={() => handleInput(".")}>.</span>
            <span className="dot" onClick={() => handleArg("=")}>
              =
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
