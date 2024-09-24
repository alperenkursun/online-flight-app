// import libraries and components
import { createContext, useState, useEffect, useContext } from "react";

const FlightsContext = createContext();

export const FlightsContextProvider = ({ children }) => {
  // states
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get flights fetch api
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              app_id: "c5e84d73",
              app_key: "80837e177e9d8c374fa1d625d9d7a1fa",
              ResourceVersion: "v4",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Flight Data:", data);
        setFlights(data.flights || []);
      } catch (error) {
        console.error("Error fetching flight data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const values = {
    flights,
    loading,
    error,
    setFlights,
  };
  return (
    <FlightsContext.Provider value={values}>{children}</FlightsContext.Provider>
  );
};

export const useFlights = () => {
  const context = useContext(FlightsContext);

  if (context === undefined) {
    throw new Error("useFlights must be used within a FlightsProvider");
  }

  return context;
};
