import './index.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

import toast, { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Toaster />
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup toast={toast} />}/>
          <Route path="/signin" element={<Signin toast={toast}/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/send" element={<SendMoney toast={toast}/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
