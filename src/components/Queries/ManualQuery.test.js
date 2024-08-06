import { render,screen } from "@testing-library/react"
import ManualQuery from "./ManualQuery"

describe('Manual Test', ()=>{
  test('Header renders correctly 1', () => {
    // getByrole
    render(<ManualQuery/>)
    const headingElement = screen.getByRole('heading',{level:1})
    expect(headingElement).toBeInTheDocument()
  })
  test('Header renders correctly 2', () => {
    // querySelector
    render(<ManualQuery/>)
    const {container} = render(<ManualQuery/>)
    const headingH1 = container.querySelector('.headerOne')
    expect(headingH1).toBeInTheDocument()
  })
})