namespace DoenerTest {

    export class Prepared {
        protected position: Vector;
        protected velocity: Vector;
        protected x: number;
        protected y: number;
        protected randomX: number = 70 * Math.random();

        public constructor(_position: number, _x?: number, _y?: number) {
            this.position = new Vector(_x, _y);
        }

        public move(_timeslice: number, _x: number, _y: number): void {
            this.position.x = workers[0].position.x + 10;                 
            this.position.y = workers[0].position.y - 10;
        }

        public checkOrder(): void {
           
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

        public drawContainer(): void {
        
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x + 30, this.position.y);
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.rect(0, 10, 40, 20);
            crc2.closePath();
            crc2.scale(0.5, 0.5);
            crc2.fill();
            crc2.stroke();
        }

        public drawBread(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(0, -50);
            crc2.bezierCurveTo(25, 30, 75, 30, 100, -50);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        public drawTomato(): void {
            this.randomX = Math.floor(this.randomX);

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "red";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.ellipse(this.randomX, -50, 10, 10, 1, 1, 360);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.ellipse(this.randomX + 30, -50, 10, 10, 1, 1, 360);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        public drawLettuce(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "yellowgreen";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.ellipse(this.randomX + 10, -50, 30, 10, 15, 130, 20);
            crc2.ellipse(this.randomX, -70, 10, 20, 50, 2, 30);
            crc2.ellipse(this.randomX - 20, -60, 15, 10, 50, 2, 30);
            crc2.closePath();
            crc2.fill();
        }

        public drawOnion(): void {
            this.randomX = Math.floor(this.randomX);
            console.log(" X random " + this.randomX);

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "purple";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(this.randomX + 10, -50);
            crc2.bezierCurveTo(60, -60, 20, -40, 10, -50);
            crc2.bezierCurveTo(80, -50, 10, -66, 15, -60);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        public drawMeat(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "black";

            crc2.beginPath();
            crc2.ellipse(this.randomX + 30, -50, 20, 10, 10, 30, 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}