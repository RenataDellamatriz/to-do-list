import styles from "./Button.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

interface ButtonProps {
  type: 'submit';
  disabled: boolean;
}

export function Button({type, disabled}:ButtonProps) {
  
  return (
    <div className={styles.wrapper}>
      <button type={type} disabled={disabled}>
        Criar <IoIosAddCircleOutline style={{fontSize:'1rem'}}/>
      </button>
    </div>
  );
}
