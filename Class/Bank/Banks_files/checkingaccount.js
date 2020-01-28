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
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft) {
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
        return "Checking Account " + this._number + " : balance : " + this._balance + " Overdraft : " + this._overdraft;
    }

}

describe("Checking Account Test", function () {
        context("Testing the methods on the checking account: ", function () {

            let data = {};
            beforeEach(function () {
                data.balance =  100;
            });
            let acc = new CheckingAccount(1, 20);
            acc.deposit(100);

            it("Get balance value 100 : ", function () {
                assert.equal(acc.getBalance(),100);
            });

            it("Get overdraft value 20: ", function () {
                assert.equal(acc.getOverdraft(),20);
            });
            it("Set overdraft value 50: ", function () {
                acc.setOverdraft(50);
                assert.equal(acc.getOverdraft(),50);
            });
            it("Test withdraw 140 and overdraft ", function () {
                acc.withdraw(140)
                assert.equal(acc.getBalance(),-40 );
            });

            it("Test toString method ", function () {
                assert.equal(acc.toString(),"Checking Account 1 : balance : -40 Overdraft : 50");
            });

        });
});

