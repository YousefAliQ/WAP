/* jshint esversion: 6*/
"use strict";

class CheckingAccount extends Account{

    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     * Getter for the 'private' overdraft field
     *
     * @returns {overdraft} the account overdraft
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Setter for the 'private' overdraft field
     *
     */
    setInterest(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        if (amount > this._overdraft){
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    endOfMonth(){

    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance + " Overdraft : " + this._overdraft;
    }

}

describe("Checking Account Test", function () {
        context("Testing the methods on the account: ", function () {

            let data = {};
            beforeEach(function () {
                data.balance =  100;
                data.withdraw = 50;
            });
            let acc = new Account(1);
            it("Test deposit 100 : ", function () {
                acc.deposit(data.balance);
                assert.equal(acc.getBalance(),100);
            });
            it("Test withdraw 50 : ", function () {
                acc.withdraw(data.withdraw);
                assert.equal(acc.getBalance(),50);
            });
            it("Test withdraw 200 - Must throw an Error : ", function () {
                assert.equal(acc.withdraw(200),  Error("Insufficient funds") );
            });
        });
});

