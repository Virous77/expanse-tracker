import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [showModal, setShowModal] = useState("");

  //Notification creating
  const notificationSet = (input) => {
    setNotification({
      message: input.message,
      status: input.status,
    });
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        notification,
        notificationSet,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
