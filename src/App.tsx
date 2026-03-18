import "./styles/theme.css";
import "./styles/global.css";
import styles from "./App.module.css"

import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Heading 
          primaryTitle="Titulo passado por props" 
          secondTitle="Eu tbm" 
        />
        <Heading 
          primaryTitle="Segundo titulo aqui" 
          secondTitle="Eu tbm sou outro titulo" 
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam
        ducimus omnis explicabo quasi voluptatibus ullam inventore quam tenetur.
        Assumenda consequatur natus eveniet aut necessitatibus ducimus, maiores
        harum! Ipsum, natus!
      </p>
    </>
  );
}

export default App;
