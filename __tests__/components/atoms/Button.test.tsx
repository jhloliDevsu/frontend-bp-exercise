import React from "react";
import { render } from "@testing-library/react";
import Button from "components/atoms/Button";

describe("Button", () => {
  it("should be in the document", () => {
    const component = render(<Button onClick={jest.fn()} text="Test" />);

    expect(component).toBeTruthy();
  });
});
