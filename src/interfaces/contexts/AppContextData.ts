import Team from "../api/TeamInterface";
import Tournament from "../api/TournamentInterface";

export default interface AppContextData {
  teams?: Array<Team>;
  tournaments?: Array<Tournament>;
}
