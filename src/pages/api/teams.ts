import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { TeamsData } from "../../../database/config";

import Team from "../../interfaces/api/TeamInterface";

type Teams = {
  data: Array<Team>;
};

export default (req: NextApiRequest, res: NextApiResponse<Teams>) => {
  const { id } = req.query;
  const teams = CSVtoJSON.getJsonFromCsv(TeamsData);

  if (id) {
    const team = teams.filter((item: Team) => item.id === id);
    return res.status(200).json(team);
  }

  return res.status(200).json(teams);
};
