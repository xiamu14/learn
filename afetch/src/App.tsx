import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import { testApi } from "./api/test";

export default function App() {
  return (
    <div>
      {/* <Pokemon queryKey="pokemon1" /> */}
      <Pokemon queryKey="pokemon1" />
      <ReactQueryDevtools />
    </div>
  );
}

function Pokemon({ queryKey }: any) {
  const [t, set] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      set((t1) => t1 + 1);
    }, 3000);
  }, []);
  const queryInfo = useQuery(queryKey, testApi.fetch, {
    staleTime: Infinity,
  });
  console.log("奇怪啊", queryInfo);
  return queryInfo.isLoading ? (
    "Loading..."
  ) : queryInfo.isError ? (
    (queryInfo.error as any).message
  ) : (
    <div>
      {queryInfo.data.results.map((result: any) => {
        return <div key={result.name}>{result.name}</div>;
      })}
      <br />
      <i>{t}</i>
      {queryInfo.isFetching ? "Updating..." : null}
    </div>
  );
}
