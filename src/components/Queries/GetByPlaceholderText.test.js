import { render, screen } from "@testing-library/react"
import GetByPlaceholderText from "./GetByPlaceholderText"

describe('Elements render correctly', () => {
  test("Input renders correctly", () => {
    render(<GetByPlaceholderText/>)
    const inputFirstNameElement = screen.getByPlaceholderText("Indiquez votre prénom")
    expect(inputFirstNameElement).toBeInTheDocument()
    const inputLastNameElement = screen.getByPlaceholderText("Indiquez votre nom")
    expect(inputLastNameElement).toBeInTheDocument()
  })
}) 