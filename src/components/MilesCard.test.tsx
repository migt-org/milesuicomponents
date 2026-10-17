import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { expectNoA11yViolations } from "../test/axe";
import MilesCard from "./MilesCard";

describe("MilesCard", () => {
  it("renders children with the base class and forwards refs", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <MilesCard ref={ref} className="extra" data-testid="card">
        Content
      </MilesCard>,
    );
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("miles-card", "extra");
    expect(card).toHaveTextContent("Content");
    expect(ref.current).toBe(card);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<MilesCard>Content</MilesCard>);
    await expectNoA11yViolations(container);
  });
});
