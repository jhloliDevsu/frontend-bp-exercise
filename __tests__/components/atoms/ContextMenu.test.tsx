import React from "react";
import { render } from "@testing-library/react";
import ContextMenu from "components/atoms/ContextMenu";

describe("ContextMenu", () => {
  const options = [
    {
      label: "some-label",
      onClick: jest.fn(),
    }
  ];

  it("should be in the document", () => {
    const component = render(<ContextMenu options={options} x={1} y={1} />);

    expect(component).toBeTruthy();
  });
});
