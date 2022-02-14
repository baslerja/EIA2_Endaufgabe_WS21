 namespace DoenerTest {
    
    export class Human {
        position: Vector;
        velocity: Vector;
        mood: string;
        x: number;
        y: number;

        constructor(_position: number, _x?: number, _y?: number) {
            //
        }

        move(_timeslice: number, _x: number, _y: number): void {
            //
        }

        feel(_mood: string): void {
            //
        }

        draw(): void {
            //
        }
        order(): Storage {
            let filler: Storage = {
                bread: 0,
                tomato: 0,
                lettuce: 0,
                onion: 0,
                meat: 0
            };
            return filler;
        }
    }

}