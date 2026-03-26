import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';

function App() {

  return (
    <>
      <DataTable columns={['nom']} fetchData={() => {}} />
    </>
  );
}

export default App
