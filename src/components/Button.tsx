import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx } from "../utils/cx";

export type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, ...props },
  ref,
) {
  return (
    <button ref={ref} {...props} className={cx("miles-button", className)} />
  );
});

export default Button;
