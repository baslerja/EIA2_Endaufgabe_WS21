"use strict";
var DoenerTest;
(function (DoenerTest) {
    DoenerTest.addBreadIsClicked = false;
    DoenerTest.addTomatoIsClicked = false;
    DoenerTest.addLettuceIsClicked = false;
    DoenerTest.addOnionIsClicked = false;
    DoenerTest.addMeatIsClicked = false;
    DoenerTest.breadIsDrawn = false;
    DoenerTest.tomatoIsDrawn = false;
    DoenerTest.lettuceIsDrawn = false;
    DoenerTest.onionIsDrawn = false;
    DoenerTest.meatIsDrawn = false;
    function listenToAddButtons() {
        document.querySelector("#addB").addEventListener("click", addBread);
        document.querySelector("#addT").addEventListener("click", addTomato);
        document.querySelector("#addL").addEventListener("click", addLettuce);
        document.querySelector("#addO").addEventListener("click", addOnion);
        document.querySelector("#addM").addEventListener("click", addMeat);
        document.querySelector("#pay").addEventListener("click", DoenerTest.cashUpOrder);
    }
    DoenerTest.listenToAddButtons = listenToAddButtons;
    function addBread() {
        DoenerTest.addBreadIsClicked = true;
        DoenerTest.breadIsDrawn = true;
        console.log("bread was clicked");
        DoenerTest.currentOrder.bread++;
        DoenerTest.counterLeft.bread -= 10;
        let meter = document.querySelector("#meterB");
        meter.setAttribute("value", DoenerTest.counterLeft.bread / 100);
        /*  console.log("bread was added");
         console.log("current order is: ");
         console.log(currentOrder) */
        let displayIngredient = new DoenerTest.Prepared(1, 750, 180);
        displayIngredient.drawBread();
        DoenerTest.drawOrders.push(displayIngredient);
        if (DoenerTest.counterLeft.bread <= 0) {
            alert("refill bread!");
        }
    }
    DoenerTest.addBread = addBread;
    function addTomato() {
        DoenerTest.addTomatoIsClicked = true;
        DoenerTest.tomatoIsDrawn = true;
        DoenerTest.currentOrder.tomato++;
        DoenerTest.counterLeft.tomato -= 10;
        let meter = document.querySelector("#meterT");
        meter.setAttribute("value", DoenerTest.counterLeft.tomato / 100);
        let displayIngredient = new DoenerTest.Prepared(1, 750, 180);
        //displayIngredient.drawTomato();
        DoenerTest.drawOrders.push(displayIngredient);
        if (DoenerTest.counterLeft.tomato <= 0) {
            alert("refill tomatos!");
        }
    }
    DoenerTest.addTomato = addTomato;
    function addLettuce() {
        DoenerTest.addLettuceIsClicked = true;
        DoenerTest.lettuceIsDrawn = true;
        DoenerTest.currentOrder.lettuce++;
        DoenerTest.counterLeft.lettuce -= 10;
        let meter = document.querySelector("#meterL");
        meter.setAttribute("value", DoenerTest.counterLeft.lettuce / 100);
        let displayIngredient = new DoenerTest.Prepared(1, 750, 180);
        displayIngredient.drawLettuce();
        DoenerTest.drawOrders.push(displayIngredient);
        if (DoenerTest.counterLeft.lettuce <= 0) {
            alert("refill lettuce!");
        }
    }
    DoenerTest.addLettuce = addLettuce;
    function addOnion() {
        DoenerTest.addOnionIsClicked = true;
        DoenerTest.onionIsDrawn = true;
        DoenerTest.currentOrder.onion++;
        DoenerTest.counterLeft.onion -= 10;
        let meter = document.querySelector("#meterO");
        meter.setAttribute("value", DoenerTest.counterLeft.onion / 100);
        let displayIngredient = new DoenerTest.Prepared(1, 750, 180);
        displayIngredient.drawOnion();
        DoenerTest.drawOrders.push(displayIngredient);
        if (DoenerTest.counterLeft.onion <= 0) {
            alert("refill onion!");
        }
    }
    DoenerTest.addOnion = addOnion;
    function addMeat() {
        DoenerTest.addMeatIsClicked = true;
        DoenerTest.meatIsDrawn = true;
        DoenerTest.currentOrder.meat++;
        DoenerTest.counterLeft.meat -= 10;
        let meter = document.querySelector("#meterM");
        meter.setAttribute("value", DoenerTest.counterLeft.meat / 100);
        let displayIngredient = new DoenerTest.Prepared(1, 750, 180);
        //displayIngredient.drawMeat();
        DoenerTest.drawOrders.push(displayIngredient);
        if (DoenerTest.counterLeft.meat <= 0) {
            alert("refill meat!");
        }
    }
    DoenerTest.addMeat = addMeat;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=addIngredients.js.map