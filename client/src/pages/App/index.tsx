import './App.css'
import NavBar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import AuthPage from "../AuthPage/AuthPage";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Footer />
      <AuthPage />
    </>
  );
}

export default App;
