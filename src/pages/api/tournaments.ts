import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { TournamentsData } from "../../../database/config";

import Tournament from "../../interfaces/api/TournamentInterface";

type Tournaments = {
  data: Array<Tournament>;
};

const RootDatabaseFolder = "database";

export default (req: NextApiRequest, res: NextApiResponse<Tournaments>) => {
  const { id } = req.query;
  const tournaments = CSVtoJSON.getJsonFromCsv(TournamentsData);

  if (id) {
    const tournament = tournaments.filter((item: Tournament) => item.id === id);
    return res.status(200).json(tournament);
  }

  return res.status(200).json(tournaments);
};
