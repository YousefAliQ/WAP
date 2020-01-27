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
        this._interest = this.balance * this.interest / 100;
    }

    endOfMonth(){

    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance + " Interest : " + this._interest;
    }

}

describe("Bank Account Test", function () {

    context("Testing the methods on the account: ", function () {
        beforeEach(function () {
           // data.date =  new Date();
           // data.template = {template: 'h:m:s'};
        });

        it("Tickes after two seconds : ", function () {
            //let clock = new Clock(data.template).start().start();
        });

    });

});
