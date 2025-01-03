import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import Landing from "@/pages/Landing";
import Login from "@/pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
