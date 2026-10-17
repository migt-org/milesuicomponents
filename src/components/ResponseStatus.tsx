import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx } from "../utils/cx";

export type ResponseStatusProps = ComponentPropsWithoutRef<"div">;

const ResponseStatus = forwardRef<HTMLDivElement, ResponseStatusProps>(
  function ResponseStatus({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        role="status"
        {...props}
        className={cx("miles-response-status", className)}
      />
    );
  },
);

export default ResponseStatus;
