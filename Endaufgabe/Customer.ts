namespace DoenerTest {

    export class Customer extends Human {

        public myOrder: Storage;

        public constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.set(100, 0);
            this.myOrder = this.order();
        }

        public move(_timeslice: number, _x: number, _y: number): void {
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

        public feel(_mood: string): void {

            if (_mood == "sad") {

                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";

                crc2.beginPath();
                crc2.arc(5, -65, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                
                crc2.beginPath();
                crc2.arc(15, -65, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                
                crc2.beginPath();
                crc2.arc(10, -55, 8, 0, -1 * Math.PI, true);
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }

            if (_mood == "happy") {

                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";

                crc2.beginPath();
                crc2.arc(5, -65, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                
                crc2.beginPath();
                crc2.arc(15, -65, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                
                crc2.beginPath();
                crc2.arc(10, -55, 8, 0, -1 * Math.PI);
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }
        }

        public draw(): void {
           
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
            crc2.arc(10, -60, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }

        public order(): Storage {
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

    // function randomOrder(): number {

    //     let random: number = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    //     return random;
    // }

}

