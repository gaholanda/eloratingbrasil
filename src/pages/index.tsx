import axios from "axios";
import nprogress from "nprogress";
import { useEffect, useContext, useState } from "react";

import { AppContext } from "../contexts/AppContext";
import Container from "../styles/components/container";
import TableData from "../components/TableData";

export default function Home() {
  const { teams } = useContext(AppContext);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    nprogress.start();
    axios.get("api/ratings").then(({ data }) => {
      setRatings(data);
      nprogress.done();
    });
  }, [teams]);

  return (
    <Container>
      <TableData data={ratings} />
    </Container>
  );
}
