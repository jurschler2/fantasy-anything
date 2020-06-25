import React from "react";
import About from "../components/About";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<About />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<About />);
  expect(asFragment()).toMatchSnapshot();
});