import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBoot from "./pages/AddBoot";
import AllBoots from "./pages/AllBoots";
import BootDetails from "./pages/BootDetails";
import AddReservierung from "./pages/AddReservierung";
import AllReservierung from "./pages/AllReservierungs";
import ReservierungsDetails from "./pages/ReservierungsDetails";
import { useState } from "react";
import { BootsContext, LoginContext, ReservContext } from "./context/Context";
import FetchData from "./components/FetchData";
import Login from "./pages/Login";

function App() {
  const [boots, setBoots] = useState([]);
  const [login, setLogin] = useState(false);
  const [reserv, setReserv] = useState([]);
  return (
    <>
      <BootsContext.Provider value={{ boots, setBoots }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <ReservContext.Provider value={{ reserv, setReserv }}>
            <BrowserRouter>
              <FetchData />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addboot" element={<AddBoot />} />
                <Route path="/allboots" element={<AllBoots />} />
                <Route path="/bootdetails/:id" element={<BootDetails />} />
                <Route
                  path="/reservdetails/:id"
                  element={<ReservierungsDetails />}
                />
                <Route path="/addreservierung" element={<AddReservierung />} />
                <Route path="/allreservierung" element={<AllReservierung />} />
                <Route
                  path="/reservierungsdetails/:id"
                  element={<ReservierungsDetails />}
                />
              </Routes>
            </BrowserRouter>
          </ReservContext.Provider>
        </LoginContext.Provider>
      </BootsContext.Provider>
    </>
  );
}

export default App;
