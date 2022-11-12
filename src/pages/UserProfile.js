import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();

  console.log("params", params);

  const { isLoading, data } = useQuery(
    ["userData"],
    () => axios.get(`https://reqres.in/api/users/${params.userId}`),
    {
      select: (res) => res.data,
    }
  );

  console.log("user data", data && data);

  return <div>UserProfile</div>;
};

export default UserProfile;
