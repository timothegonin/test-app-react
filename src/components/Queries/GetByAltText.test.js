import { render, screen } from "@testing-library/react"
import GetByAltText from "./GetByAltText"

describe('Elements render correctly', () => {
  test("Alt tags renders correctly", () => {
    render(<GetByAltText/>)
    const imageElement = screen.getByAltText("Dragon")
    expect(imageElement).toBeInTheDocument()
  })
}) 