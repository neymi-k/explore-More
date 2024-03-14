import "./App.css";
import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
/* import AuthPage from "../AuthPage/AuthPage"; */
import { Outlet } from "react-router";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
