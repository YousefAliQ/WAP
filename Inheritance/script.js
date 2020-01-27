/* jshint esversion: 6*/
(function () {
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
        String.prototype.filter = function (word) {
            return this.split(" ").filter(x => !word.toString().includes(x)).join(" ");
        };

        /**
         * This function is a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
         * that works by repeatedly stepping through the list to be sorted.
         *
         * @param arr : array of numbers
         * @return {*} : sorted array of numbers using bubble sort algorithm
         */
        const bubbleSort = function (arr) {
            let len = arr.length;

            for (let i = 0; i < len; i++) {
                let stop;
                for (let j = 0, stop = len - i; j < stop; j++) {
                    if (arr[j] > arr[j + 1]) {
                        swap(arr, j, j + 1);
                    }
                }
            }

            return arr;
        }

        /**
         * change two values inside of array of integers by swapping them.
         * used as a helper function to the bubble sort function.
         *
         * @param arr : array of integers
         * @param first_Index : first position to change it's value with the second position
         * @param second_Index : second position to change it's value with the first position
         */
        function swap(arr, first_Index, second_Index) {
            var temp = arr[first_Index];
            arr[first_Index] = arr[second_Index];
            arr[second_Index] = temp;
        }


        var Person = function () {
        };
        Person.prototype.initialize = function (name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.describe = function () {
            return this.name + ", " + this.age + " years old.";
        }
        var Student = function () {
        };
        Student.prototype = new Person();
        Student.prototype.learn = function (subject) {
            console.log(this.name + " just learned " + subject);
        }
        var me = new Student();
        me.initialize("John", 25);
        me.learn("Inheritance");


        let data = {
            statement: "",
            word: "",
            arr: []
        };

        describe("filter", function () {

            context("filter banned words: ", function () {
                beforeEach(function () {

                    data.statement1 = "This house is not badWord nice!";
                    data.statement2 = "This house is so nice!";

                    data.word = ["not", "badWord"];

                });

                it("the statement without bad words", function () {
                    assert.equal(data.statement1.filter(data.word), "This house is nice!");
                    assert.equal(data.statement2.filter(data.word), "This house is so nice!");
                });

            });

        });

        describe("Sorting", function () {

            context("sort by bubble sort algorithm: ", function () {
                beforeEach(function () {
                    data.arr = [6, 4, 0, 3, -2, 1];
                });

                it("bubble sort algorithm. ", function () {
                    assert.deepEqual(bubbleSort(data.arr), [-2, 0, 1, 3, 4, 6]);
                });

            });

        });


    }
)();