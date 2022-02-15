 namespace DoenerTest {
    
    export abstract class Human {
        public position: Vector;
        public velocity: Vector;
        public mood: string;
        public x: number;
        public y: number;

        public constructor(_position: number, _x?: number, _y?: number) {
            //
        }

        public move(_timeslice: number, _x: number, _y: number): void {
            //
        }

        public feel(_mood: string): void {
            //
        }

        public draw(): void {
            //
        }

        public order(): Storage {
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