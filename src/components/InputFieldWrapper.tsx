import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx } from "../utils/cx";

export type InputFieldWrapperProps = ComponentPropsWithoutRef<"div">;

const InputFieldWrapper = forwardRef<HTMLDivElement, InputFieldWrapperProps>(
  function InputFieldWrapper({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={cx("miles-input-field", className)}
      />
    );
  },
);

export default InputFieldWrapper;
