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
})

test("renders Animals image", () => {
  render(<GetByRole/>)
  const imageElement = screen.getByRole("img")
  expect(imageElement).toBeInTheDocument()
})
test("renders Animals imput", () => {
  render(<GetByRole/>)
  const inputTextElement = screen.getByRole("textbox")
  expect(inputTextElement).toBeInTheDocument()
})
test("renders Animals select", () => {
  render(<GetByRole/>)
  const selectElement = screen.getByRole("combobox")
  expect(selectElement).toBeInTheDocument()
})
test("renders Animals checkbox", () => {
  render(<GetByRole/>)
  const checkBoxElement = screen.getByRole("checkbox")
  expect(checkBoxElement).toBeInTheDocument()
})
test("renders Animals button", () => {
  render(<GetByRole/>)
  const buttonElement = screen.getByRole("button")
  expect(buttonElement).toBeInTheDocument()
})
