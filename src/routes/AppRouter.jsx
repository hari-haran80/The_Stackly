import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Contact } from "../pages/Contact/Contact";
import Home_Layout from "../layout/HomeLayout/Home_Layout";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

const AppRouter = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home_Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </>
);

export default AppRouter;
