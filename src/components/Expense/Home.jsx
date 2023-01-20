import React from "react";
import "./Home.css";
import home from "../../assets/home.svg";
import { useAppContext } from "../../store/appContext";

const Home = () => {
  const { setShowModal } = useAppContext();

  return (
    <section className="home">
      <h1>Track Daily</h1>
      <h2>Goodbye, money stress. Hello, Track Daily.</h2>
      <img src={home} alt="hero" />
      <h3>Take the guesswork out of managing your money.</h3>
      <p>
        Track daily makes it easy to spend and track your money. Budget smarter
        by knowing how much you spending daily. You have all the good features
        add notes & inbuilt graph to understand better.
      </p>

      <button onClick={() => setShowModal("signup")}>Sign Up</button>
    </section>
  );
};

export default Home;
