import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const MutationQueries = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const { mutate, isLoading } = useMutation(
    (data) => axios.post("https://reqres.in/api/users", data),
    {
      onSuccess: (response) => {
        console.log("response", response);
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name: name, job: job });
  };

  return (
    <div>
      <h1 className="text-center text-2xl m-4">Mutation Queries</h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-x-2 mt-10"
      >
        <div className="flex justify-between items-center gap-x-2">
          <label htmlFor="name" className="text-3xl">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black rounded py-1 px-3 text-3xl"
          />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <label htmlFor="job" className="text-3xl">
            Job
          </label>
          <input
            type="text"
            name="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="border border-black rounded py-1 px-3 text-3xl"
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="py-1 px-3 bg-yellow-500 rounded text-3xl"
        >
          {isLoading ? "executing" : "submit"}
        </button>
      </form>
    </div>
  );
};

export default MutationQueries;
