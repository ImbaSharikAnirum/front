import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Team from "./pages/Team";
import Finance from "./pages/Finance";
import Booking from "./pages/Booking";
import Course from "./pages/Course";
import CreateCourse from "./pages/CreateCourse";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Conditions from "./components/footer/Conditions";
import Requisites from "./components/footer/Requisites";
import Confidentiality from "./components/footer/Confidentiality";
import FooterMenu from "./components/FooterMenu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/course" element={<Course />} />
          <Route path="/" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/create/course" element={<CreateCourse />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/requisites" element={<Requisites />} />
          <Route path="/confidentiality" element={<Confidentiality />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
      <FooterMenu />
    </div>
  );
}

export default App;
