import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const Home_Layout = () => {
  return (
    <div className="font-serif">
      <Header />
      <div className="pt-20 bg-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home_Layout;
