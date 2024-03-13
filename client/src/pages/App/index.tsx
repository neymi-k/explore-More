import './App.css'
import NavBar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import AuthPage from "../AuthPage/AuthPage";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <AuthPage />
      <Footer />
    </>
  );
}

export default App;
