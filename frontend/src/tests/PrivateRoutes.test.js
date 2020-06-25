import React from "react";
import PrivateRoutes from "../components/PrivateRoutes";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<PrivateRoutes />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<PrivateRoutes />);
  expect(asFragment()).toMatchSnapshot();
});