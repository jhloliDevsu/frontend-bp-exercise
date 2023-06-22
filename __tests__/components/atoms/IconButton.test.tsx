import React from "react";
import { render } from "@testing-library/react";
import IconButton from "components/atoms/IconButton";

describe("IconButton", () => {
  it("should be in the document", () => {
    const component = render(<IconButton onClick={jest.fn()} src="some-path" width={16} />);

    expect(component).toBeTruthy();
  });
});
