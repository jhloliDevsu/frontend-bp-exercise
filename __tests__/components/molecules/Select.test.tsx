import React from "react";
import { render } from "@testing-library/react";
import Select from "components/molecules/Select";

describe("Select", () => {
  const setValue = jest.fn();

  it("should be in the document", () => {
    const component = render(<Select name="name" setValue={setValue} />);

    expect(component).toBeTruthy();
  });
});
