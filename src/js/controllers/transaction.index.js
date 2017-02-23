import Controller from '../app/controller';
import App from './app.controller';
import Transaction from '../models/transaction';
import TransactionIndexView from '../views/transaction.index.view';
import TimeHelper from '../app/time_helper';

class TransactionIndex extends Controller {
  constructor(params){
    super();
    this.payable = params.payable;
    this.payable_id = params.payable_id;

    this.initializeVariables({
      transactions: Transaction.from_to(`Transaction/${this.payable}/${this.payable_id}`, 'created_at', TimeHelper.beginning_of_the_month(), TimeHelper.end_of_the_month())
    });
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = TransactionIndexView.all(this.transactions);
  };

  bindFunctions(){
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods

};

export default TransactionIndex;
