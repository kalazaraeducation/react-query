import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { data } = useQuery(["data"], () =>
    axios.get("https://reqres.in/api/users?page=1")
  );

  console.log("data", data && data);

  return <div>Kalazara Education</div>;
};

export default Home;
