namespace DoenerTest {

    export let addBreadIsClicked: boolean = false;
    export let addTomatoIsClicked: boolean = false;
    export let addLettuceIsClicked: boolean = false;
    export let addOnionIsClicked: boolean = false;
    export let addMeatIsClicked: boolean = false;

    export let breadIsDrawn: boolean = false;
    export let tomatoIsDrawn: boolean = false;
    export let lettuceIsDrawn: boolean = false;
    export let onionIsDrawn: boolean = false;
    export let meatIsDrawn: boolean = false;

    export function listenToAddButtons(): void {
        document.querySelector("#addB").addEventListener("click", addBread);
        document.querySelector("#addT").addEventListener("click", addTomato);
        document.querySelector("#addL").addEventListener("click", addLettuce);
        document.querySelector("#addO").addEventListener("click", addOnion);
        document.querySelector("#addM").addEventListener("click", addMeat);
        document.querySelector("#pay").addEventListener("click", cashUpOrder);
    }

    export function addBread(): void {
        addBreadIsClicked = true;
        breadIsDrawn = true;
        console.log("bread was clicked");
        currentOrder.bread++;
        counterLeft.bread -= 10;
        let meter: any = document.querySelector("#meterB");
        meter.setAttribute("value", counterLeft.bread / 100);
        
        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawBread();
        drawOrders.push(displayIngredient);

        if (counterLeft.bread <= 0) {

            alert("refill bread!");
        }
    }

    export function addTomato(): void {
        addTomatoIsClicked = true;
        tomatoIsDrawn = true;
        currentOrder.tomato++;
        counterLeft.tomato -= 10;
        let meter: any = document.querySelector("#meterT");
        meter.setAttribute("value", counterLeft.tomato / 100);

        let displayIngredient: Prepared = new Prepared(1, 750, 180);

        drawOrders.push(displayIngredient);

        if (counterLeft.tomato <= 0) {

            alert("refill tomatos!");
        }
    }

    export function addLettuce(): void {
        addLettuceIsClicked = true;
        lettuceIsDrawn = true;

        currentOrder.lettuce++;
        counterLeft.lettuce -= 10;
        let meter: any = document.querySelector("#meterL");
        meter.setAttribute("value", counterLeft.lettuce / 100);

        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawLettuce();
        drawOrders.push(displayIngredient);

        if (counterLeft.lettuce <= 0) {

            alert("refill lettuce!");
        }
    }

    export function addOnion(): void {
        addOnionIsClicked = true;
        onionIsDrawn = true;
        currentOrder.onion++;
        counterLeft.onion -= 10;
        let meter: any = document.querySelector("#meterO");
        meter.setAttribute("value", counterLeft.onion / 100);

        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawOnion();
        drawOrders.push(displayIngredient);

        if (counterLeft.onion <= 0) {

            alert("refill onion!");
        }
    }

    export function addMeat(): void {
        addMeatIsClicked = true;
        meatIsDrawn = true;
        currentOrder.meat++;
        counterLeft.meat -= 10;
        let meter: any = document.querySelector("#meterM");
        meter.setAttribute("value", counterLeft.meat / 100);

        let displayIngredient: Prepared = new Prepared(1, 750, 100);
        
        drawOrders.push(displayIngredient);

        if (counterLeft.meat <= 0) {

            alert("refill meat!");
        }
    }
}