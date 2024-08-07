import { render, screen } from "@testing-library/react"
import GetAllByRole from "./GetAllByRole"

describe('Test to learn GetAllByRole', () => {
  const buttons = ["Button 1","Button 2", "Button 3"]
  test('Ul element reders correctly', () => {
    render(<GetAllByRole btns={buttons}/>)
    const ulElement = screen.getByRole('list')
    expect(ulElement).toBeInTheDocument()
  })
  test('Li elements reders correctly', () => {
    render(<GetAllByRole btns={buttons}/>)
    const liElements = screen.getAllByRole('listitem')
    expect(liElements).toHaveLength(buttons.length)
  })
  test('Should have multiple buttons', () => {
    render(<GetAllByRole btns={buttons}/>)
    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(buttons.length)
  })
})