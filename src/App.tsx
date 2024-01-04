import { Route, Routes } from "react-router";
import { CanvasPage } from "./pages/CanvasPage";

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<CanvasPage />} />
    </Routes>
    </div>
  );
}

export default App;
