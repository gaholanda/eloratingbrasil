import type { NextApiRequest, NextApiResponse } from "next";
import CSVtoJSON from "convert-csv-to-json";
import { RatingFolder, LastRatingData } from "../../../../database/config";

import { Rating } from "../../../interfaces/api/rating";

type Ratings = {
  data: Array<Rating>;
};

export default (req: NextApiRequest, res: NextApiResponse<Ratings>) => {
  const ratings = CSVtoJSON.getJsonFromCsv(`${RatingFolder}/${LastRatingData}`);
  return res.status(200).json(ratings);
};
