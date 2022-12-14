import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";
import { TaskHeader } from "./components/TaskHeader";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  return (
    <div className="App">
      <Header />
      <form className={styles.formWrapper}>
        <Input />
        <Button />
      </form>

     <TaskHeader/>
     <TaskBoard/>

      
    </div>
  );
}

export default App;
