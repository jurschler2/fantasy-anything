import React from "react";
import Routes from "../components/Routes";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<Routes />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<Routes />);
  expect(asFragment()).toMatchSnapshot();
});