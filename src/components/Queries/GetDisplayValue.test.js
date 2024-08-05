import { render, screen } from "@testing-library/react"
import GetByDisplayValue from "./GetDisplayValue"

describe('Elements render correctly', () => {
  test("Input renders correctly", () => {
    render(<GetByDisplayValue/>)
    const firstName = screen.getByDisplayValue("Stan")
    expect(firstName).toBeInTheDocument()
    const lastName = screen.getByDisplayValue("Smith")
    expect(lastName).toBeInTheDocument()
    const textAreaMessage = screen.getByDisplayValue("Bonjour à tous")
    expect(textAreaMessage).toBeInTheDocument()
  })
}) 