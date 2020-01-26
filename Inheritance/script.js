/*jshint esversion: 6 */
(function() {
        'use strict';
        /**
         * This function accepts an array of strings that
         * specifies a list of banned words. The function returns the string after removing all the
         * banned words.
         * its easy. and I solve it in 10 minutes.
         *
         * @param word : a list of banned strings to be removed.
         * @return {string[]} : a string do not include the word passed in the parameter.
         */

        let filter = {
            statement:"",
            word:[],
            String.prototype.filter(){
              return this.statement.split(" ").filter(x => !this.word.toString().includes(x));
            }
        }

        console.log("This house is not badWord nice!".filter(['not', 'badWord']));

        describe("filter", function () {
            'use strict';
            context("filter banned words: ", function () {
                beforeEach(function () {

                    filter.statement = "This house is not badWord nice!";
                    filter.word=["not","badWord"];
                });

                it("the statement without bad words", function () {
                    assert.equal(filter.String.prototype.filter(),"This house is nice!");
                });

            });

        });

    }
)();