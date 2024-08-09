import { render,screen,waitForElementToBeRemoved } from "@testing-library/react";
import FindByRole from "./FindByRole";

describe('GetBy vs QueryBy', () => {
  test('Buttons render correctly', async () => {
    render(<FindByRole/>)
    const buttonThemeDark = await screen.findByRole('button', {name:'Light'},{timeout: 3000})
    expect(buttonThemeDark).toBeInTheDocument()
  })
  test('Check if image is not in the document', async () => {
    render(<FindByRole/>)
    await waitForElementToBeRemoved(()=> screen.queryByRole('img'), {timeout:3000})
    const imageElement = screen.queryByRole('img')
    expect(imageElement).toBeNull()
  })
})