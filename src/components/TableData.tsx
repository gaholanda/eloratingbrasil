import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import Rating from "../interfaces/api/RatingInterface";
import Table from "../styles/components/table";

export default function DataTable({ data }: any) {
  const { teams } = useContext(AppContext);

  return (
    <Table>
      <header>
        <h3>Classificação até 17 de junho de 2021</h3>
      </header>
      <main>
        {data.map((rating: Rating, i: number) => {
          const team = teams?.filter((team) => team.id === rating.id)[0];
          const position = i + 1;
          return (
            <div key={`team-${i}`} className="team">
              <p className="team-position-name">
                <span className="team-position">{position}</span>
                <span className="team-name">{team?.name}</span>
                <span className="team-rating">{rating.Rn}</span>
              </p>
              <p className="team-info">
                <span>{rating.matches} partidas</span>
                <span>{rating.wins} vitórias</span>
                <span>{rating.draws} empates</span>
                <span>{rating.losses} derrotas</span>
              </p>
            </div>
          );
        })}
      </main>
    </Table>
  );
}
