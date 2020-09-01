import React, { useEffect } from "react";
import {
  useAllUsersQuery,
  useCreateOneUserMutation,
} from "../generated/graphql";

export default function AllUsers() {
  const [result] = useAllUsersQuery();
  const { data, fetching, error } = result;

  const [createOneUserResult, createOneUser] = useCreateOneUserMutation();

  useEffect(() => {
    const timer = setTimeout(() => {
      createOneUser({ data: { name: "Jane" } }).then(() => {
        console.log("检查看看", createOneUserResult);
      });
      clearTimeout(timer);
    }, 1000);
  }, []);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <p>There are {data?.allUsers?.length} user(s) in the database:</p>
      <ul>
        {data?.allUsers?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
