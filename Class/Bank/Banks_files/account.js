/* jshint esversion: 6*/
"use strict";

/**
 * A Bank Account class
 * 
 * Provides the basic functionality that every account should have
 */
class Account {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     */
    constructor(number) {
        this._number = number; // the account number
        this._balance = 0.0;
    }

    /**
     * Getter for the 'private' number field
     * 
     * @returns {number} the account number
     */
    getNumber() {
        return this._number;
    }

    /**
     * Accessor for the 'private' balance field
     * 
     * @returns {number} balance for this account
     */
    getBalance() {
        return this._balance;
    }

    /**
     * Method to add money into the account
     * 
     * @param {number} amount money to be deposited into the account 
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     */
    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
    }

    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
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
        return "Account " + this._number + ": balance " + this._balance;
    }
}

describe("Account Test", function () {
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
