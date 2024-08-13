import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
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
  it("Should show 0 in counter and button before click", () => {
    render(<IncrementCount/>)
    const counterElement = screen.getByRole('heading', {level:1})
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterElement).toHaveTextContent('0')
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 0 fois')
  })
  it("Should display the initial color of the button 'Orange'", () => {
    render(<IncrementCount/>)
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    expect(counterButtonElement).toHaveStyle('background-color: orange')
  })

  it("Should display 1 in counter and button before click", () => {
    render(<IncrementCount/>)
    const counterButtonElement = screen.getByRole("button", {name : /Vous avez cliqué \d+ fois/})
    fireEvent.click(counterButtonElement)
    expect(counterButtonElement).toHaveTextContent('Vous avez cliqué 1 fois')

    const counterElement = screen.getByRole('heading', {level:1})
    expect(counterElement).toHaveTextContent('1')

  })
})