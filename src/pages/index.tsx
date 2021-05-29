import axios from "axios";
import nprogress from "nprogress";
import { useEffect, useContext, useState } from "react";
import { AppContext } from "../contexts/app";

import Container from "../styles/components/container";

import { Rating } from "../interfaces/api/rating";

export default function Home() {
  const { teams } = useContext(AppContext);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    nprogress.start();
    axios.get("api/ratings").then(({ data }) => setRatings(data));
  }, [teams]);

  return (
    <Container>
      <h3>Classificação até 29 de maio de 2021</h3>
      <ol>
        {teams &&
          teams?.length > 0 &&
          ratings.length > 0 &&
          ratings.map((rating: Rating) => {
            const team = teams?.filter((team) => team.id === rating.id)[0];
            return <li key={team?.id}>{team?.name}</li>;
          })}
      </ol>
    </Container>
  );
}
