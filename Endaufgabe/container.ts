
namespace DoenerTest {

    export let refillBreadIsClicked: boolean = false;
    export let backToBread: boolean = false;

    export let refillTomatoIsClicked: boolean = false;
    export let backToTomato: boolean = false;

    export let refillLettuceIsClicked: boolean = false;
    export let backToLettuce: boolean = false;

    export let refillOnionIsClicked: boolean = false;
    export let backToOnion: boolean = false;

    export let refillMeatIsClicked: boolean = false;
    export let backToMeat: boolean = false;


    export function listenToButtons(): void {

        document.querySelector("#buyBread").addEventListener("click", buyBread);
        document.querySelector("#buyTomato").addEventListener("click", buyTomato);
        document.querySelector("#buyLettuce").addEventListener("click", buyLettuce);
        document.querySelector("#buyOnion").addEventListener("click", buyOnion);
        document.querySelector("#buyMeat").addEventListener("click", buyMeat);

        document.querySelector("#refillBread").addEventListener("click", refillBread);
        document.querySelector("#refillTomato").addEventListener("click", refillTomato);
        document.querySelector("#refillLettuce").addEventListener("click", refillLettuce);
        document.querySelector("#refillOnion").addEventListener("click", refillOnion);
        document.querySelector("#refillMeat").addEventListener("click", refillMeat);
    }


    export function refillBread(): void {
        console.log("worker is going to refill bread");

        let meterB: any = document.querySelector("#meterB").getAttribute("value");
        let amountMissing: number = 100 - meterB * 100;
        storageLeft.bread -= amountMissing;
        let meterStockB: any = document.querySelector("#stockMeterB");
        meterStockB.setAttribute("value", storageLeft.bread / 1000);
        refillBreadIsClicked = true;
    }

    export function bringBread(): void {

        if (workers[0].position.x == 60 && workers[0].position.y == 120) {
            backToBread = true;
            let meter: any = document.querySelector("#meterB");
            counterLeft.bread = 100;
            meter.setAttribute("value", 1);
            refillBreadIsClicked = false;
        }
    }

    export function refillTomato(): void {
        console.log("worker is going to refill tomato");

        let meterT: any = document.querySelector("#meterT").getAttribute("value");
        let amountMissing: number = 100 - meterT * 100;
        storageLeft.tomato -= amountMissing;
        let meterStockT: any = document.querySelector("#stockMeterT");
        meterStockT.setAttribute("value", storageLeft.tomato / 1000);
        refillTomatoIsClicked = true;
    }

    export function bringTomato(): void {

        if (workers[0].position.x == 160 && workers[0].position.y == 120) {
            backToTomato = true;
            let meter: any = document.querySelector("#meterT");
            counterLeft.tomato = 100;
            meter.setAttribute("value", 1);
            refillTomatoIsClicked = false;

        }
    }

    export function refillLettuce(): void {
        console.log("worker is going to refill lettuce");


        let meterL: any = document.querySelector("#meterL").getAttribute("value");
        let amountMissing: number = 100 - meterL * 100;
        storageLeft.lettuce -= amountMissing;
        let meterStockL: any = document.querySelector("#stockMeterL");
        meterStockL.setAttribute("value", storageLeft.lettuce / 1000);
        refillLettuceIsClicked = true;


    }
    export function bringLettuce(): void {

        if (workers[0].position.x == 260 && workers[0].position.y == 120) {
            backToLettuce = true;
            let meter: any = document.querySelector("#meterL");
            counterLeft.lettuce = 100;
            meter.setAttribute("value", 1);
            refillLettuceIsClicked = false;
        }
    }

    export function refillOnion(): void {
        console.log("worker is going to refill bread");
        refillOnionIsClicked = true;

        let meterO: any = document.querySelector("#meterO").getAttribute("value");
        let amountMissing: number = 100 - meterO * 100;
        storageLeft.onion -= amountMissing;
        let meterStockO: any = document.querySelector("#stockMeterO");
        meterStockO.setAttribute("value", storageLeft.onion / 1000);
    }

    export function bringOnion(): void {

        if (workers[0].position.x == 360 && workers[0].position.y == 120) {
            backToOnion = true;
            let meter: any = document.querySelector("#meterO");
            counterLeft.onion = 100;
            meter.setAttribute("value", 1);
            refillOnionIsClicked = false;
        }
    }

    export function refillMeat(): void {
        console.log("worker is going to refill meat");
        refillMeatIsClicked = true;

        let meterM: any = document.querySelector("#meterM").getAttribute("value");
        let amountMissing: number = 100 - meterM * 100;
        storageLeft.meat -= amountMissing;
        let meterStockM: any = document.querySelector("#stockMeterM");
        meterStockM.setAttribute("value", storageLeft.meat / 1000);

    }


    export function bringMeat(): void {

        if (workers[0].position.x == 460 && workers[0].position.y == 120) {
            backToMeat = true;
            let meter: any = document.querySelector("#meterM");
            meter.setAttribute("value", 1);
            console.log(storageLeft.meat);
            refillMeatIsClicked = false;
        }
    }





    export function buyBread(): void {
        let stockMeterB: any = document.querySelector("#stockMeterB").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterB * 1000;
        storageLeft.bread += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let b: any = document.querySelector("#stockMeterB");
        b.setAttribute("value", 1);
    }

    export function buyTomato(): void {
        let stockMeterT: any = document.querySelector("#stockMeterT").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterT * 1000;
        storageLeft.tomato += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let t: any = document.querySelector("#stockMeterT");
        t.setAttribute("value", 1);
    }

    export function buyLettuce(): void {
        let stockMeterL: any = document.querySelector("#stockMeterL").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterL * 1000;
        storageLeft.lettuce += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let l: any = document.querySelector("#stockMeterL");
        l.setAttribute("value", 1);
    }

    export function buyOnion(): void {
        let stockMeterO: any = document.querySelector("#stockMeterO").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterO * 1000;
        storageLeft.onion += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let o: any = document.querySelector("#stockMeterO");
        o.setAttribute("value", 1);
    }

    export function buyMeat(): void {
        let stockMeterL: any = document.querySelector("#stockMeterM").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterL * 1000;
        storageLeft.meat += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let m: any = document.querySelector("#stockMeterM");
        m.setAttribute("value", 1);
    }


}        