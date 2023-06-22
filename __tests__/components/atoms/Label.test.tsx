import React from "react";
import { render } from "@testing-library/react";
import Label from "components/atoms/Label";

describe("Label", () => {
  it("should be in the document", () => {
    const component = render(<Label text="some-text" />);

    expect(component).toBeTruthy();
  });
});
