import axe from "axe-core";

export async function expectNoA11yViolations(container: Element) {
  const results = await axe.run(container, {
    rules: {
      region: { enabled: false },
      "color-contrast": { enabled: false },
    },
  });
  expect(results.violations.map((v) => v.id)).toEqual([]);
}
