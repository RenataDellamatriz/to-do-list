import styles from './CheckboxInput.module.css'
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export function CheckboxInput() {
  return (
    <div>
      <Checkbox.Root className={styles.wrapper}>
        <Checkbox.Indicator>
          <CheckIcon className={styles.icon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}
