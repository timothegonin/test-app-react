// import { render, screen, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IncrementCount from "./IncrementCount";

// console.log(userEvent)

/*
  clear: [Function: clear],
  copy: [Function: copy],
  cut: [Function: cut],
  deselectOptions: [Function: deselectOptions],
  keyboard: [AsyncFunction: keyboard],
  paste: [Function: paste],
  pointer: [AsyncFunction: pointer],
  selectOptions: [Function: selectOptions],
  tab: [Function: tab],
  type: [Function: type],
  upload: [Function: upload],
  setup: [Function: setupMain]

  1) Convinience APIs
  ******************
  Intéraction avec la souris
  - click: [Function: click],
  - dblClick: [Function: dblClick],
  - tripleClick: [Function: tripleClick],
  Mouvements de la souris
  - hover: [Function: hover],
  - unhover: [Function: unhover],

  2) Pointer APIs

*/

describe('Learn User Interacationss', () => {
  it("Should renders counter correctly", () => {
    render(<IncrementCount/>)
    const counterElement = screen.getByRole('heading', {level:1})
    expect(counterElement).toBeInTheDocument()
  })
  it("Should renders counter button correctly", () => {
    render(<IncrementCount/>)
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    // const counterButtonElement = screen.getByText(/Vous avez cliqué (.*?) fois/)
    expect(counterButtonElement).toBeInTheDocument()
  })
  it("Should rendre the checkbox correctly", () => {
    render(<IncrementCount/>)
    const checkboxElement = screen.getByRole('checkbox', {name:/j'accepte les termes et conditions/i})
    expect(checkboxElement).toBeInTheDocument()
    expect(checkboxElement).not.toBeChecked()
  })
  it("Should show 0 in counter and button before click", () => {
    render(<IncrementCount/>)
    const counterElement = screen.getByRole('heading', {level:1})
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterElement).toHaveTextContent('0')
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 0 fois')
  })
  it("Should dispaly button with 'disabled' status", () => {
    render(<IncrementCount/>)
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).not.toBeEnabled()
  })
  it("Should display the initial color of the button 'Orange'", () => {
    render(<IncrementCount/>)
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).toHaveStyle('background-color: orange')
  })

  it("Should display 1 in counter and button after click", async () => {
    const user = userEvent.setup()
    console.log(user)
    render(<IncrementCount/>)
    const checkboxElement = screen.getByRole('checkbox', {name:/j'accepte les termes et conditions/i})
    await user.click(checkboxElement)

    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).toBeEnabled()
    await user.click(counterButtonElement)
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 1 fois')

    const counterElement = screen.getByRole('heading', {level:1})
    expect(counterElement).toHaveTextContent('1')
  })
  it("Should display 'cyan' in the button after click", async () => {
    const user = userEvent.setup()
    render(<IncrementCount/>)
    const checkboxElement = screen.getByRole('checkbox', {name:/j'accepte les termes et conditions/i})
    await user.click(checkboxElement)

    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).toBeEnabled()
    
    await user.click(counterButtonElement)
    expect(counterButtonElement).toHaveStyle('background-color: cyan')
  })
  it("Sould display 'orange' in the button and 2 in button and counter", async () => {
    const user = userEvent.setup()
    render(<IncrementCount/>)
    const checkboxElement = screen.getByRole('checkbox', {name:/j'accepte les termes et conditions/i})
    await user.click(checkboxElement)

    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).toBeEnabled()
    const counterElement = screen.getByRole('heading', {level:1})
    await user.dblClick(counterButtonElement)
    expect(counterButtonElement).toHaveStyle('background-color: orange')
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 2 fois')
    expect(counterElement).toHaveTextContent('2')
  })
  it("Sould display 'cyan' in the button and 3 in button and counter after 3 click (1+2doubleClick))", async () => {
    const user = userEvent.setup()
    render(<IncrementCount/>)
    const checkboxElement = screen.getByRole('checkbox', {name:/j'accepte les termes et conditions/i})
    await user.click(checkboxElement)

    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).toBeEnabled()
    const counterElement = screen.getByRole('heading', {level:1})
    await user.click(counterButtonElement)
    expect(counterButtonElement).toHaveStyle('background-color: cyan')
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 1 fois')
    expect(counterElement).toHaveTextContent('1')
    await user.dblClick(counterButtonElement)
    expect(counterButtonElement).toHaveStyle('background-color: cyan')
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 3 fois')
    expect(counterElement).toHaveTextContent('3')
  })
  it("Should render the button after checking the box, then be hidden after unchecking the box", async () => {
    const user = userEvent.setup()
    render(<IncrementCount/>)
    const checkboxElement = screen.getByRole('checkbox', {name:/j'accepte les termes et conditions/i})
    await user.click(checkboxElement)
    expect(checkboxElement).toBeChecked()
    
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).not.toBeDisabled()
    await user.click(checkboxElement)
    expect(checkboxElement).not.toBeChecked()
    expect(counterButtonElement).toBeDisabled()
    await user.dblClick(checkboxElement)
    expect(checkboxElement).not.toBeChecked()
    expect(counterButtonElement).toBeDisabled()
  })

  it("Should not displaying popup before mouseOver", () => {
    render(<IncrementCount/>)
    // const popupElement = screen.queryByText(/lorem/i)
    const popupElement = screen.queryByText("lorem", {exact: false})
    // expect(popupElement).not.toBeInTheDocument()
    expect(popupElement).toBeNull()
  } )
})