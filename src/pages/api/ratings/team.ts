import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { TeamsRatingsFolder } from "../../../../database/config";

import { TeamRating } from "../../../interfaces/api/teamRating";

type TeamRatings = {
  data: Array<TeamRating>;
};

export default (req: NextApiRequest, res: NextApiResponse<TeamRatings>) => {
  const { id } = req.query;
  const teamRatings = CSVtoJSON.getJsonFromCsv(
    `${TeamsRatingsFolder}/${id}.csv`
  );

  return res.status(200).json(teamRatings);
};
