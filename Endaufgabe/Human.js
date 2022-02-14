"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Human {
        position;
        velocity;
        mood;
        x;
        y;
        constructor(_position, _x, _y) {
            //  console.log("Human CONSTRUCTOR");
        }
        move(_timeslice, _x, _y) {
            // console.log("Human move");
        }
        feel(_mood) {
            // console.log("Human feel");
        }
        draw() {
            // console.log("Human draw");
        }
        order() {
            // do something
        }
    }
    DoenerTest.Human = Human;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Human.js.map