import { render, screen } from "@testing-library/react"
import GetByLabelText from "./GetByLabelText"

describe('Elements render correctly', () => {
  test("Input renders correctly", () => {
    render(<GetByLabelText/>)
    const inputFirstNameElement = screen.getByLabelText("Prénom")
    expect(inputFirstNameElement).toBeInTheDocument()
    const inputFirstLastNameElement = screen.getByLabelText("Nom")
    expect(inputFirstLastNameElement).toBeInTheDocument()
    const inputUserNameElement = screen.getByLabelText("Username")
    expect(inputUserNameElement).toBeInTheDocument()
    const inputFavoriteAnimalElement = screen.getByLabelText('Animal préféré', {selector:'input'})
    expect(inputFavoriteAnimalElement).toBeInTheDocument()
    const textAreaFavoriteAnimalElement = screen.getByLabelText('Animal préféré', {selector:"textarea"})
    expect(textAreaFavoriteAnimalElement).toBeInTheDocument()
  })
  test("Checkbox renders correctly", () => {
    render(<GetByLabelText/>)
    const inputCheckBoxTermsElement = screen.getByLabelText("Accept the terms and conditions")
    const inputCheckBoxNewsLetterElement = screen.getByLabelText("I subscribe to the newsletter")
    expect(inputCheckBoxTermsElement).toBeInTheDocument()
    expect(inputCheckBoxNewsLetterElement).toBeInTheDocument()
  })
}) 