import styles from "./Button.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

export function Button() {
  return (
    <div className={styles.wrapper}>
      <button>
        Criar <IoIosAddCircleOutline style={{fontSize:'1rem'}}/>
      </button>
    </div>
  );
}
