import { lazy, Suspense, useEffect, useState } from "react";
import "./DataTable.css";

const Loading = lazy(() => import("../Loading"));

export default function DataTable({ columns, fetchData, loadingMessage }) {
  const [data, setData] = useState();

  useEffect(() => {
     fetchData()
      .then((res) => console.log(res))
      .then((data) => setData(data));
  }, [])
  
  console.log(data);

  return (
    <div>
      <Suspense fallback={<Loading message={loadingMessage} />}>
      {columns.map((column) => {
        return <p>{column}</p>;
      })}
    </Suspense>
    </div>
  );
}