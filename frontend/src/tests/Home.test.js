import React from "react";
import Home from "../components/Home";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<Home />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<Home />);
  expect(asFragment()).toMatchSnapshot();
});