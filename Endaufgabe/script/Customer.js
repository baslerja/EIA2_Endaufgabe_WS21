"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Customer extends DoenerTest.Human {
        myOrder;
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new DoenerTest.Vector(_x, _y);
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.set(100, 0);
            this.myOrder = this.order();
        }
        move(_timeslice, _x, _y) {
            let offset = new DoenerTest.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 100) {
                this.position.x += 10;
                this.velocity.set(10, 0);
                this.velocity.scale(5);
            }
            if (this.position.x > 830) {
                this.position.x -= 10;
                this.velocity.set(-10, 0);
                this.velocity.scale(5);
            }
        }
        feel(_mood) {
            if (_mood == "sad") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.fillStyle = "black";
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.arc(5, -65, 3, 0, 2 * Math.PI);
                DoenerTest.crc2.fill();
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.arc(15, -65, 3, 0, 2 * Math.PI);
                DoenerTest.crc2.fill();
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.arc(10, -55, 8, 0, -1 * Math.PI, true);
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.restore();
            }
            if (_mood == "happy") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.fillStyle = "black";
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.arc(5, -65, 3, 0, 2 * Math.PI);
                DoenerTest.crc2.fill();
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.arc(15, -65, 3, 0, 2 * Math.PI);
                DoenerTest.crc2.fill();
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.arc(10, -55, 8, 0, -1 * Math.PI);
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.restore();
            }
        }
        draw() {
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "#597c9e";
            DoenerTest.crc2.strokeStyle = "black";
            // right arm
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            // left arm
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            // body
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            // head
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.arc(10, -60, 20, 0, 2 * Math.PI);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.restore();
        }
        order() {
            let guestOrder = {
                bread: 1,
                tomato: DoenerTest.randomOrder(),
                lettuce: DoenerTest.randomOrder(),
                onion: DoenerTest.randomOrder(),
                meat: DoenerTest.randomOrder()
            };
            return guestOrder;
        }
    }
    DoenerTest.Customer = Customer;
    // function randomOrder(): number {
    //     let random: number = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    //     return random;
    // }
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Customer.js.map