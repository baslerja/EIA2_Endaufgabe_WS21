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
            //
        }
        move(_timeslice, _x, _y) {
            //
        }
        feel(_mood) {
            //
        }
        draw() {
            //
        }
        order() {
            let filler = {
                bread: 0,
                tomato: 0,
                lettuce: 0,
                onion: 0,
                meat: 0
            };
            return filler;
        }
    }
    DoenerTest.Human = Human;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Human.js.map