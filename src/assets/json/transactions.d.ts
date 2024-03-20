import { Transaction } from '../../models/Transaction.model';

declare module 'transaction_list/transaction.json' {
  const transaction_list: Transaction;
  export default transaction_list;
}
