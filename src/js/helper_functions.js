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

module.exports = {
  getBillAmountValue,
  getTipPercentageValue,
  getNumberOfPeopleValue,
};