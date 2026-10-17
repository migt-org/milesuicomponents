import { render, screen } from "@testing-library/react";
import { expectNoA11yViolations } from "../test/axe";
import ResponseStatus from "./ResponseStatus";

describe("ResponseStatus", () => {
  it("renders a status region with the variant class", () => {
    render(<ResponseStatus className="success">Saved</ResponseStatus>);
    expect(screen.getByRole("status")).toHaveClass(
      "miles-response-status",
      "success",
    );
  });

  it("allows overriding the role", () => {
    render(<ResponseStatus role="alert">Failed</ResponseStatus>);
    expect(screen.getByRole("alert")).toHaveTextContent("Failed");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<ResponseStatus>Saved</ResponseStatus>);
    await expectNoA11yViolations(container);
  });
});
