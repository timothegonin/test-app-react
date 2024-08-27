import { render, screen } from "@testing-library/react";
import TypeClear from "./TypeClear";

describe('Exercice type & clear', () => {
  test('taper dans un champ de saisie', ()=> {
    render(<TypeClear/>)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveValue('Bonjour')
  })
})