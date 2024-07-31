import { render, screen } from "@testing-library/react"
import Animals from "./Animals"

test("renders Animals", () => {
  render(<Animals/>)
  const divElement = screen.getByText(/Animals/i)
  expect(divElement).toBeInTheDocument()
})
test("renders Animals title", () => {
  render(<Animals/>)
  const titleElement = screen.getByRole("heading", {name :/Animals/i})
  expect(titleElement).toBeInTheDocument()
})
test("renders Animals article", () => {
  render(<Animals/>)
  const articleElement = screen.getByRole("article")
  expect(articleElement).toBeInTheDocument()
})
test("renders Animals image", () => {
  render(<Animals/>)
  const imageElement = screen.getByRole("img")
  expect(imageElement).toBeInTheDocument()
})
test("renders Animals imput", () => {
  render(<Animals/>)
  const inputTextElement = screen.getByRole("textbox")
  expect(inputTextElement).toBeInTheDocument()
})
