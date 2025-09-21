import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/teacher" element={<Teacher />} />
    </Routes>
  );
}

export default App;