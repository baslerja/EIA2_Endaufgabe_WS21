"use strict";
var DoenerTest;
(function (DoenerTest) {
    DoenerTest.refillBreadIsClicked = false;
    DoenerTest.backToBread = false;
    DoenerTest.refillTomatoIsClicked = false;
    DoenerTest.backToTomato = false;
    DoenerTest.refillLettuceIsClicked = false;
    DoenerTest.backToLettuce = false;
    DoenerTest.refillOnionIsClicked = false;
    DoenerTest.backToOnion = false;
    DoenerTest.refillMeatIsClicked = false;
    DoenerTest.backToMeat = false;
    function listenToButtons() {
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
    DoenerTest.listenToButtons = listenToButtons;
    function refillBread() {
        console.log("worker is going to refill bread");
        let meterB = document.querySelector("#meterB").getAttribute("value");
        let amountMissing = 100 - meterB * 100;
        DoenerTest.storageLeft.bread -= amountMissing;
        let meterStockB = document.querySelector("#stockMeterB");
        meterStockB.setAttribute("value", DoenerTest.storageLeft.bread / 1000);
        DoenerTest.refillBreadIsClicked = true;
    }
    DoenerTest.refillBread = refillBread;
    function bringBread() {
        if (DoenerTest.workers[0].position.x == 60 && DoenerTest.workers[0].position.y == 120) {
            DoenerTest.backToBread = true;
            let meter = document.querySelector("#meterB");
            DoenerTest.counterLeft.bread = 100;
            meter.setAttribute("value", 1);
            DoenerTest.refillBreadIsClicked = false;
        }
    }
    DoenerTest.bringBread = bringBread;
    function refillTomato() {
        console.log("worker is going to refill tomato");
        let meterT = document.querySelector("#meterT").getAttribute("value");
        let amountMissing = 100 - meterT * 100;
        DoenerTest.storageLeft.tomato -= amountMissing;
        let meterStockT = document.querySelector("#stockMeterT");
        meterStockT.setAttribute("value", DoenerTest.storageLeft.tomato / 1000);
        DoenerTest.refillTomatoIsClicked = true;
    }
    DoenerTest.refillTomato = refillTomato;
    function bringTomato() {
        if (DoenerTest.workers[0].position.x == 160 && DoenerTest.workers[0].position.y == 120) {
            DoenerTest.backToTomato = true;
            let meter = document.querySelector("#meterT");
            DoenerTest.counterLeft.tomato = 100;
            meter.setAttribute("value", 1);
            DoenerTest.refillTomatoIsClicked = false;
        }
    }
    DoenerTest.bringTomato = bringTomato;
    function refillLettuce() {
        console.log("worker is going to refill lettuce");
        let meterL = document.querySelector("#meterL").getAttribute("value");
        let amountMissing = 100 - meterL * 100;
        DoenerTest.storageLeft.lettuce -= amountMissing;
        let meterStockL = document.querySelector("#stockMeterL");
        meterStockL.setAttribute("value", DoenerTest.storageLeft.lettuce / 1000);
        DoenerTest.refillLettuceIsClicked = true;
    }
    DoenerTest.refillLettuce = refillLettuce;
    function bringLettuce() {
        if (DoenerTest.workers[0].position.x == 260 && DoenerTest.workers[0].position.y == 120) {
            DoenerTest.backToLettuce = true;
            let meter = document.querySelector("#meterL");
            DoenerTest.counterLeft.lettuce = 100;
            meter.setAttribute("value", 1);
            DoenerTest.refillLettuceIsClicked = false;
        }
    }
    DoenerTest.bringLettuce = bringLettuce;
    function refillOnion() {
        console.log("worker is going to refill bread");
        DoenerTest.refillOnionIsClicked = true;
        let meterO = document.querySelector("#meterO").getAttribute("value");
        let amountMissing = 100 - meterO * 100;
        DoenerTest.storageLeft.onion -= amountMissing;
        let meterStockO = document.querySelector("#stockMeterO");
        meterStockO.setAttribute("value", DoenerTest.storageLeft.onion / 1000);
    }
    DoenerTest.refillOnion = refillOnion;
    function bringOnion() {
        if (DoenerTest.workers[0].position.x == 360 && DoenerTest.workers[0].position.y == 120) {
            DoenerTest.backToOnion = true;
            let meter = document.querySelector("#meterO");
            DoenerTest.counterLeft.onion = 100;
            meter.setAttribute("value", 1);
            DoenerTest.refillOnionIsClicked = false;
        }
    }
    DoenerTest.bringOnion = bringOnion;
    function refillMeat() {
        console.log("worker is going to refill meat");
        DoenerTest.refillMeatIsClicked = true;
        let meterM = document.querySelector("#meterM").getAttribute("value");
        let amountMissing = 100 - meterM * 100;
        DoenerTest.storageLeft.meat -= amountMissing;
        let meterStockM = document.querySelector("#stockMeterM");
        meterStockM.setAttribute("value", DoenerTest.storageLeft.meat / 1000);
    }
    DoenerTest.refillMeat = refillMeat;
    function bringMeat() {
        if (DoenerTest.workers[0].position.x == 460 && DoenerTest.workers[0].position.y == 120) {
            DoenerTest.backToMeat = true;
            let meter = document.querySelector("#meterM");
            meter.setAttribute("value", 1);
            console.log(DoenerTest.storageLeft.meat);
            DoenerTest.refillMeatIsClicked = false;
        }
    }
    DoenerTest.bringMeat = bringMeat;
    function buyBread() {
        let stockMeterB = document.querySelector("#stockMeterB").getAttribute("value");
        let amountMissing = 1000 - stockMeterB * 1000;
        DoenerTest.storageLeft.bread += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let b = document.querySelector("#stockMeterB");
        b.setAttribute("value", 1);
    }
    DoenerTest.buyBread = buyBread;
    function buyTomato() {
        let stockMeterT = document.querySelector("#stockMeterT").getAttribute("value");
        let amountMissing = 1000 - stockMeterT * 1000;
        DoenerTest.storageLeft.tomato += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let t = document.querySelector("#stockMeterT");
        t.setAttribute("value", 1);
    }
    DoenerTest.buyTomato = buyTomato;
    function buyLettuce() {
        let stockMeterL = document.querySelector("#stockMeterL").getAttribute("value");
        let amountMissing = 1000 - stockMeterL * 1000;
        DoenerTest.storageLeft.lettuce += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let l = document.querySelector("#stockMeterL");
        l.setAttribute("value", 1);
    }
    DoenerTest.buyLettuce = buyLettuce;
    function buyOnion() {
        let stockMeterO = document.querySelector("#stockMeterO").getAttribute("value");
        let amountMissing = 1000 - stockMeterO * 1000;
        DoenerTest.storageLeft.onion += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let o = document.querySelector("#stockMeterO");
        o.setAttribute("value", 1);
    }
    DoenerTest.buyOnion = buyOnion;
    function buyMeat() {
        let stockMeterL = document.querySelector("#stockMeterM").getAttribute("value");
        let amountMissing = 1000 - stockMeterL * 1000;
        DoenerTest.storageLeft.meat += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let m = document.querySelector("#stockMeterM");
        m.setAttribute("value", 1);
    }
    DoenerTest.buyMeat = buyMeat;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=container.js.map