import { render, screen } from "@testing-library/react"
import GetByRole from "./GetByRole"

describe('Elements render correctly', () => {
  test("Heading renders correctly", () => {
    render(<GetByRole/>)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
  })
  test("Article renders correctly", () => {
    render(<GetByRole/>)
    const articleElement = screen.getByRole("article")
    expect(articleElement).toBeInTheDocument()
  })
  test("Image renders correctly", () => {
    render(<GetByRole/>)
    const imageElement = screen.getByRole("img")
    expect(imageElement).toBeInTheDocument()
  })
  test("Input renders correctly", () => {
    render(<GetByRole/>)
    const inputTextElement = screen.getByRole("textbox")
    expect(inputTextElement).toBeInTheDocument()
  })
  test("Select renders correctly", () => {
    render(<GetByRole/>)
    const selectElement = screen.getByRole("listbox")
    expect(selectElement).toBeInTheDocument()
  })
  test("Checkbox renders correctly", () => {
    render(<GetByRole/>)
    const inputCheckBoxElement = screen.getByRole("checkbox")
    expect(inputCheckBoxElement).toBeInTheDocument()
  })
  test("renders Animals button", () => {
    render(<GetByRole/>)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
  })
})