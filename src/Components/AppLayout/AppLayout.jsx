import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="container mx-auto mt-12 flex max-w-7xl flex-grow bg-yellow-0">
        <Outlet />
      </main>
      <footer className="bg-gray-800 py-4 text-center text-white">
        &copy; 2023 USEPOPCORN. All rights reserved.
      </footer>
    </div>
  );
}

export default AppLayout;
