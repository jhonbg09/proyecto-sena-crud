import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewProduct from "./pages/NewProduct";
import Layouts from "./layouts/Layouts";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts/>}>
          <Route path="/inventario" element={<App />} index />
          <Route path="/nuevo" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
