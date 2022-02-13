"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Human {
        constructor(_position, _x, _y) {
            /*    console.log("Human CONSTRUCTOR");
               this.position = new Vector(_x, _y);
               this.velocity = new Vector(0, 0);
               this.velocity.random(100, 150); */
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