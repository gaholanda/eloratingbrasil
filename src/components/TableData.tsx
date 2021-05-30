import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import Rating from "../interfaces/api/RatingInterface";
import Table from "../styles/components/table";
import TeamLogo from "./teamlogo";

export default function DataTable({ data }: any) {
  const { teams } = useContext(AppContext);

  return (
    <Table>
      <header>
        <h3>Pos.</h3>
        <h3>Time</h3>
        <h3>Rating</h3>
        <h3>Partidas</h3>
        <h3>V</h3>
        <h3>E</h3>
        <h3>D</h3>
      </header>
      <main>
        {data.map((rating: Rating, i: number) => {
          const team = teams?.filter((team) => team.id === rating.id)[0];
          return <div></div>;
        })}
      </main>
    </Table>
  );
}
