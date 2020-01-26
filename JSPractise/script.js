/*jshint esversion: 6*/
(function () {
'use strict';

    /** this is where function desc goes
     * @param x where params goes
     * @return {string} what you will get back
     */

    /**
     *
     * @type {{arr: [], number: number, recursiveNth: recursiveNth, reverseArray: (function(): T[]), arrayToList: (function(): {}), reverseArrayInPlace: (function(): T[]), nth: nth, prepend: (function(): {}), list: {}, element: {}, listToArray: (function(): [])}}
     */
    let operations = {
        number:0,
        arr: [],
        list:{},
        element:{},
        reverseArray : function(){
            const newArr = this.arr.reverse();
            return newArr;
        },
        reverseArrayInPlace: function(){
            return this.arr.reverse();
        },
        arrayToList: function () {

            let list = {};
            let value = null;
            let rest = null;
            operations.arr.slice(0).reverse().map((element, i)=>{
                list.value = element;

                if ( i === 0 ) {
                    list.rest = {};
                } else {
                    list.rest = { value, rest };
                }
                 value = list.value;
                 rest = list.rest;
            });

            return list;


            },
        listToArray: function () {

            const arrOut = [];
            for ( let node = operations.list; node; node = node.rest ) {
                if ( node.value !== undefined ) {
                    arrOut.push(node.value);
                } else {
                    break;
                }
            }
            return  arrOut;
        },
        prepend : function () {
            var newList = {};
            newList.value = operations.element.value;
            newList.rest = operations.element.rest = operations.list;

            return newList;
        },
        nth :function () {

            var count = 0;

            for ( var node = operations.list; node; node = node.rest) {

                if ( count === operations.number ) {
                    return node.value;
                }
                count++;
            }

            return "Not found!";

        },
        recursiveNth: function () {
            if ( operations.number === 0 || operations.list.value === undefined ) {
                return operations.list.value;
            }  else {
                return operations.nth( operations.list.rest, operations.number - 1 );
            }
        }
    };


    describe("operations", function () {

        context("when the array equal [\"A\", \"B\", \"C\"]: ", function () {
            beforeEach(function () {
                operations.arr = ["A","B","C"];
            });

            it("the reverseArray method of an array : ", function () {
                assert.deepEqual(operations.reverseArray(), ["C","B","A"]);
            });

            it("the reverseArrayInPlace method of an array : ", function () {
                assert.deepEqual(operations.reverseArrayInPlace(), ["C","B","A"]);
            });


        });

        context("when the list equal value: { 1,\n" +
            "            rest: {\n" +
            "                value: 2,\n" +
            "                rest: {\n" +
            "                    value: 3,\n" +
            "                    rest: null\n" +
            "                }\n" +
            "            }" +
            "}: ", function () {
            beforeEach(function () {
                operations.list = {
                    value: "A",
                    rest: {
                        value: "B",
                        rest: {
                            value: "C",
                            rest: null
                        }
                    }
                };
                operations.arr = ["A","B","C"];

            });

            it("the arrayToList method of the [\"C\",\"B\",\"A\"] array : ", function () {
                assert.deepEqual(operations.arrayToList(), {
                    value: "A",
                    rest: {
                        value: "B",
                        rest: {
                            value: "C",
                            rest: {}
                        }
                    }
                });
            });

            it("the listToArray method of the  {\n" +
                "                    value: \"A\",\n" +
                "                    rest: {\n" +
                "                        value: \"B\",\n" +
                "                        rest: {\n" +
                "                            value: \"C\",\n" +
                "                            rest: {}\n" +
                "                        }\n" +
                "                    }\n" +
                "                } list : ", function () {
                let deepEqual;
                deepEqual = assert.deepEqual(operations.listToArray(), ["A", "B", "C"]);
            });
        });
    });
})();