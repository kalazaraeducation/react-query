import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UserHookData = () => {
  return useQuery(
    ["data"],
    () => axios.get("https://reqres.in/api/users?page=1"),
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
      // onSuccess: () => {
      //   console.log("on sucess executed");
      // },
      // onError: () => {
      //   console.log("on error executed");
      // },
      select: (res) => res.data,
    }
  );
};
