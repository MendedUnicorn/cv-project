import GeneralInfoInput from "./components/GeneralInfoInput";
import SchoolInfoInput from "./components/SchoolInfoInput";
import PracticalInfoInput from "./components/PracticalInfoInput";
import MainView from "./components/MainView";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <div className="input">
        <GeneralInfoInput></GeneralInfoInput>
        <SchoolInfoInput></SchoolInfoInput>
        <PracticalInfoInput></PracticalInfoInput>
      </div>
      <div className="view">
        <MainView></MainView>
      </div>
    </div>
  );
}

export default App;
