import styles from './CheckboxInput.module.css'
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxInputProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;  
}
export function CheckboxInput({checked, onChange} : CheckboxInputProps) {
  
 

  return (
    <div>          
      <Checkbox.Root checked={checked} onCheckedChange={onChange}  className={styles.wrapper}>
        <Checkbox.Indicator>
          <CheckIcon className={styles.icon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}
