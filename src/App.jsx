import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pets from "./pages/Pets/Pets";
import NavBar from "./components/Users/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Users/Footer/Footer";
import About from "./pages/About/About";
import PetDetail from "./components/Users/PetDetail/PetDetail";
import PetCreate from "./components/Users/PetCreate/PetCreate";
import LostForm from "./components/Users/LostForm/LostForm";
import Donation from "./pages/Donation/Donation";

//  MODO OSCURO //
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import { useDarkMode } from "./DarkLightMode/DarkMode";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? "light" : "dark";

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adopt" element={<Pets />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/petdetail/:id" element={<PetDetail />}></Route>
            <Route path="/petcreate" element={<PetCreate />}></Route>
            <Route path="/lostform" element={<LostForm />}></Route>
            <Route path="/donation" element={<Donation />}></Route>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
