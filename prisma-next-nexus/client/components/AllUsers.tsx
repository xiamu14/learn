import React, { useEffect } from "react";
import { useMeQuery, useLoginMutation } from "../../generated/graphql";

export default function AllUsers() {
  const [result, reexecuteQuery] = useMeQuery();
  const { data, fetching, error } = result;

  const refresh = () => {
    // Refetch the query and skip the cache
    reexecuteQuery({ requestPolicy: "network-only" });
  };

  const [loginRes, login] = useLoginMutation();

  useEffect(() => {
    login({ email: "1@qq.com", password: "test" }).then(() => {
      refresh();
    });
  }, []);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <p>{data?.me?.email}</p>
    </div>
  );
}
