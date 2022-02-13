"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Worker extends DoenerTest.Human {
        // currentOrder: Storage
        constructor(_position, _x, _y) {
            super(_position);
            // console.log("Worker CONSTRUCTOR");
            this.position = new DoenerTest.Vector(_x, _y);
            // this.x = 100;
            // this.y = 500;
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.set(500, 0);
            //  this.currentOrder = this.order();
            //this.velocity.scale(5);
        }
        move(_timeslice, _x, _y) {
            //  console.log("Worker move");
            let offset = new DoenerTest.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            // this.position.add(offset);
            // this.position.x = _x;
            // this.position.y = _y;
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
            // if (this.position.x < _x) {
            //     this.position.x++;
            // }
            // if (this.position.x > _x) {
            //     this.position.x--;
            // }
            // if (this.position.y < _y) {
            //     this.position.y++;
            // }
            // if (this.position.y > _y) {
            //     this.position.y--;
            // }
            /*    if (this.position.x < 80) {
                   this.position.x += 10;
                   this.velocity.set(15, 0);
                   this.velocity.scale(5);
   
               }
   
               if (this.position.x > 600) {
                   this.position.x -= 10;
                   this.velocity.set(-15, 0);
                   this.velocity.scale(5);
               } */
        }
        feel(_mood) {
            // console.log("Worker feel");
            if (_mood == "tired") {
                // display neutral face
                // console.log("workers mood is tired");
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(12, -60);
                DoenerTest.crc2.lineTo(15, -60);
                DoenerTest.crc2.moveTo(8, -60);
                DoenerTest.crc2.lineTo(5, -60);
                DoenerTest.crc2.moveTo(3, -65);
                DoenerTest.crc2.lineTo(8, -67);
                DoenerTest.crc2.moveTo(18, -65);
                DoenerTest.crc2.lineTo(12, -67);
                DoenerTest.crc2.moveTo(10, -52);
                DoenerTest.crc2.ellipse(10, -52, 1, 2, 0, 20, 40);
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
                // display neutral face
                //console.log("workers mood is neutral");
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
                // display neutral face
                // console.log("workers mood is stressed");
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
            DoenerTest.crc2.fillStyle = "yellow";
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