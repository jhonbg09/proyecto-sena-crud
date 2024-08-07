import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Layouts() {
  return (
    <>
      <Header />

      <main className="flex flex-row">
        <div className="w-1/2">
          <Menu />
        </div>
        <div className="w-1/2">
          <Outlet />
        </div>
      </main>
    </>
  );
}
