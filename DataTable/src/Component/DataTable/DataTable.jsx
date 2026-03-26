import { lazy, Suspense, useEffect, useState } from "react";
import "./DataTable.css";

const Loading = lazy(() => import("../Loading"));

export default function DataTable({ columns, fetchData, loadingMessage }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch("https://dummyjson.com/users")
        .then((response) =>
        response.json()
      ).then(data => setData(data))
    };

    fetchUsers()
  }, [])

  return (
    <div>
      <Suspense fallback={<Loading message={loadingMessage} />}>
        {columns.map((column) => (
          <p key={column} className="columns">
            {column}
          </p>
        ))}
      </Suspense>
    </div>
  );
}