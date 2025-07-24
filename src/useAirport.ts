import { useState, useEffect } from "react";
import { airportDetails } from "./data/airportData";

interface Airport {
  _id: string;
  country_name: string;
  country_code: string;
  airport_code: string;
  airport_name: string;
  country_loc: string;
  iata: string;
  format: string;
  location: string;
}

interface UseAirportState {
  isLoading: boolean;
  error: string | null;
  data: Airport[] | null;
}

export default function useAirport(name = ""): UseAirportState {
  const [state, setState] = useState<UseAirportState>({
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
        let result: Airport[] | null = null;

        if (lowerCaseName.length === 3) {
          const match = airportDetails.find(
            (item) => item.airport_code.toLowerCase() === lowerCaseName
          );
          result = match ? [match] : [];
        } else {
          result = airportDetails.filter(
            (item) =>
              item.country_name.toLowerCase().includes(lowerCaseName) ||
              item.country_loc.toLowerCase().includes(lowerCaseName)
          );
        }

        setState({ isLoading: false, error: null, data: result });
      } catch (error: any) {
        setState({ isLoading: false, error: error.message, data: null });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [name]);

  return state;
}
