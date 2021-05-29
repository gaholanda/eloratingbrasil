import { useEffect, useContext } from "react";
import { AppContext } from "../contexts/app";

import Container from "../styles/components/container";

export default function Home() {
  const { teams, tournaments } = useContext(AppContext);

  useEffect(() => {
    console.log(teams);
  }, [teams]);

  useEffect(() => {
    console.log(tournaments);
  }, [tournaments]);

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}
