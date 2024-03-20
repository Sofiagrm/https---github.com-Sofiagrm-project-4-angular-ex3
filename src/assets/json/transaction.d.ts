import { Transaction } from '../../models/Transaction.model'

declare module 'transactions/*.json' {
    const transaction: Transaction;
    export default transaction;
}