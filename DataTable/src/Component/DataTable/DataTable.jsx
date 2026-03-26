import "./DataTable.css";

export default function DataTable({ columns, fetchData }) {
  return (
    <div>
      {columns.length > 0 &&
        columns.map((column) => {
          <p>{column}</p>
        })
      }
    </div>
  );
}