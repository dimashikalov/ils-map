import Map from "./components/map/Map";
import TableComponent from "./components/table/TableComponent";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <TableComponent />
      <Map />
    </div>
  );
}

export default App;
