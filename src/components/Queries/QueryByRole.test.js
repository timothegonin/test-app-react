import { render,screen } from "@testing-library/react";
import QueryByRole from "./QueryByRole";

describe('GetBy vs QueryBy', () => {
  test('Buttons render correctly', () => {
    render(<QueryByRole/>)
    const buttonThemeDark = screen.getByRole('button', {name:'Dark'})
    expect(buttonThemeDark).toBeInTheDocument()
    const buttonThemeLight = screen.queryByRole('button', {name:'Light'})
    console.log(buttonThemeLight)
    // expect(buttonThemeLight).toBeInTheDocument()
    // expect(buttonThemeLight).toBeFalsy()
    expect(buttonThemeLight).not.toBeTruthy()
  })
})