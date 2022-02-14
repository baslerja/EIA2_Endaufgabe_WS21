"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Worker extends DoenerTest.Human {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new DoenerTest.Vector(_x, _y);
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.set(500, 0);
        }
        move(_timeslice, _x, _y) {
            let offset = new DoenerTest.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            if (DoenerTest.workers[0].position.x < _x) {
                DoenerTest.workers[0].position.x++;
            }
            if (DoenerTest.workers[0].position.x > _x) {
                DoenerTest.workers[0].position.x--;
            }
            if (DoenerTest.workers[0].position.y < _y) {
                DoenerTest.workers[0].position.y++;
            }
            if (DoenerTest.workers[0].position.y > _y) {
                DoenerTest.workers[0].position.y--;
            }
        }
        feel(_mood) {
            if (_mood == "tired") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(12, -60);
                DoenerTest.crc2.lineTo(15, -60);
                DoenerTest.crc2.moveTo(8, -60);
                DoenerTest.crc2.lineTo(5, -60);
                DoenerTest.crc2.arc(12, -60, 8, 0, -1 * Math.PI);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.strokeStyle = "blue";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(20, -75);
                DoenerTest.crc2.lineTo(25, -75);
                DoenerTest.crc2.lineTo(20, -70);
                DoenerTest.crc2.lineTo(25, -70);
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(28, -85);
                DoenerTest.crc2.lineTo(33, -85);
                DoenerTest.crc2.lineTo(28, -80);
                DoenerTest.crc2.lineTo(33, -80);
                DoenerTest.crc2.stroke();
            }
            if (_mood == "neutral") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -65);
                DoenerTest.crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
                DoenerTest.crc2.moveTo(17, -55);
                DoenerTest.crc2.lineTo(3, -55);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.stroke();
            }
            if (_mood == "stressed") {
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
                DoenerTest.crc2.moveTo(10, -52);
                DoenerTest.crc2.ellipse(10, -52, 4, 3, 0, 20, 40);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.fill();
            }
        }
        draw() {
            // console.log("Worker drawing");
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.strokeStyle = "black";
            // hat
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.fillStyle = "white";
            DoenerTest.crc2.rect(-3, -100, 26, 40);
            DoenerTest.crc2.arc(0, -95, 8, 0, 2 * Math.PI);
            DoenerTest.crc2.arc(10, -100, 8, 0, 2 * Math.PI);
            DoenerTest.crc2.arc(20, -95, 8, 0, 2 * Math.PI);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            // right arm
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.fillStyle = "#9e7575";
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
            let currentOrder = {
                bread: 0,
                tomato: 0,
                lettuce: 0,
                onion: 0,
                meat: 0
            };
            return currentOrder;
        }
    }
    DoenerTest.Worker = Worker;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Worker.js.map