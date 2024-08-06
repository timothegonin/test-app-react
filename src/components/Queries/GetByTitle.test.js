import { render, screen } from "@testing-library/react"
import GetByTitle from "./GetByTitle"

describe('Elements render correctly', () => {
  test("Alt tags renders correctly", () => {
    render(<GetByTitle/>)
    const titleAA = screen.getByTitle('Adopter un animal')
    expect(titleAA).toBeInTheDocument()
  })
}) 