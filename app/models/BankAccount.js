class BankAccount{
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    current(){
        return this.balance;
    }

    append(amount){
        if(this.isAmountValid(amount)){
            this.balance += amount;
            this.transactions.push({operation: 'addition', amount: amount});
        }
        return this.current();
    }

    substract(amount){
        if(this.isAmountValid(amount)){
            this.balance -= amount;
            this.transactions.push({operation: 'substraction', amount: amount});
        }
        return this.current();
    }

    history(){
        return this.transactions;
    }

    merge(account){
        if(account){
            this.balance += account.current();

            for(let i = 0; i < account.history().length; i++){
                this.transactions.push(account.history()[i]);
            }
        }
    }

    isAmountValid(amount){
        return amount >= 0;
    }
}

module.exports = BankAccount;