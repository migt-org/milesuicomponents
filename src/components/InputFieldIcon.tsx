import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx } from "../utils/cx";

export type InputFieldIconProps = ComponentPropsWithoutRef<"i">;

const InputFieldIcon = forwardRef<HTMLElement, InputFieldIconProps>(
  function InputFieldIcon({ className, ...props }, ref) {
    return (
      <i
        ref={ref}
        aria-hidden="true"
        {...props}
        className={cx("miles-input-field-icon", className)}
      />
    );
  },
);

export default InputFieldIcon;
