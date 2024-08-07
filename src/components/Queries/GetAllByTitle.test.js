import { render,screen } from "@testing-library/react"
import GetAllByTitle from "./GetAllByTitle"

describe('Test to learn GetAllByTitle', () => {
  it('Should render two paragraphs with the title attribute presentation', () => {
    render(<GetAllByTitle/>)
    const paragraphs = screen.getAllByTitle('presentation')
    expect(paragraphs.length).toBe(2)
  })
})