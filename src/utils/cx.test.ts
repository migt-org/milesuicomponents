import { cx } from "./cx";

describe("cx", () => {
  it("joins truthy class names with single spaces", () => {
    expect(cx("a", undefined, "", false, null, "b")).toBe("a b");
  });
});
