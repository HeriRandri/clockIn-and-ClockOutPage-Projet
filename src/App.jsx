import logo from "./assets/LOGO.png";
import { LoginPage } from "./Component/LoginPage";

function App() {
  return (
    <div className=" container-fluid row ">
      <div className="col-2 bg-dark text-white">
        <img src={logo} alt="" className="img-fluid border rounded mt-3" />
      </div>
      <div className="col-8 ">
        <LoginPage />
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default App;
