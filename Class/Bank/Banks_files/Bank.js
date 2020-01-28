/* jshint esversion: 6*/
"use strict";

class Bank{
    constructor(accounts) {
        this._accounts = accounts;
        Bank.nextNumber(-1);
    }

     addAccount(){
        let acc = new Account( Bank.nextNumber());
        this._accounts.push(acc);

    }
     addSavingsAccount(interest){
         let accSaving = new SavingsAccount(Bank.nextNumber(),interest);
         this._accounts.push(accSaving);
    }
     addCheckingAccount(overdraft){
         let accChecking = new CheckingAccount(Bank.nextNumber(), overdraft);
         this._accounts.push(accChecking);
    }

    closeAccount(number){
        this._accounts.remove(number);
    }

    getAccount(index){
        return this._accounts[index];
    }
    accountReport(){

    }

    endOfMonth(){

    }

    static nextNumber(i){
        let index;
        if (i === null){
            return index++;
        }else{
            index = i;
        }

    }

}





describe("Bank Accounts Test", function () {

    context("Testing the methods on the bank class: ", function () {
        beforeEach(function () {
            // data.date =  new Date();
            // data.template = {template: 'h:m:s'};
        });

        let bank = new Bank([]);
        it("Add account test : ", function () {
            bank.addAccount()
            assert.deepEqual(bank.getAccount(Bank.nextNumber()),new Account(Bank.nextNumber()));
        });

    });

});
