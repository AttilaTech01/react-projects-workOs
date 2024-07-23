import './App.css'
import { useState } from "react";
import DesksList from "./components/DesksList";
import FoldersList from "./components/FoldersList";
import { Desk } from './store/store';

function App() {
  const [currentDesk, setCurrentDesk] = useState<Desk>();

  const handleDeskChange = (desk: Desk) => {
    setCurrentDesk(desk);
  };

  return (
    <div className="main-container">
      <DesksList deskChange={handleDeskChange} />
      {currentDesk ? <FoldersList desk={currentDesk} /> : <div>Default Dashboard</div>}
    </div>
  );
}

export default App;
