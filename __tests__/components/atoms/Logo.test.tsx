import React from "react";
import { render } from "@testing-library/react";
import Logo from "components/atoms/Logo";

describe("Logo", () => {
  it("should be in the document", () => {
    const component = render(<Logo src="some-path" />);

    expect(component).toBeTruthy();
  });
});
