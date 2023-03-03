import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Women from "./pages/Women";
import Men from "./pages/Men";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
      </Routes>
    </div>
  );
}

export default App;
