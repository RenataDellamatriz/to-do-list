import { CheckboxInput } from "./CheckboxInput";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.wrapper}>
        <CheckboxInput/>        
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
    </div>
  );
}
