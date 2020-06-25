import React from "react";
import NavBar from "../components/NavBar";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<NavBar />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});