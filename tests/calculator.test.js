/**
 * @jest-environment jsdom
 */
const {
  getBillAmountValue,
  getTipPercentageValue,
  getNumberOfPeopleValue,
} = require("../src/js/helper_functions");

//create mock text and radio elements
test("returns a number when passed a text input element with a value", () => {
  const text_input = document.createElement("input");
  text_input.setAttribute("type", "text");
  text_input.value = 3;
  expect(getBillAmountValue(text_input)).toBe(3);
});

test("returns a number when passed a text input element with a value", () => {
  const text_input = document.createElement("input");
  text_input.setAttribute("type", "text");
  text_input.value = 3;
  expect(getNumberOfPeopleValue(text_input)).toBe(3);
});

test("returns the value of a checked radio butten when passed a NodeList", () => {
  document.body.innerHTML = `
<label class="input__form__radio-input-label" for="five_percent"
  >5%</label
>
<input
  class="input__form__radio-input"
  type="radio"
  name="tip_amount"
  id="five_percent"
  value="5"
  checked ${/*setting checked radio button*/}
  }
/>
<label class="input__form__radio-input-label" for="ten_percent"
  >10%</label
>
<input
  class="input__form__radio-input"
  type="radio"
  name="tip_amount"
  id="ten_percent"
  value="10"
/>`;
  const node_list = document.querySelectorAll(".input__form__radio-input");
  //0.05 because the 5% checkbox has 'checked' attribute above
  expect(getTipPercentageValue(node_list)).toBe(0.05);
});
