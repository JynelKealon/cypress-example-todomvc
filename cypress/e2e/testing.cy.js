// describe the test suite
describe("Testing the to do items", () => {
    let TODO_ITEM_ONE = "Make every second count";
    let TODO_ITEM_TWO = "Invest in yourself";
    let TODO_ITEM_THREE = "Learn Cypress";
// beforeEach command used to state before each test runs cypress should visit 
    beforeEach(() => {
      cy.visit("http://localhost:8888/#/");
    });
// testing if each item can be added to the todo list
    it("displays items", () => {
      cy.get(".new-todo").type(TODO_ITEM_ONE).type("{enter}");
      cy.get(".new-todo").type(TODO_ITEM_TWO).type("{enter}");
      cy.get(".new-todo").type(TODO_ITEM_THREE).type("{enter}");
    });
  });
//  testing if all tasks can be marked complete 
  context("Mark all as completed", function () {
    beforeEach(function () {
      cy.createDefaultTodos().as("todos");
    });
  
// mark all todos as completed
    it("mark all items as completed", function () {
      cy.get(".toggle-all").check();
      cy.get("@todos").eq(0).should("have.class", "completed");
      cy.get("@todos").eq(1).should("have.class", "completed");
      cy.get("@todos").eq(2).should("have.class", "completed");
    });
  });