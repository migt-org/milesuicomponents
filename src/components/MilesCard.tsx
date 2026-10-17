import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx } from "../utils/cx";

export type MilesCardProps = ComponentPropsWithoutRef<"div">;

const MilesCard = forwardRef<HTMLDivElement, MilesCardProps>(function MilesCard(
  { className, ...props },
  ref,
) {
  return <div ref={ref} {...props} className={cx("miles-card", className)} />;
});

export default MilesCard;
