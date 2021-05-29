import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { MatchesFolder } from "../../../database/config";

import { Match } from "../../interfaces/api/match";

type Matches = {
  data: Array<Match>;
};

export default (req: NextApiRequest, res: NextApiResponse<Matches>) => {
  const { year } = req.query;
  const matches = CSVtoJSON.getJsonFromCsv(`${MatchesFolder}/${year}.csv`);

  return res.status(200).json({ data: matches });
};
