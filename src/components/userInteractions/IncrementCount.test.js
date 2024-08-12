import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IncrementCount from "./IncrementCount";

console.log(userEvent)

/*
  clear: [Function: clear],
  copy: [Function: copy],
  cut: [Function: cut],
  deselectOptions: [Function: deselectOptions],
  keyboard: [AsyncFunction: keyboard],
  paste: [Function: paste],
  pointer: [AsyncFunction: pointer],
  selectOptions: [Function: selectOptions],
  tab: [Function: tab],
  type: [Function: type],
  upload: [Function: upload],
  setup: [Function: setupMain]

  1) Convinience APIs
  ******************
  Intéraction avec la souris
  - click: [Function: click],
  - dblClick: [Function: dblClick],
  - tripleClick: [Function: tripleClick],
  Mouvements de la souris
  - hover: [Function: hover],
  - unhover: [Function: unhover],

  2) Pointer APIs

*/

describe('Learn Pointer Interacationss', () => {
  render(<IncrementCount/>)
})