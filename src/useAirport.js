import { useState, useEffect } from "react";
import { airportDetails } from "./data/airportData";

export default function useAirport(name = "") {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (name.trim().length < 3) {
      if (name.trim().length === 0) {
        setState({ isLoading: false, error: null, data: null });
      } else {
        setState({ isLoading: true, error: null, data: null });
      }
      return;
    }

    setState({ isLoading: true, error: null, data: null });

    const timeout = setTimeout(() => {
      try {
        const lowerCaseName = name.toLowerCase().trim();
        let result = null;

        if (lowerCaseName.length === 3) {
          result = airportDetails.find(
            (item) => item.airport_code.toLowerCase() === lowerCaseName
          );
          setState({
            isLoading: false,
            error: null,
            data: result ? [result] : [],
          });
        } else {
          result = airportDetails.filter(
            (item) =>
              item.country_name.toLowerCase().includes(lowerCaseName) ||
              item.country_loc.toLowerCase().includes(lowerCaseName)
          );
          setState({ isLoading: false, error: null, data: result });
        }
      } catch (error) {
        setState({ isLoading: false, error: error.message, data: null });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [name]);

  return state;
}
