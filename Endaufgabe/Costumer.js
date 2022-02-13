"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Customer extends DoenerTest.Human {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("Customer CONSTRUCTOR");
            this.position = new DoenerTest.Vector(_x, _y);
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.set(100, 0);
            this.myOrder = this.showOrder();
            //this.velocity.scale(5);
        }
        move(_timeslice, _x, _y) {
            //console.log("Costumer move");
            let offset = new DoenerTest.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // crc2.resetTransform;
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
            // console.log("Costumer feel");
            if (_mood == "sad") {
                //console.log("costumer is sad");
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -60);
                DoenerTest.crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(8, -65);
                DoenerTest.crc2.lineTo(3, -67);
                DoenerTest.crc2.moveTo(12, -65);
                DoenerTest.crc2.lineTo(18, -67);
                DoenerTest.crc2.moveTo(17, -50);
                DoenerTest.crc2.arcTo(7, -55, 5, -50, 5);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.stroke();
            }
            if (_mood == "happy") {
                // display happy face
                // console.log("costumer is happy");
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -65);
                DoenerTest.crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
                DoenerTest.crc2.moveTo(17, -55);
                DoenerTest.crc2.arcTo(7, -50, 5, -55, 5);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.stroke();
            }
        }
        draw() {
            // console.log("Customer drawing");
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "red";
            DoenerTest.crc2.strokeStyle = "black";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //Arm links
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //Bauch
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //Kopf
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //Füße -> linker Fuß = Nullpunkt
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(0, 0, 8, 7, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(20, 0, 8, 7, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.restore();
            //Gesicht
            DoenerTest.crc2.fillStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(15, -50, 2, 2, 0, 20, 40);
            DoenerTest.crc2.moveTo(15, -50);
            DoenerTest.crc2.lineTo(15, -45);
            DoenerTest.crc2.lineTo(10, -45);
            DoenerTest.crc2.lineTo(20, -45);
            DoenerTest.crc2.lineTo(15, -45);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -55, 1, 1, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(20, -55, 1, 1, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        showOrder() {
            let guestOrder = {
                bread: 1,
                tomato: randomOrder(),
                lettuce: randomOrder(),
                onion: randomOrder(),
                meat: randomOrder()
            };
            return guestOrder;
        }
    }
    DoenerTest.Customer = Customer;
    /*function order(): Storage {
       let guestOrder: Storage = {
           bread: 1,
           tomato: randomOrder(),
           lettuce: randomOrder(),
           onion: randomOrder(),
           meat: randomOrder(),
       }
       return guestOrder;
}*/
    function randomOrder() {
        let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        return random;
    }
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Costumer.js.map