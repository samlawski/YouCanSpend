import Controller from '../app/controller';
import App from './app.controller';
import Budget from '../models/budget';
import BudgetIndexView from '../views/budget.index.view';

class BudgetIndex extends Controller {
  constructor(){
    super();
    this.initializeVariables({
      budgets: Budget.all(),
      current_budget: this.getCurrentBudget()
    });
  };

  afterInit(){
    // default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = BudgetIndexView.all(this.budgets);
  };

  bindFunctions(){
    this.budgets.forEach(budget => {
      document.querySelector('#' + budget.item_selector).addEventListener("click", e => {
        this.current_budget = budget;
        this.renderCurrentBudget();
      });
    });

    document.querySelector('#budget_add_spending').addEventListener("click", e => App.go_to('BudgetNew'));
  };

  // Instance Methods
  getCurrentBudget(){
    // TODO use current route in URL to determine current Budget
    return false;
  };

  // Template Methods
  renderCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = BudgetIndexView.current(this.current_budget);
  }
};

export default BudgetIndex;
