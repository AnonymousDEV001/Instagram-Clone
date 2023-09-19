import "./App.css";
import AppState from "./context/AppState";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OtherPages from "./components/OtherPages";

function App() {
  return (
    <>
      <AppState>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={<Login/>}
              />
                            <Route
                exact
                path="*"
                element={<OtherPages/>}
              />
            </Routes>
          </BrowserRouter>
      </AppState>
    </>
  );
}

export default App;
