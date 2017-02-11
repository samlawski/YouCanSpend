class BudgetIndexView {
  static all(budgets){
    return `
      <div class="mdl-list page-content">
        ${budgets.map(budget => this.templateListItem(budget)).join('')}
      </div>

      <button id="budget_add_spending" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>`;
  };

  static templateListItem(budget){
    return `
      <div id="${budget.item_selector}" class="budget_list_item mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">${budget.icon}</i>
          <span>$${budget.balance}</span>
          <span class="mdl-list__item-sub-title">on ${budget.name}</span>
        </span>
      </div>`;
  };

  static current(budget){
    return `
      <div class="amount text-center">$${budget.balance}</div>
      <div class="name text-center">on ${budget.name} <a class="" href="#"><i class="material-icons">edit</i></a></div>`;
  };

};

export default BudgetIndexView;