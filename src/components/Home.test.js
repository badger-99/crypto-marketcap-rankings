import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import Home from "./Home";

test('Home component renders as expected', () => {
  const home = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  expect(home).toMatchSnapshot();
})