namespace DoenerTest {
    export let crc2: CanvasRenderingContext2D;
    export let imgData: ImageData;


    export let workers: Worker[] = [];
    export let customers: Customer[] = [];
    export let orders: Storage[] = [];
    export let ordersMade: Storage[] = [];
    export let displayOrders: string[] = [];
    export let drawOrders: Prepared[] = [];
    export let currentCustomerAmount: number = 0;
    export let earnings: number = 0;
    export let happyScore: number = 0;
    console.log(currentCustomerAmount);
    export let info: HTMLElement = document.querySelector("#info");
    export let orderCorrect: boolean;
    export let moodWorker: string;
    export let moodCustomer: string;

    export let xOfWorker: number;
    export let yOfWorker: number;



    export interface Vector {
        x: number;
        y: number;
    }

    export interface Storage {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    export let currentOrder: Storage = {
        bread: 0,
        tomato: 0,
        lettuce: 0,
        onion: 0,
        meat: 0
    };

    export let storageLeft: Storage = {
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000
    };

    export let counterLeft: Storage = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80
    };

    window.addEventListener("load", handleload);
    

    export function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        document.querySelector("#start").addEventListener("click", startGame);
        drawBackground();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);
    }

    export function startGame(): void {

        console.log("START");

        listenToButtons();
        listenToAddButtons();

        workers = [];
        customers = [];
        orders = [];
        ordersMade = [];
        currentCustomerAmount = 0;


        const form: HTMLFormElement = document.querySelector("form")!;
        const data: FormData = new FormData(form);
        const amountStock: string = data.get("amountIngredients") as string;
        let stock: number = parseInt(amountStock + Math.floor);    //string in number parsen
        storageLeft.bread = storageLeft.tomato = storageLeft.lettuce = storageLeft.onion = storageLeft.meat = stock;
        // console.log("Stock Amount: " + stock);

        //chart in bread stock div soll angepasst werden
        let meterB: any = document.querySelector("#stockMeterB");
        meterB.setAttribute("value", stock / 100);
        storageLeft.bread = 10 * stock;
        let meterT: any = document.querySelector("#stockMeterT");
        meterT.setAttribute("value", stock / 100);
        storageLeft.tomato = 10 * stock;
        let meterL: any = document.querySelector("#stockMeterL");
        meterL.setAttribute("value", stock / 100);
        storageLeft.lettuce = 10 * stock;
        let meterO: any = document.querySelector("#stockMeterO");
        meterO.setAttribute("value", stock / 100);
        storageLeft.onion = 10 * stock;
        let meterM: any = document.querySelector("#stockMeterM");
        meterM.setAttribute("value", stock / 100);
        storageLeft.meat = 10 * stock;

        // console.log("Onion bread: " + storageLeft.bread);

        // console.log("Stresslevel Worker: " + stressLevel);




        createWorker(data);
        sendCustomers(data);


        setTimeout(function (): void {
            alert("Time is up! You made " + happyScore + " customers happy today! Reload page to start a new game.");

        }, 60000); //wait 90 seconds
        // console.log("Anzahl Costumer per min: " + amountCostumer);

        // asdf();

        /* orderInTheMaking();
        console.log("oder in the making aufruf");
    */

        //return false; // prevent reload // Quelle: https://dev.to/deciduously/formdata-in-typescript-24cl
    }

    export function createWorker(data: FormData): void {

        const amountWorker: string = data.get("amountWorker") as string;    //form Data anzahl worker als string holen
        // console.log("Anzahl Worker: " + amountWorker);
        let amount: number = parseInt(amountWorker);    //string in number parsen
        // let worker: Human = new Worker(300, 300);

        for (let index: number = 0; index < amount; index++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 50;
            randomX = Math.floor(randomX);
            let worker: Human = new Worker(1, randomX, 200);
            worker.draw();
            worker.feel("tired");
            workers.push(worker);

        }
    }

    async function sendCustomers(data: FormData): Promise<void> {
        const amountCustomer: string = data.get("amountCustomer") as string;    //form Data anzahl worker als string holen
        let amountC: number = parseInt(amountCustomer);

        for (let index: number = 0; index < amountC; index++) {      //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden
            await new Promise(f => setTimeout(f, 60000 / amountC));     // Math.floor(Math.random() * (60000 - 1000 + 1)) + 1000  
            createCustomer();

        }
    }

    export function createCustomer(): void {

        // console.log('new customer created'); 
        let customer: Customer = new Customer(1, 830, 380);
        orders.push(customer.myOrder);
        customer.feel("happy");
        customer.draw();
        customers.push(customer);
        customer.move(1 / 50);

        console.log(" Order of Customer: ");
        console.log(customer.myOrder);


        // info.innerHTML = " ";
        let firstOrder: string = "Ich hätte gerne einen Döner mit " + customer.myOrder.tomato + " mal Tomaten, " + customer.myOrder.lettuce + " mal Kraut, " + customer.myOrder.onion + " mal Zwiebeln und " + customer.myOrder.meat + " mal Fleisch." + "<br> " + "<br> ";
        displayOrders.push(firstOrder);
        // info.innerHTML.get(displayOrders) as string;
        info.innerHTML = displayOrders;
        currentCustomerAmount++;


        //console.log(1 + index + " customers erstellt");
        // console.log("c position = " + customer.position.x + " and " + customer.position.y);

    }

    function drawBackground(): void {
        console.log("Background is drawing");



        crc2.fillStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



        crc2.resetTransform();
        crc2.save();
        crc2.translate(10, 10);

        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 100);
        crc2.lineTo(700, 100);
        crc2.lineTo(700, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(100, 250);

        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(550, 50);
        crc2.lineTo(0, 50);
        crc2.lineTo(0, 0);
        crc2.lineTo(550, 0);
        crc2.lineTo(550, 50);
        crc2.lineTo(550, 0);
        crc2.lineTo(550, -140);
        crc2.lineTo(610, -140);
        crc2.lineTo(610, 50);



        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(895, 395);
        crc2.strokeStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -150);
        crc2.lineTo(-50, -180);
        crc2.lineTo(-50, -30);

        crc2.closePath();
        //crc2.fill();
        crc2.stroke();

        crc2.restore();



        crc2.resetTransform();
        crc2.save();
        crc2.translate(200, 255);

        crc2.fillStyle = "red";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(120, 255);

        crc2.fillStyle = "orange";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(280, 255);

        crc2.fillStyle = "greenyellow";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(360, 255);

        crc2.fillStyle = "purple";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(440, 255);

        crc2.fillStyle = "brown";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(20, 20);

        crc2.fillStyle = "orange";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(120, 20);

        crc2.fillStyle = "red";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(220, 20);

        crc2.fillStyle = "greenyellow";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(320, 20);

        crc2.fillStyle = "purple";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(420, 20);

        crc2.fillStyle = "brown";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();



        // Kasse:

        crc2.resetTransform();
        crc2.save();
        crc2.translate(550, 255);

        crc2.fillStyle = "gold";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(80, 40);
        crc2.lineTo(80, 0);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -15);
        crc2.lineTo(30, -15);
        crc2.lineTo(30, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        crc2.restore();
    }


    export function update(_x: number, _y: number): any {
        crc2.putImageData(imgData, 1, 1);

        moodCheck();
        workerWalkCheck();

        for (let worker of workers) {
            worker.draw();
            worker.move(1 / 50, xOfWorker, yOfWorker);
            worker.feel(moodWorker);
        }

        for (let customer of customers) {
            customer.move(1 / 50, _x, _y);
            customer.draw();
            customer.feel("happy");
            customers[0].feel(moodCustomer);
            // console.log("update c");
        }
        for (let ingredient of drawOrders) {
            //ingredient.move(1 / 50, _x, _y);
            ingredient.checkOrder();
            console.log("checkOrder Aufruf");
            //ingredient.move(1 / 50, xOfWorker + 10, yOfWorker - 10);

            // console.log("update c");
        }




    }


    export function moodCheck(): void {

        //mood Worker
        const form: HTMLFormElement = document.querySelector("form")!;
        const data: FormData = new FormData(form);
        let stressLevel: string = data.get("stressLevel") as string;    //form Data stressLevel of worker als string holen

        if (stressLevel == "low") {
            if (currentCustomerAmount <= 1) {
                moodWorker = "tired";
            }
            if (currentCustomerAmount == 2) {
                moodWorker = "neutral";
            }
            if (currentCustomerAmount >= 3) {
                moodWorker = "stressed";
            }
        }

        if (stressLevel == "high") {
            if (currentCustomerAmount <= 2) {
                moodWorker = "tired";
            }
            if (currentCustomerAmount == 3) {
                moodWorker = "neutral";
            }
            if (currentCustomerAmount >= 5) {
                moodWorker = "stressed";
            }
        }

        //mood Customer
        if (orderCorrect == false) {
            moodCustomer = "sad";
        }
        else {
            moodCustomer = "happy";
        }
    }



    export function workerWalkCheck(): void {
        // Walk between Containers and Counter
        if (refillBreadIsClicked == true) {
            bringBread();
            xOfWorker = 60;
            yOfWorker = 120;
        }
        if (backToBread == true) {
            xOfWorker = 120;
            yOfWorker = 245;
        }

        if (refillTomatoIsClicked == true) {
            bringTomato();
            xOfWorker = 160;
            yOfWorker = 120;
        }
        if (backToTomato == true) {
            xOfWorker = 210;
            yOfWorker = 245;
        }

        if (refillLettuceIsClicked == true) {
            bringLettuce();
            xOfWorker = 260;
            yOfWorker = 120;
        }
        if (backToLettuce == true) {
            xOfWorker = 290;
            yOfWorker = 245;
        }
        if (refillOnionIsClicked == true) {
            bringOnion();
            xOfWorker = 360;
            yOfWorker = 120;
        }
        if (backToOnion == true) {
            xOfWorker = 370;
            yOfWorker = 245;
        }
        if (refillMeatIsClicked == true) {
            bringMeat();
            xOfWorker = 460;
            yOfWorker = 120;
        }
        if (backToMeat == true) {
            xOfWorker = 450;
            yOfWorker = 245;
        }

        // Walk To Cash Register

        if (payIsClicked == true) {
            xOfWorker = 570;
            yOfWorker = 230;
        }
        if (xOfWorker == workers[0].position.x && yOfWorker == workers[0].position.y) {
            payIsClicked = false;
        }

        // Walk to add Ingredients at Counter

        if (addBreadIsClicked == true) {
            xOfWorker = 125;
            yOfWorker = 245;
        }
        if (xOfWorker == workers[0].position.x && yOfWorker == workers[0].position.y) {
            addBreadIsClicked = false;
        }

        if (addTomatoIsClicked == true) {
            xOfWorker = 210;
            yOfWorker = 245;
        }
        if (xOfWorker == workers[0].position.x && yOfWorker == workers[0].position.y) {
            addTomatoIsClicked = false;
        }

        if (addLettuceIsClicked == true) {
            xOfWorker = 290;
            yOfWorker = 245;
        }
        if (xOfWorker == workers[0].position.x && yOfWorker == workers[0].position.y) {
            addLettuceIsClicked = false;
        }

        if (addOnionIsClicked == true) {
            xOfWorker = 370;
            yOfWorker = 245;
        }
        if (xOfWorker == workers[0].position.x && yOfWorker == workers[0].position.y) {
            addOnionIsClicked = false;
        }
        if (addMeatIsClicked == true) {
            xOfWorker = 450;
            yOfWorker = 245;
        }
        if (xOfWorker == workers[0].position.x && yOfWorker == workers[0].position.y) {
            addMeatIsClicked = false;
        }
    }
}