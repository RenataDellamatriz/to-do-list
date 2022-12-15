import styles from './CheckboxInput.module.css'
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from 'react';

interface CheckboxInputProps {
  checked?: boolean;
  onChange?: () => void;
}
export function CheckboxInput({checked, onChange} : CheckboxInputProps) {
  

  return (
    <div>          
      <Checkbox.Root  className={styles.wrapper}>
        <Checkbox.Indicator>
          <CheckIcon className={styles.icon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}
