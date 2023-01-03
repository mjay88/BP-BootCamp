import "../App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { AuthProvider } from "../Contexts/AuthContext/index";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <SideBar />
    </AuthProvider>
  );
};

export default App;
