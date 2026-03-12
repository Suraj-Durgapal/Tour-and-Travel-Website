import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Culture from "./pages/Culture";
import Spiritual from "./pages/Spiritual";
import Contact from "./pages/Contact";
import TourPackages from "./pages/Tour/TourPackages";
// import TourDetails from "./pages/Tour/TourDetails";
import CharDham from "./pages/Tour/TourPages/CharDham";
import Hotel from "./pages/Hotel/Hotel";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tourpackages" element={<TourPackages/>}  />
          <Route path="/hotel" element={<Hotel/>}  />
          <Route path="chardham" element={<CharDham/>}  />
          <Route path="destination" element={<Destination />} />
          <Route path="culture" element={<Culture />} />
          <Route path="spiritual" element={<Spiritual />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
