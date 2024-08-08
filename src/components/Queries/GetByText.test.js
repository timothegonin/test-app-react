import { render, screen } from "@testing-library/react"
import GetByText from "./GetByText"

describe('Elements render correctly', () => {
  test("Input renders correctly", () => {
    render(<GetByText/>)
    //MATCHING A STRING
    // Full string match
    const inputButtonThemeElement = screen.getByText("Changer la couleur")
    expect(inputButtonThemeElement).toBeInTheDocument()
    //Substring match
    const inputButtonThemeElement2 = screen.getByText("er la coul", {exact: false})
    expect(inputButtonThemeElement2).toBeInTheDocument()
    //Ignore case
    const inputButtonThemeElement3 = screen.getByText("changeR La couleUr", {exact: false})
    expect(inputButtonThemeElement3).toBeInTheDocument()
    const submitbutton = screen.getByText("Valider")
    expect(submitbutton).toBeInTheDocument() 
    const introPragraph = screen.getByText("Veuillez indiquer votre identité")
    expect(introPragraph).toBeInTheDocument() 
    //Matching regex
    const introPragraph1 = screen.getByText(/indiquer/) //substring match
    expect(introPragraph1).toBeInTheDocument() 
    const introPragraph2 = screen.getByText(/^veuillez indiquer votre identité$/i) //full string match .ignore case
    expect(introPragraph2).toBeInTheDocument() 
    const introPragraph3 = screen.getByText(/Veuillez i?ndiqUER votre identité/i) //regex
    expect(introPragraph3).toBeInTheDocument() 
    //matching with a function
    //(content?: string, element ?: Element | null)=>boolean
    const introPragraph4 = screen.getByText(content => content.startsWith('Veuill')) //function
    expect(introPragraph4).toBeInTheDocument() 
  })
}) 