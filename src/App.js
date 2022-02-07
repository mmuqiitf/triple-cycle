import "./App.css";
import WOW from "wowjs";
import HeroHome from "./components/HeroHome";
import Navbar from "./components/Navbar";
import Informasi from "./components/Informasi";
import RuangLingkup from "./components/RuangLingkup";
import DataPokok from "./components/DataPokok";
import StrukturOrganisasi from "./components/StrukturOrganisasi";
import Pengalaman from "./components/Pengalaman";

function App() {
  new WOW.WOW({
    live: false,
  }).init();

  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroHome></HeroHome>
      <DataPokok></DataPokok>
      <Informasi></Informasi>
      <RuangLingkup></RuangLingkup>
      <StrukturOrganisasi></StrukturOrganisasi>
      <Pengalaman></Pengalaman>
    </div>
  );
}

export default App;
