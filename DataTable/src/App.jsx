import './App.css'
import DataTable from './Component/DataTable/DataTable';

function App() {
  const fetchUser = async () => {
    fetch('https://dummyjson.com/users')
  }

  return (
    <>
        <DataTable
          columns={["nom"]}
        fetchData={() => { fetchUser }}
          loadingMessage={"Chargement..."}
        />
    </>
  );
}

export default App
