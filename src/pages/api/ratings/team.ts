import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { TeamsRatingsFolder } from "../../../../database/config";

interface TeamRating {
  date: string;
  result: string;
  team_id: string;
  team_Ro: string;
  team_goals: string;
  opp_team_goals: string;
  opp_team_id: string;
  opp_team_Ro: string;
  tournament_id: string;
  team_Rn: string;
}

type TeamRatings = {
  data: Array<TeamRating>;
};

export default (req: NextApiRequest, res: NextApiResponse<TeamRatings>) => {
  const { id } = req.query;
  const teamRatings = CSVtoJSON.getJsonFromCsv(
    `${TeamsRatingsFolder}/${id}.csv`
  );

  return res.status(200).json({ data: teamRatings });
};
