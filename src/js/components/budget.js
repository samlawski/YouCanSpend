class Budget {
  constructor(params){
    this.amount = params.amount;
    this.name = params.name;
    this.icon = "shopping_basket"; // TODO adjustable

    // this.bindFunctions();
  }

  bindFunctions(){
    document.querySelector('#budget_item_' + this.name).addEventListener("click", function(){
      alert("you clicked " + this.name)
    });
  };

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
    <div id="budget_item_${this.name}" class="budget_list_item mdl-list__item mdl-list__item--two-line">
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
