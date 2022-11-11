// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { UserHookData } from "../pages/hooks/query-hooks";

const Contact = () => {
  const { data, isLoading, isError, error, refetch } = UserHookData();

  console.log("data", data && data);

  if (isError) return <h1>{error.message}</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <button onClick={refetch}>Fetch</button>
      {data?.data.map((item, i) => (
        <p key={i}>{item.email}</p>
      ))}
    </>
  );
};

export default Contact;
