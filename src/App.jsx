import logo from "./assets/LOGO.png";
import { LoginPage } from "./Component/LoginPage";

function App() {
  return (
    <div className=" container-fluid row ">
      <div className="col-3 bg-success text-white">
        <img
          src={logo}
          alt=""
          className="img-fluid border rounded rounded-cirlce mt-3"
        />
      </div>
      <div className="col-6 ">
        <LoginPage />
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default App;
