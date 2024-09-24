// import libraries and components
import { createContext, useState, useEffect, useContext } from "react";

const MyFlightsContext = createContext();

// localStorage my flights get item, ensure it's parsed correctly
const defaultFlights = JSON.parse(localStorage.getItem("myFlights"))
  ? JSON.parse(localStorage.getItem("myFlights"))
  : [];

export const MyFlightsContextProvider = ({ children }) => {
  // states
  const [myFlights, setMyFlights] = useState(defaultFlights);

  console.log("defaultFlights", defaultFlights);

  //   localStorage set item when myFlights changes
  useEffect(() => {
    localStorage.setItem("myFlights", JSON.stringify(myFlights));
  }, [myFlights]);

  //   add flight reservation function
  const addMyFlight = (flight) => {
    setMyFlights((prev) => [...prev, flight]);
  };

  const values = {
    myFlights,
    setMyFlights,
    addMyFlight,
  };

  return (
    <MyFlightsContext.Provider value={values}>
      {children}
    </MyFlightsContext.Provider>
  );
};

export const useMyFlights = () => {
  const context = useContext(MyFlightsContext);

  if (context === undefined) {
    throw new Error(
      "useMyFlights must be used within a MyFlightsContextProvider"
    );
  }

  return context;
};
