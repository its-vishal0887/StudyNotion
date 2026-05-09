import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import NavBar from "./components/NavBar";
import NotFound from "./Pages/NotFound";
import { Toaster } from "react-hot-toast";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-richblack-900 h-screen w-screen flex flex-col">
      <Toaster />


      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="flex-1">

        <Routes>
          <Route path="/" element = {<SignUp/>}/>
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>

        </Routes>
      </div>
      
    </div>

  );
};

export default App;
