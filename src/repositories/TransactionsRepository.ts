import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const { income, outcome } = this.transactions.reduce(
      (accumulator: Balance, transactions: Transaction) => {
        switch (transactions.type) {
          case 'income':
            accumulator.income += transactions.value;
            break;
          case 'outcome':
            accumulator.outcome += transactions.value;
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        total: 0,
        income: 0,
        outcome: 0,
      },
    );
    const total = income - outcome;
    return { income, outcome, total };
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    const createTransaction = new Transaction({
      title,
      value,
      type,
    });
    this.transactions.push(createTransaction);
    return createTransaction;
  }
}

export default TransactionsRepository;
