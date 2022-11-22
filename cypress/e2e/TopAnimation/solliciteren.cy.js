import ApplyForm from '../../../classes/TopAnimation/ApplyForm'

const TopAnimationApplyForm = new ApplyForm();

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://ta-zomerjobs.9test.nl/')
    cy.get('.flex > [href="/solliciteren"]').click()

    TopAnimationApplyForm.fillInCompleteFirstStep();

    TopAnimationApplyForm.getMoreQuestionsButton().click();

    TopAnimationApplyForm.fillInComepleteSecondStep();
  })
})