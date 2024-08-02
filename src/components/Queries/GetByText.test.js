import { render, screen } from "@testing-library/react"
import GetByText from "./GetByText"

describe('Elements render correctly', () => {
  test("Input renders correctly", () => {
    render(<GetByText/>)
    const inputButtonThemeElement = screen.getByText("Changer la couleur")
    expect(inputButtonThemeElement).toBeInTheDocument()
    const submitbutton = screen.getByText("Valider")
    expect(submitbutton).toBeInTheDocument() 
    const introPragraph = screen.getByText("Veuillez indiquer votre identité")
    expect(introPragraph).toBeInTheDocument() 
  })
}) 