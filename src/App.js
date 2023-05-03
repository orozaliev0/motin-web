import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import AboutUs from "./components/about-page/AboutUs";
import ClubPage from "./components/club-page/ClubPage";
import Frontend from "./pages/Frontend/Frontend";
import UiUx from "./pages/UI-UX/Ui-Ux";
import Backend from "./pages/Backend/Backend";
import MainFr from "./pages/Frontend/MainFr";

function App() {
  return (
    <div    className="App">

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
        <Route path='/it_club' element={<ClubPage/>}/>
        <Route path='/MainFr' element={<MainFr/>}/>
        <Route path='/UxUi' element={<UiUx/>}/>
        <Route path='/backend' element={<Backend/>}/>

      </Routes>

    </div>
  );
}

export default App;
