import Home from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App;
