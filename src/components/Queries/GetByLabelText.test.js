import { render, screen } from "@testing-library/react"
import GetByLabelText from "./GetByLabelText"

describe('Elements render correctly', () => {
  // test("Heading renders correctly", () => {
  //   render(<GetByRole/>)
  //   const headingH1Element = screen.getByRole("heading", {level:1})
  //   expect(headingH1Element).toBeInTheDocument()
  //   const headingH2Element = screen.getByRole("heading", {level:2})
  //   expect(headingH2Element).toBeInTheDocument()
  // })
  // test("Article renders correctly", () => {
  //   render(<GetByRole/>)
  //   const articleElement = screen.getByRole("article")
  //   expect(articleElement).toBeInTheDocument()
  // })
  // test("Image renders correctly", () => {
  //   render(<GetByRole/>)
  //   const imageElement = screen.getByRole("img")
  //   expect(imageElement).toBeInTheDocument()
  // })
  test("Input renders correctly", () => {
    render(<GetByLabelText/>)
    const inputFirstNameElement = screen.getByLabelText("Prénom")
    expect(inputFirstNameElement).toBeInTheDocument()
    const inputFirstLastNameElement = screen.getByLabelText("Nom")
    expect(inputFirstLastNameElement).toBeInTheDocument()
    const inputUserNameElement = screen.getByLabelText("Username")
    expect(inputUserNameElement).toBeInTheDocument()
  })
  // test("Select renders correctly", () => {
  //   render(<GetByRole/>)
  //   const selectElement = screen.getByRole("listbox")
  //   expect(selectElement).toBeInTheDocument()
  // })
  test("Checkbox renders correctly", () => {
    render(<GetByLabelText/>)
    const inputCheckBoxTermsElement = screen.getByLabelText("Accept the terms and conditions")
    const inputCheckBoxNewsLetterElement = screen.getByLabelText("I subscribe to the newsletter")
    expect(inputCheckBoxTermsElement).toBeInTheDocument()
    expect(inputCheckBoxNewsLetterElement).toBeInTheDocument()
  })
  // test("renders Animals button", () => {
  //   render(<GetByRole/>)
  //   const buttonElement = screen.getByRole("button")
  //   expect(buttonElement).toBeInTheDocument()
  // })
}) 