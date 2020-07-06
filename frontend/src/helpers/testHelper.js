import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

/**
 *  This is a helper function for tests using react-router
 */

export function renderWithRouter(children, initialPath = "") {
  const history = createMemoryHistory();
  if (initialPath) history.push(initialPath);
  return render(<Router history={history}>{children}</Router>);
}