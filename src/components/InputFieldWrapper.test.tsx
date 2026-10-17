import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { expectNoA11yViolations } from "../test/axe";
import InputFieldIcon from "./InputFieldIcon";
import InputFieldWrapper from "./InputFieldWrapper";

describe("InputFieldWrapper and InputFieldIcon", () => {
  it("renders the wrapper and icon with their base classes", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <InputFieldWrapper ref={ref} className="extra" data-testid="wrapper">
        <InputFieldIcon className="fa fa-user" data-testid="icon" />
        <input aria-label="Username" />
      </InputFieldWrapper>,
    );
    expect(screen.getByTestId("wrapper")).toHaveClass(
      "miles-input-field",
      "extra",
    );
    expect(ref.current).toBe(screen.getByTestId("wrapper"));
    expect(screen.getByTestId("icon")).toHaveClass(
      "miles-input-field-icon",
      "fa",
      "fa-user",
    );
  });

  it("hides the icon from screen readers by default", () => {
    render(<InputFieldIcon data-testid="icon" />);
    expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <InputFieldWrapper>
        <InputFieldIcon />
        <input aria-label="Username" />
      </InputFieldWrapper>,
    );
    await expectNoA11yViolations(container);
  });
});
