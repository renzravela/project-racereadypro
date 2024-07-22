import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/custom.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Driver from "./pages/Drivers";
import Cars from "./pages/Cars&Livery";
import Tracks from "./pages/Tracks";
import About from "./pages/About";
import Header from "./components/Headers";
// import Footer from "./components/Footer";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <p>Renz is currently working on this project. Please come back soon.</p>,
  icon: 'error',
  allowOutsideClick: false,
  didOpen: () => {
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Sorry..</p>)
})

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="project-racereadypro/" element={<Home />} />
        <Route path="project-racereadypro/drivers" element={<Driver />} />
        <Route path="project-racereadypro/cars" element={<Cars />} />
        <Route path="project-racereadypro/tracks" element={<Tracks />} />
        <Route path="project-racereadypro/about" element={<About />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
