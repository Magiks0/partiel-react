import './App.css'
import DataTable from './Component/DataTable/DataTable';

function App() {
  const fetchUsers = async () => {
    await fetch('https://dummyjson.com/users')
    .then(response => response.json());
  }
    
  return (
    <>
        <DataTable
          columns={["id","name"]}
          fetchData={fetchUsers}
          loadingMessage={"Chargement..."}
        />
    </>
  );
}

export default App
