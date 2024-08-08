import { render,screen } from "@testing-library/react";
import FindByRole from "./FindByRole";

describe('GetBy vs QueryBy', () => {
  test('Buttons render correctly', () => {
    render(<FindByRole/>)
    const buttonThemeDark = screen.getByRole('button', {name:'Dark'})
    expect(buttonThemeDark).toBeInTheDocument()
  })
})