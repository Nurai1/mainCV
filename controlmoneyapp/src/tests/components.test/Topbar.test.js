import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { Topbar } from "../../components/Topbar";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders initial or full-logic page", () => {
  act(() => {
    render(<Topbar />, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();

  act(() => {
    render(<Topbar generalSum={123} currentSum={123} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
