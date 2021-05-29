import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { RankingFolder, LastRankingData } from "../../../../database/config";

interface Ranking {
  id: string;
  Ro: string;
  Rn: string;
  matches: string;
  wins: string;
  draws: string;
  losses: string;
}

type Rankings = {
  data: Array<Ranking>;
};

export default (req: NextApiRequest, res: NextApiResponse<Rankings>) => {
  const rankings = CSVtoJSON.getJsonFromCsv(
    `${RankingFolder}/${LastRankingData}`
  );
  return res.status(200).json({ data: rankings });
};
