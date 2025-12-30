import { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { PreLoader } from "./components/PreLoader/PreLoader";
import SmoothScroll from "./components/SmoothScrolling/SmoothScroll";

function AppWrapper() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
  }, [location.pathname]);

  return (
    <>
      {showLoader && <PreLoader onFinish={() => setShowLoader(false)} />}
      <AppRouter />
      <SmoothScroll />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
