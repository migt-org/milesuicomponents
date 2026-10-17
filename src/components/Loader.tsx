import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";
import { cx } from "../utils/cx";

export type LoaderProps = ComponentPropsWithoutRef<"span"> & {
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

const Loader = forwardRef<HTMLSpanElement, LoaderProps>(function Loader(
  { className, wrapperClassName, wrapperStyle, ...props },
  ref,
) {
  return (
    <div
      style={wrapperStyle}
      className={cx("miles-loader-wrapper", wrapperClassName)}
    >
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        {...props}
        className={cx("miles-loader", className)}
      />
    </div>
  );
});

export default Loader;
