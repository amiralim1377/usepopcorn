import { FaDove } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function AppLayout() {
  return (
    <div className="bg-yellow-0 min-h-screen mx-auto   ">
      <Header />
      <main className="container max-w-7xl mx-auto bg-red-300">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
