import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
