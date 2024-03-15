import "./App.css";
import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
