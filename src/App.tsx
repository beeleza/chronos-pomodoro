import "./styles/theme.css";
import "./styles/global.css";
import styles from "./App.module.css"

import Heading from "./components/Heading";
import { TimerIcon } from "lucide-react";

function App() {
  return (
    <>
      <Heading>
        Chronos Pomodoro
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}

export default App;
