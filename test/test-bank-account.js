const assert = require('assert');
const BankAccount = require('../app/models/BankAccount');

describe('Bank account tests', () => {
    let bankAccount_1 = new BankAccount();
    let bankAccount_2 = new BankAccount();

    let addition_1 = 100;
    let substraction_1 = 20;
    let addition_2 = 55;
    let substraction_2 = 23;

    let invalid_amount = -5;

    describe('Current', () => {
        it('Should return the current account balance',() => {
            assert.equal(0,bankAccount_1.current(0));
        });
    });
    describe('Append', () => {        
        it('Should add to the account balance',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            assert.equal(addition_1,bankAccount_1.append(addition_1));
        });
        it('Should ignore negative amounts',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            assert.equal(0,bankAccount_1.append(invalid_amount));
        });
    });
    describe('Substract', () => {
        it('Should substract to the account balance',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            assert.equal(-substraction_1,bankAccount_1.substract(substraction_1));
        });
        it('Should ignore negative amounts',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            assert.equal(0,bankAccount_1.substract(invalid_amount));
        });
    });
    describe('Merge', () => {
        it('Should merge the accounts\' histories',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            bankAccount_1.append(addition_1);
            bankAccount_2.substract(substraction_2);
            bankAccount_1.merge(bankAccount_2);

            assert.deepEqual([{operation: 'addition', amount: addition_1},{operation: 'substraction', amount:substraction_2}], bankAccount_1.history());
        });
        it('Should add to the original account balance if the second account\'s balance is positive',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            bankAccount_2.append(addition_2);
            bankAccount_1.merge(bankAccount_2);

            assert.equal(addition_2, bankAccount_1.current());
        });
        it('Should substract to the original account balance if the second account\'s balance is negative',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            bankAccount_2.substract(substraction_2);
            bankAccount_1.merge(bankAccount_2);

            assert.equal(-substraction_2, bankAccount_1.current());
        });
    });
    describe('History', () => {
        it('Should return the transactions performed to an account',() => {
            bankAccount_1 = new BankAccount();
            bankAccount_2 = new BankAccount();

            bankAccount_1.append(addition_1);

            assert.deepEqual([{operation: 'addition', amount: addition_1}], bankAccount_1.history());
        });
    });
});