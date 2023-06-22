import React from "react";
import { render } from "@testing-library/react";
import HeaderTable from "components/molecules/HeaderTable";

describe("HeaderTable", () => {
  it("should be in the document", () => {
    const component = render(
      <table>
        <thead>
          <HeaderTable />
        </thead>
      </table>
    );

    expect(component).toBeTruthy();
  });
});
