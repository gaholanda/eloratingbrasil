import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import AppContextData from "../interfaces/contexts/AppContextData";
import AppProviderProps from "../interfaces/contexts/AppProviderProps";

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [teams, setTeams] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios.get("api/teams").then(({ data }) => setTeams(data));
    axios.get("api/tournaments").then(({ data }) => setTournaments(data));
  }, []);

  return (
    <AppContext.Provider
      value={{
        teams,
        tournaments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
