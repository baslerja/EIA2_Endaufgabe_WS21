namespace DoenerTest {

    export class Customer extends Human {

        myOrder: Storage;

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.set(100, 0);
            this.myOrder = this.order();
        }

        move(_timeslice: number, _x: number, _y: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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

        feel(_mood: string): void {

            if (_mood == "sad") {

                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                crc2.moveTo(15, -60);
                crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                crc2.moveTo(8, -65);
                crc2.lineTo(3, -67);
                crc2.moveTo(12, -65);
                crc2.lineTo(18, -67);
                crc2.moveTo(17, -50);
                crc2.arcTo(7, -55, 5, -50, 5);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
            }

            if (_mood == "happy") {

                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
                crc2.moveTo(15, -65);
                crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
                crc2.moveTo(17, -55);
                crc2.arcTo(7, -50, 5, -55, 5);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
            }
        }

        draw(): void {
           
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "#597c9e";
            crc2.strokeStyle = "black";

            // right arm
            crc2.beginPath();
            crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // left arm
            crc2.beginPath();
            crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            // body
            crc2.beginPath();
            crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            // head
            crc2.beginPath();
            crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();

        }

        order(): Storage {
            let guestOrder: Storage = {
                bread: 1,
                tomato: randomOrder(),
                lettuce: randomOrder(),
                onion: randomOrder(),
                meat: randomOrder()
            };
            return guestOrder;
        }
    }

    function randomOrder(): number {

        let random: number = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        return random;
    }

}

