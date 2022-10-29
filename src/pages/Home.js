import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery(["data"], () =>
    axios.get("https://reqres.in/api1/users?page=1")
  );

  console.log("data", data && data);

  if (isError) return <h1>{error.message}</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {data?.data.data.map((item) => (
        <p>{item.email}</p>
      ))}
    </>
  );
};

export default Home;
