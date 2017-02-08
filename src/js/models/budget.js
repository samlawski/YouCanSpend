import Record from "../app/record.js";

class Budget extends Record {
  constructor(params){
    super();
    this.id = params.id;
    this.amount = params.amount;
    this.name = params.name;
    this.icon = "shopping_basket"; // TODO adjustable

    this.item_selector = `budget_item_${this.id}`
  };

  validate(){
    // TODO validate id uniqueness and presence
    // TODO validate amount being a valid decimal and present
    // TODO validate name presence and length
    // TODO validate icon string is equal to any of the icons
  }

  save(){
    // TODO save this budget to firebase?
  }

  // Templates
  templateNewBudget(){
    return `
    <div class="padding-30">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="Budget_name">
        <label class="mdl-textfield__label" for="Budget_name">Budget Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Budget_amount">
        <label class="mdl-textfield__label" for="Budget_amount">Budget Amount</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <button id="Budget_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Save Budget
      </button>
    </div><!-- /.padding-30 -->`
  }

  templateListItem(){
    return `
    <div id="${this.item_selector}" class="budget_list_item mdl-list__item mdl-list__item--two-line">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">${this.icon}</i>
        <span>$${this.amount}</span>
        <span class="mdl-list__item-sub-title">on ${this.name}</span>
      </span>
    </div>`
  }

  templateCurrent(){
    return `
    <div class="amount text-center">$${this.amount}</div>
    <div class="name text-center">on ${this.name} <a class="" href="#"><i class="material-icons">edit</i></a></div>`
  }
}

export default Budget;