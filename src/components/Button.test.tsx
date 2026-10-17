import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { expectNoA11yViolations } from "../test/axe";
import Button from "./Button";

describe("Button", () => {
  it("renders a button with the base class and custom className", () => {
    render(<Button className="extra">Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveClass("miles-button", "extra");
  });

  it("keeps the base class when className comes through spread props", () => {
    const props = { className: "extra" };
    render(<Button {...props}>Save</Button>);
    expect(screen.getByRole("button")).toHaveClass("miles-button", "extra");
  });

  it("passes native props and forwards refs", () => {
    const onClick = vi.fn();
    const ref = createRef<HTMLButtonElement>();
    render(
      <Button ref={ref} type="submit" onClick={onClick} disabled={false}>
        Go
      </Button>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveAttribute("type", "submit");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Button>Save</Button>);
    await expectNoA11yViolations(container);
  });
});
