import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Contact = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["data"],
    () => axios.get("https://reqres.in/api1/users?page=1"),
    {
      // cacheTime: 10000,
      // staleTime: 10000,
      // retry: false,
      // retryDelay: 5000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 5000,
      // refetchIntervalInBackground: true,
      // enabled: false,
      onSuccess: () => {
        console.log("on sucess executed");
      },
      onError: () => {
        console.log("on error executed");
      },
    }
  );

  console.log("data", data && data);

  if (isError) return <h1>{error.message}</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <button onClick={refetch}>Fetch</button>
      {data?.data.data.map((item, i) => (
        <p key={i}>{item.email}</p>
      ))}
    </>
  );
};

export default Contact;
