import { ReactNode } from "react";

import { Team } from "../api/team";
import { Tournament } from "../api/tournament";

export interface AppContextData {
  teams?: Array<Team>;
  tournaments?: Array<Tournament>;
}

export interface AppProviderProps {
  children: ReactNode;
}
