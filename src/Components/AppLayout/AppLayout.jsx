import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="container mx-auto mt-12 flex max-w-7xl flex-grow bg-yellow-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
