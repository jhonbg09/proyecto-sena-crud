import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Layouts() {
  return (
    <>
      <Header />

      <main className="flex flex-row h-full w-full">
        <div className="w-1/4 h-full bg-cyan-400">
          <Menu />
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
