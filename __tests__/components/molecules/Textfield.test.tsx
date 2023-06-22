import React from "react";
import { render } from "@testing-library/react";
import Textfield from "components/molecules/Textfield";

describe("Textfield", () => {
  it("should be in the document", () => {
    const component = render(<Textfield />);

    expect(component).toBeTruthy();
  });
});
