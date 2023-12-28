import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBoot from "./pages/AddBoot";
import AllBoots from "./pages/AllBoots";
import BootDetails from "./pages/BootDetails";
import AddReservierung from "./pages/AddReservierung";
import AllReservierung from "./pages/AllReservierungs";
import ReservierungsDetails from "./pages/ReservierungsDetails";
import { useState } from "react";
import { BootsContext, LoginContext } from "./context/Context";
import FetchBoots from "./components/FetchBoots";
import Login from "./pages/Login";

function App() {
  const [boots, setBoots] = useState([]);
  const [login, setLogin] = useState(false);
  return (
    <>
      <BootsContext.Provider value={{ boots, setBoots }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <BrowserRouter>
            <FetchBoots />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addboot" element={<AddBoot />} />
              <Route path="/allboots" element={<AllBoots />} />
              <Route path="/bootdetails/:id" element={<BootDetails />} />
              <Route path="/addreservierung" element={<AddReservierung />} />
              <Route path="/allreservierung" element={<AllReservierung />} />
              <Route
                path="/reservierungsdetails/:id"
                element={<ReservierungsDetails />}
              />
            </Routes>
          </BrowserRouter>
        </LoginContext.Provider>
      </BootsContext.Provider>
    </>
  );
}

export default App;
