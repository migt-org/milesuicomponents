import { render, screen } from "@testing-library/react";
import { expectNoA11yViolations } from "../test/axe";
import Loader from "./Loader";

describe("Loader", () => {
  it("renders an accessible status with a default label", () => {
    render(<Loader />);
    expect(screen.getByRole("status", { name: "Loading" })).toHaveClass(
      "miles-loader",
    );
  });

  it("applies className/style to the spinner and wrapper props to the wrapper", () => {
    render(
      <Loader
        className="spin"
        style={{ width: 20 }}
        wrapperClassName="wrap"
        wrapperStyle={{ height: 200 }}
      />,
    );
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("miles-loader", "spin");
    expect(spinner).toHaveStyle({ width: "20px" });
    const wrapper = spinner.parentElement;
    expect(wrapper).toHaveClass("miles-loader-wrapper", "wrap");
    expect(wrapper).toHaveStyle({ height: "200px" });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Loader />);
    await expectNoA11yViolations(container);
  });
});
