(function Calculator() {
  //amount = cash money
  //percent = value from DOM * 0.01;

  document.querySelector(".container").addEventListener("change", (e) => {
    calculate();
  });

  function calculate() {
    const bill_amount_input = document.querySelector(".js_bill_amount_input");
    const tip_percentage_radio_buttons =
      document.querySelectorAll(`[name="tip_amount"]`);
    const number_of_people_input = document.querySelector(
      ".js_number_of_people_input"
    );

    const bill_amount = getBillAmountValue(bill_amount_input);
    const tip_percentage = getTipPercentageValue(tip_percentage_radio_buttons);
    const number_of_people = getNumberOfPeopleValue(number_of_people_input);

    console.log("bill_amount", bill_amount);
    console.log("tip_percentage", tip_percentage);
    console.log("number_of_people", number_of_people);

    //helper functions
    function getBillAmountValue(bill_amount_input) {
      console.log("bill_amount_input", bill_amount_input);
      return Number(bill_amount_input.value);
    }

    function getTipPercentageValue(tip_percentage_radio_buttons) {
      console.log("tip_percentage_radio_buttons", tip_percentage_radio_buttons);
      const radio_buttons = Array.from(tip_percentage_radio_buttons);
      const checked_radio_id = radio_buttons.filter((e) => {
        console.dir("radio e", e);
      });

      console.log(checked_radio_id);

      const percent_value = 0;
      switch (checked_radio_id) {
        case "five_percent":
          percent_value = 0.05;
          break;
        case "ten_percent":
          percent_value = 0.1;
          break;
        case "fifteen_percent":
          percent_value = 0.15;
          break;
        case "twenty_five_percent":
          percent_value = 0.25;
          break;
        case "fifty_percent":
          percent_value = 0.5;
          break;
        default:
          console.error(`checked_radio_id value was ${checked_radio_id}`);
      }
      return percent_value;
    }

    function getNumberOfPeopleValue(number_of_people_input) {
      return Number(number_of_people_input.value);
    }
  }
})();
