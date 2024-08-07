import { NavLink, useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function Menu() {
  const { pathname } = useLocation();
  console.log(pathname);

  const isHome = useMemo(() => pathname === "/inventario", [pathname]);
  console.log(isHome);
  return (
    <div>
      <nav>
        <div className="flex flex-col w-full">
          <div className="mt-5">
            <NavLink to="/inventario"><p className="text-center">Productos</p></NavLink>
          </div>
          <div className="mt-5">
            <NavLink to="/nuevo"><p className="text-center">Agregar Producto</p></NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
