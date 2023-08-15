import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test('Navigation component renders as expected', () => {
  const navigation = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  )

  expect(navigation).toMatchSnapshot();
})