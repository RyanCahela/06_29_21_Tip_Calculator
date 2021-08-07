(function Calculator() {
  //amount = cash money
  //percent = value from DOM * 0.01;

  document.querySelector(".container").addEventListener("change", (e) => {
    calculate();
  });

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
    tip_amount_per_person_element.textContent =
      tip_amount_per_person.toFixed(2);
    total_amount_per_person_element.textContent = total_amount_per_person;

    //helper functions
    function getBillAmountValue(bill_amount_input) {
      return Number(bill_amount_input.value);
    }

    function getTipPercentageValue(tip_percentage_radio_buttons) {
      let checked_radio_button_value = null;
      tip_percentage_radio_buttons.forEach((radio_button) => {
        if (!radio_button.checked) return;
        checked_radio_button_value = radio_button.value;
      });

      return checked_radio_button_value * 0.01;
    }

    function getNumberOfPeopleValue(number_of_people_input) {
      return Number(number_of_people_input.value);
    }
  }
})();
