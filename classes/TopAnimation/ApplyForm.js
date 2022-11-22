import HtmlInput from "../HtmlInput";

const HtmlInputClass = new HtmlInput();

export default class ApplyForm {

  getFirstName() {
    return cy.get(HtmlInputClass.getInputByName('first_name'));
  }

  getLastName() {
    return cy.get(HtmlInputClass.getInputByName('last_name'));
  }

  getDateOfBirth() {
    return cy.get(HtmlInputClass.getInputByName('date_of_birth'));
  }

  getEmail() {
    return cy.get(HtmlInputClass.getInputByName('email'));
  }

  getPhone() {
    return cy.get(HtmlInputClass.getInputByName('tel'));
  }

  getHousingSituation() {
    return cy.get(HtmlInputClass.getInputByName('housing_situation'))
  }

  getEducation() {
    return cy.get(HtmlInputClass.getInputByName('education'));
  }

  getAvailableRangeFrom() {
    return cy.get(HtmlInputClass.getInputByName('available_range_from'))
  }

  getAvailableRangeTil() {
    return cy.get(HtmlInputClass.getInputByName('available_range_till'))
  }



  // ToDo: The OK button only works once... 
  // after the first one it stopped working.
  getOkButton() {
    return cy.contains('OK', { timeout: 10000 })
  }

  getMoreQuestionsButton() {
    return cy.get('.grid > .bg-blue');
  }

  getVideoRecordingButton() {
    return cy.get('.grid > .bg-orange');
  }
  
  /**
   * 
   * @param {int} number 
   */
  getReference(name) {

    return cy.contains(name)

    // ToDo: Find a way to make this dynamic.
  }

  fillInCompleteFirstStep(withEnter = false){
    let enterString = '{enter}';

    if (! withEnter) {
      enterString = '';
    }

    this.getFirstName().type(`Jasper${enterString}`);
    if (! withEnter) {
      this.getOkButton().click();
    }

    this.getLastName().type('Stolwijk{enter}');

    this.getDateOfBirth().type('30-07-1999{enter}');

    this.getEmail().type('j.stolwijk@flooris.nl{enter}');

    this.getPhone().type('0628333143{enter}')

    this.getReference('Google').click()
  }

  fillInComepleteSecondStep() {

    this.getHousingSituation().type('Woerden{enter}');

    this.getEducation().type('Geen{enter}');

    this.getAvailableRangeFrom().type('01-01-2023')

    this.getAvailableRangeTil().type('01-01-2024{enter}');


  }

  


}