import React from "react";
import "./Notification.css";
import { useAppContext } from "../../store/appContext";

const Notification = () => {
  const { notification } = useAppContext();

  return (
    <span
      className={`notification ${
        notification?.status === "error" ? "error" : "success"
      }`}
    >
      {notification?.message}
    </span>
  );
};

export default Notification;
