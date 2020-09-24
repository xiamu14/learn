/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useMeQuery, useLoginMutation } from "../api/graphql_generated";

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
      console.log("检查看看", loginRes);
    });
  }, []);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div
      css={css`
        background: lightskyblue;
        width: 10rem;
      `}
    >
      <p>{data?.me?.email}</p>
    </div>
  );
}
