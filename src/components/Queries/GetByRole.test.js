import { render, screen } from "@testing-library/react"
import GetByRole from "./GetByRole"

describe('Elements render correctly', () => {
  test("Heading renders correctly", () => {
    render(<GetByRole/>)
    const headingH1Element = screen.getByRole("heading", {level:1})
    expect(headingH1Element).toBeInTheDocument()
    const headingH2Element = screen.getByRole("heading", {level:2})
    expect(headingH2Element).toBeInTheDocument()
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
    const inputFirstNameElement = screen.getByRole("textbox",{name:"Prénom"})
    expect(inputFirstNameElement).toBeInTheDocument()
    const inputFirstLastNameElement = screen.getByRole("textbox",{name:"Nom"})
    expect(inputFirstLastNameElement).toBeInTheDocument()
  })
  test("Select renders correctly", () => {
    render(<GetByRole/>)
    const selectElement = screen.getByRole("listbox")
    expect(selectElement).toBeInTheDocument()
  })
  test("Checkbox renders correctly", () => {
    render(<GetByRole/>)
    const inputCheckBoxTermsElement = screen.getByRole("checkbox",{name: "Accept the terms and conditions"})
    const inputCheckBoxNewsLetterElement = screen.getByRole("checkbox", {name: "I subscribe to the newsletter"})
    expect(inputCheckBoxTermsElement).toBeInTheDocument()
    expect(inputCheckBoxNewsLetterElement).toBeInTheDocument()
  })
  test("renders Animals button", () => {
    render(<GetByRole/>)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
  })
}) 