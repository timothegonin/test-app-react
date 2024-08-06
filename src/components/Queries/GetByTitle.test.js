import { render, screen } from "@testing-library/react"
import GetByTitle from "./GetByTitle"

describe('Elements render correctly', () => {
  test("Titles renders correctly", () => {
    render(<GetByTitle/>)
    const titleAA = screen.getByTitle('Adopter un animal')
    expect(titleAA).toBeInTheDocument()
    const reactLogo = screen.getByTitle('React Logo')
    expect(reactLogo).toBeInTheDocument()
  })
}) 