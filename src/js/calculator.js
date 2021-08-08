const {
  getBillAmountValue,
  getTipPercentageValue,
  getNumberOfPeopleValue,
} = require("./helper_functions");

//amount = cash money
//percent = value from DOM * 0.01;
const container_el = document.querySelector(".container");
container_el.addEventListener("change", () => calculate());
container_el.addEventListener("submit", (e) => {
  e.preventDefault();
  calculate();
});
container_el.addEventListener("keyup", () => calculate());

function calculate() {
  //cache input elements
  const bill_amount_input = document.querySelector(".js_bill_amount_input");
  const tip_percentage_radio_buttons =
    document.querySelectorAll(`[name="tip_amount"]`);
  const number_of_people_input = document.querySelector(
    ".js_number_of_people_input"
  );

  //cach output elements
  const tip_amount_per_person_element = document.querySelector(
    ".js_tip_amount_per_person"
  );
  const total_amount_per_person_element = document.querySelector(
    ".js_total_amount_per_person"
  );

  //grab data from elements
  const bill_amount = getBillAmountValue(bill_amount_input);
  const tip_percentage = getTipPercentageValue(tip_percentage_radio_buttons);
  const number_of_people = getNumberOfPeopleValue(number_of_people_input);

  console.log("bill_amount", bill_amount);
  console.log("tip_percentage", tip_percentage);
  console.log("number_of_people", number_of_people);

  //do math
  const tip_amount = bill_amount * tip_percentage;
  const tip_amount_per_person = tip_amount / number_of_people;
  const total_amount_with_tip = bill_amount + tip_amount;
  const total_amount_per_person = total_amount_with_tip / number_of_people;

  //update Dom
  tip_amount_per_person_element.textContent = tip_amount_per_person.toFixed(2);
  total_amount_per_person_element.textContent =
    total_amount_per_person.toFixed(2);
}
