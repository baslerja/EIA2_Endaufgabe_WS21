 namespace DoenerTest {
    
    export class Human {
        position: Vector;
        velocity: Vector;
        mood: string;
        x: number;
        y: number;

        constructor(_position: number, _x?: number, _y?: number) {
        //  console.log("Human CONSTRUCTOR");
        
        }

        move(_timeslice: number, _x: number, _y: number): void {
            // console.log("Human move");
        }

        feel(_mood: string): void {
            // console.log("Human feel");
        }

        draw(): void {
            // console.log("Human draw");
        }
        order(): void {
            // do something
        }
    }

}