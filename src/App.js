import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from './pages/Resume';
import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import ProtectedRoute from "./pages/ProtectedRoute";
// import SharedProductLayout from "./pages/SharedProductLayout";
function App() {
  // const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      {/* <nav>Nav</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          
          {/* <Route path='*' element={<Error />} /> */}
        </Route>
      </Routes>
      {/* <footer>footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
