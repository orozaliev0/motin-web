import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import AboutPage from "./components/about-page/AboutPage";
import ClubPage from "./components/club-page/ClubPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about_us' element={<AboutPage/>}/>
        <Route path='/it_club' element={<ClubPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
