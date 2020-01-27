/* jshint esversion: 6*/
/*** eslint-disable */
(function () {
        'use strict';

        /**
         * Clock class used to log out the time each second.
         *
         * It took me 30 minutes to debug it and I found that how much its really important to know
         * what 'this' refers to each time we call the render() method. This is very sensitive and interesting.
         * But I did not know how to test it!
         *
         * NOTE : I did not find the second native-prototypes tasks.
         * -- Error creating an instance
         * -- Extended clock
         *    https://javascript.info/native-prototypes
         *    please help me how can I access them.
         *
         */
        class Clock{
            constructor({template}) {
                this.template = template;
            }
            render() {
                let date = new Date();

                let hours = date.getHours();
                if (hours < 10) hours = '0' + hours;

                let mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;

                let secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;

                let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
                return output;
            }
            stop() {
                clearInterval(this.timer);
            }

            start() {
                this.render();
                this.timer = setInterval(()=>console.log(this.render()), 1000);
            }
        }

        let clock = new Clock({template: 'h:m:s'});
        clock.start();

        let data = {
            statement: "",
            word: "",
            arr: [],
            subject: "",
            name1:"",
            name2:""
        };



        describe("Clock", function () {

            context("Testing the ticks after few seconds: ", function () {
                beforeEach(function () {
                    data.date =  new Date();
                    data.template = {template: 'h:m:s'};
                });

                it("Tickes after two seconds : ", function () {
                    //let clock = new Clock(data.template).start().start();
                });

            });

        });


    }
)();