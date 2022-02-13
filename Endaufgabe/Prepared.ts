namespace DoenerTest {

    export class Prepared {
        position: Vector;
        velocity: Vector;

        x: number;
        y: number;



        constructor(_position: number, _x?: number, _y?: number) {
            console.log("Prepared CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number, _x: number, _y: number): void {
            // console.log("Human move");
        }
        checkOrder(): void {
           // debugger;
            if (refillBreadIsClicked == true || refillTomatoIsClicked == true || refillLettuceIsClicked == true || refillOnionIsClicked == true || refillMeatIsClicked == true) {
                this.drawContainer();
            }

            if (breadIsDrawn == true) {
                this.drawBread();
            }

            if (tomatoIsDrawn == true) {
                this.drawTomato();
            }

            if (lettuceIsDrawn == true) {
                this.drawLettuce();
            }

            if (onionIsDrawn == true) {
                this.drawOnion();
            }

            if (meatIsDrawn == true) {
                this.drawMeat();
            }
        }


        drawContainer(): void {
            // console.log("Human feel");
           // debugger;
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            console.log("draw at position X= " + this.position.x + " Y= " + this.position.y);
            crc2.fillStyle = "grey";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }



        drawBread(): void {
            // console.log("Human feel");
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "orange";
            crc2.strokeStyle = "black";

            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawTomato(): void {
            // console.log("Human draw");
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "red";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(40, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawLettuce(): void {
            // do something
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "yellowgreen";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(30, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawOnion(): void {
            // do something
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "purple";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(20, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawMeat(): void {
            // do something
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "brown";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(10, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }

}