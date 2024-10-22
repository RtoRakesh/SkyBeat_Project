import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlightDetailView from "./Components/FlightDetailView";
import FlightTable from "./Components/FlightTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlightTable />} />
      <Route path="/:flightId" element={<FlightDetailView />} />
    </Routes>
  );
}

export default App;
