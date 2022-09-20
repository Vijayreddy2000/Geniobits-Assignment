import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import TasksBar from "./components/TasksBar";
import List from "./components/List";

import "./App.css";

const App = () => (
  <div className="app-background">
    <Navbar />
    <div className="app-background2">
      <SideNavbar />
      <div>
        <TasksBar />
        <List />
      </div>
    </div>
  </div>
);

export default App;
