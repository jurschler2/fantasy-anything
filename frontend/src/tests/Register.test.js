import React from "react";
import Register from "../components/Register";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<Register />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<Register />);
  expect(asFragment()).toMatchSnapshot();
});