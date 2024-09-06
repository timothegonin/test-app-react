import { render, screen } from "@testing-library/react";
import TypeClear from "./TypeClear";
import userEvent from "@testing-library/user-event";

describe('Exercice type & clear', () => {
  const user = userEvent.setup();
  test('taper dans un champ de saisie', async ()=> {
    render(<TypeClear/>)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveValue('Bonjour')
    await user.type(inputElement, ' les amis dev');
    // expect(inputElement).toHaveValue('Bonjour les amis dev')
    // expect(inputElement.value).toBe('Bonjour les amis dev')
    expect(inputElement.value).toEqual('Bonjour les amis dev')

    await user.clear(inputElement)
    expect(inputElement).toHaveValue('')
  })
})