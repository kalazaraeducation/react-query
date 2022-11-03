import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Contact = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["data"],
    () => axios.get("https://reqres.in/api/users?page=1"),
    {
      // cacheTime: 10000,
      // staleTime: 10000,
      // retry: false,
      // retryDelay: 5000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    }
  );

  console.log("data", data && data);

  if (isError) return <h1>{error.message}</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {data?.data.data.map((item, i) => (
        <p key={i}>{item.email}</p>
      ))}
    </>
  );
};

export default Contact;
