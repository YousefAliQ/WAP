/* jshint esversion: 6*/
"use strict";

class SavingsAccount extends Account{

    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     * Getter for the 'private' interest field
     *
     * @returns {interest} the account interest
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the 'private' interest field
     *
     */
    setInterest(interest) {
        this._interest = interest;
    }

    /**
     * change the 'private' interest field depends on
     * the following equation.
     *  balance * interest / 100
     *
     */
    addInterest(){
        let dep = this.getBalance() * this.getInterest() / 100;
        if (dep > 0){
            this.deposit(dep);
        }

    }

    endOfMonth(){

    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this._number + " : balance : " + this._balance + " Interest : " + this._interest;
    }

}

describe("Saving Account Test", function () {
    context("Testing the methods on the saving account: ", function () {

        let data = {};
        beforeEach(function () {
            data.balance =  100;
        });
        let acc = new SavingsAccount(1, 20);
        acc.deposit(100);

        it("Get balance value 100 : ", function () {
            assert.equal(acc.getBalance(),100);
        });

        it("Get interest value 20: ", function () {
            assert.equal(acc.getInterest(),20);
        });
        it("Set interest value 50: ", function () {
            acc.setInterest(50);
            assert.equal(acc.getInterest(),50);
        });
        it("add interest to the balance ", function () {
            acc.addInterest();
            assert.equal(acc.getBalance(), 150 );
        });

        it("Test toString method ", function () {
            assert.equal(acc.toString(),"Saving Account 1 : balance : 150 Interest : 50");
        });

    });
});