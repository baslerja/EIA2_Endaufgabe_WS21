"use strict";
var DoenerTest;
(function (DoenerTest) {
    DoenerTest.workers = [];
    DoenerTest.customers = [];
    DoenerTest.orders = [];
    DoenerTest.ordersMade = [];
    DoenerTest.displayOrders = [];
    DoenerTest.drawOrders = [];
    DoenerTest.currentCustomerAmount = 0;
    DoenerTest.earnings = 0;
    DoenerTest.happyScore = 0;
    DoenerTest.info = document.querySelector("#info");
    DoenerTest.currentOrder = {
        bread: 0,
        tomato: 0,
        lettuce: 0,
        onion: 0,
        meat: 0
    };
    DoenerTest.storageLeft = {
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000
    };
    DoenerTest.counterLeft = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80
    };
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        DoenerTest.crc2 = canvas.getContext("2d");
        document.querySelector("#start").addEventListener("click", startGame);
        drawBackground();
        DoenerTest.imgData = DoenerTest.crc2.getImageData(0, 0, DoenerTest.crc2.canvas.width, DoenerTest.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    DoenerTest.handleload = handleload;
    function startGame() {
        console.log("START");
        DoenerTest.listenToButtons();
        DoenerTest.listenToAddButtons();
        DoenerTest.workers = [];
        DoenerTest.customers = [];
        DoenerTest.orders = [];
        DoenerTest.ordersMade = [];
        DoenerTest.currentCustomerAmount = 0;
        const form = document.querySelector("form");
        const data = new FormData(form);
        const amountStock = data.get("amountIngredients");
        let stock = parseInt(amountStock + Math.floor); //string in number parsen
        DoenerTest.storageLeft.bread = DoenerTest.storageLeft.tomato = DoenerTest.storageLeft.lettuce = DoenerTest.storageLeft.onion = DoenerTest.storageLeft.meat = stock;
        //meter in stock div soll angepasst werden
        let meterB = document.querySelector("#stockMeterB");
        meterB.setAttribute("value", stock / 100);
        DoenerTest.storageLeft.bread = 10 * stock;
        let meterT = document.querySelector("#stockMeterT");
        meterT.setAttribute("value", stock / 100);
        DoenerTest.storageLeft.tomato = 10 * stock;
        let meterL = document.querySelector("#stockMeterL");
        meterL.setAttribute("value", stock / 100);
        DoenerTest.storageLeft.lettuce = 10 * stock;
        let meterO = document.querySelector("#stockMeterO");
        meterO.setAttribute("value", stock / 100);
        DoenerTest.storageLeft.onion = 10 * stock;
        let meterM = document.querySelector("#stockMeterM");
        meterM.setAttribute("value", stock / 100);
        DoenerTest.storageLeft.meat = 10 * stock;
        createWorker(data);
        sendCustomers(data);
        setTimeout(function () {
            alert("Time is up! You made " + DoenerTest.happyScore + " customers happy today! Reload page to start a new game.");
        }, 90000); //wait 90 seconds
        //return false; // prevent reload // Quelle: https://dev.to/deciduously/formdata-in-typescript-24cl
    }
    DoenerTest.startGame = startGame;
    function createWorker(data) {
        const amountWorker = data.get("amountWorker"); //form Data anzahl worker als string holen
        let amount = parseInt(amountWorker); //string in number parsen
        for (let index = 0; index < amount; index++) { //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX = Math.random() * 300 + Math.random() * 300 + 50;
            randomX = Math.floor(randomX);
            let worker = new DoenerTest.Worker(1, randomX, 200);
            worker.draw();
            worker.feel("tired");
            DoenerTest.workers.push(worker);
        }
    }
    DoenerTest.createWorker = createWorker;
    async function sendCustomers(data) {
        const amountCustomer = data.get("amountCustomer"); //form Data anzahl worker als string holen
        let amountC = parseInt(amountCustomer);
        for (let index = 0; index < amountC; index++) { //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden
            await new Promise(f => setTimeout(f, 60000 / amountC)); // Math.floor(Math.random() * (60000 - 1000 + 1)) + 1000  
            createCustomer();
        }
    }
    function createCustomer() {
        let customer = new DoenerTest.Customer(1, 830, 380);
        DoenerTest.orders.push(customer.myOrder);
        customer.feel("happy");
        customer.draw();
        DoenerTest.customers.push(customer);
        customer.move(1 / 50);
        console.log(" Order of Customer: ");
        console.log(customer.myOrder);
        let firstOrder = "Ich hätte gerne einen Döner mit " + customer.myOrder.bread + " Brot, " + customer.myOrder.tomato + " mal Tomaten, " + customer.myOrder.lettuce + " mal Kraut, " + customer.myOrder.onion + " mal Zwiebeln und " + customer.myOrder.meat + " mal Fleisch." + "<br> " + "<br> ";
        DoenerTest.displayOrders.push(firstOrder);
        // info.innerHTML.get(displayOrders) as string;
        DoenerTest.info.innerHTML = DoenerTest.displayOrders;
        DoenerTest.currentCustomerAmount++;
        //console.log(1 + index + " customers erstellt");
        // console.log("c position = " + customer.position.x + " and " + customer.position.y);
    }
    DoenerTest.createCustomer = createCustomer;
    function update(_x, _y) {
        DoenerTest.crc2.putImageData(DoenerTest.imgData, 1, 1);
        moodCheck();
        workerWalkCheck();
        for (let worker of DoenerTest.workers) {
            worker.draw();
            worker.move(1 / 50, DoenerTest.xOfWorker, DoenerTest.yOfWorker);
            worker.feel(DoenerTest.moodWorker);
        }
        for (let customer of DoenerTest.customers) {
            customer.move(1 / 50, _x, _y);
            customer.draw();
            customer.feel("happy");
            DoenerTest.customers[0].feel(DoenerTest.moodCustomer);
            // console.log("update c");
        }
        for (let ingredient of DoenerTest.drawOrders) {
            //ingredient.move(1 / 50, _x, _y);
            ingredient.checkOrder();
            console.log("checkOrder Aufruf");
            //ingredient.move(1 / 50, xOfWorker + 10, yOfWorker - 10);
            // console.log("update c");
        }
    }
    DoenerTest.update = update;
    function moodCheck() {
        //mood Worker
        const form = document.querySelector("form");
        const data = new FormData(form);
        let stressLevel = data.get("stressLevel"); //form Data stressLevel of worker als string holen
        if (stressLevel == "low") {
            if (DoenerTest.currentCustomerAmount <= 1) {
                DoenerTest.moodWorker = "tired";
            }
            if (DoenerTest.currentCustomerAmount == 2) {
                DoenerTest.moodWorker = "neutral";
            }
            if (DoenerTest.currentCustomerAmount >= 3) {
                DoenerTest.moodWorker = "stressed";
            }
        }
        if (stressLevel == "high") {
            if (DoenerTest.currentCustomerAmount <= 2) {
                DoenerTest.moodWorker = "tired";
            }
            if (DoenerTest.currentCustomerAmount == 3) {
                DoenerTest.moodWorker = "neutral";
            }
            if (DoenerTest.currentCustomerAmount >= 5) {
                DoenerTest.moodWorker = "stressed";
            }
        }
        //mood Customer
        if (DoenerTest.orderCorrect == false) {
            DoenerTest.moodCustomer = "sad";
        }
        else {
            DoenerTest.moodCustomer = "happy";
        }
    }
    DoenerTest.moodCheck = moodCheck;
    function workerWalkCheck() {
        // Walk between Containers and Counter
        if (DoenerTest.refillBreadIsClicked == true) {
            DoenerTest.bringBread();
            DoenerTest.xOfWorker = 60;
            DoenerTest.yOfWorker = 120;
        }
        if (DoenerTest.backToBread == true) {
            DoenerTest.xOfWorker = 120;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.refillTomatoIsClicked == true) {
            DoenerTest.bringTomato();
            DoenerTest.xOfWorker = 160;
            DoenerTest.yOfWorker = 120;
        }
        if (DoenerTest.backToTomato == true) {
            DoenerTest.xOfWorker = 210;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.refillLettuceIsClicked == true) {
            DoenerTest.bringLettuce();
            DoenerTest.xOfWorker = 260;
            DoenerTest.yOfWorker = 120;
        }
        if (DoenerTest.backToLettuce == true) {
            DoenerTest.xOfWorker = 290;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.refillOnionIsClicked == true) {
            DoenerTest.bringOnion();
            DoenerTest.xOfWorker = 360;
            DoenerTest.yOfWorker = 120;
        }
        if (DoenerTest.backToOnion == true) {
            DoenerTest.xOfWorker = 370;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.refillMeatIsClicked == true) {
            DoenerTest.bringMeat();
            DoenerTest.xOfWorker = 460;
            DoenerTest.yOfWorker = 120;
        }
        if (DoenerTest.backToMeat == true) {
            DoenerTest.xOfWorker = 450;
            DoenerTest.yOfWorker = 245;
        }
        // Walk To Cash Register
        if (DoenerTest.payIsClicked == true) {
            DoenerTest.xOfWorker = 570;
            DoenerTest.yOfWorker = 230;
        }
        if (DoenerTest.xOfWorker == DoenerTest.workers[0].position.x && DoenerTest.yOfWorker == DoenerTest.workers[0].position.y) {
            DoenerTest.payIsClicked = false;
        }
        // Walk to add Ingredients at Counter
        if (DoenerTest.addBreadIsClicked == true) {
            DoenerTest.xOfWorker = 125;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.xOfWorker == DoenerTest.workers[0].position.x && DoenerTest.yOfWorker == DoenerTest.workers[0].position.y) {
            DoenerTest.addBreadIsClicked = false;
        }
        if (DoenerTest.addTomatoIsClicked == true) {
            DoenerTest.xOfWorker = 210;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.xOfWorker == DoenerTest.workers[0].position.x && DoenerTest.yOfWorker == DoenerTest.workers[0].position.y) {
            DoenerTest.addTomatoIsClicked = false;
        }
        if (DoenerTest.addLettuceIsClicked == true) {
            DoenerTest.xOfWorker = 290;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.xOfWorker == DoenerTest.workers[0].position.x && DoenerTest.yOfWorker == DoenerTest.workers[0].position.y) {
            DoenerTest.addLettuceIsClicked = false;
        }
        if (DoenerTest.addOnionIsClicked == true) {
            DoenerTest.xOfWorker = 370;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.xOfWorker == DoenerTest.workers[0].position.x && DoenerTest.yOfWorker == DoenerTest.workers[0].position.y) {
            DoenerTest.addOnionIsClicked = false;
        }
        if (DoenerTest.addMeatIsClicked == true) {
            DoenerTest.xOfWorker = 450;
            DoenerTest.yOfWorker = 245;
        }
        if (DoenerTest.xOfWorker == DoenerTest.workers[0].position.x && DoenerTest.yOfWorker == DoenerTest.workers[0].position.y) {
            DoenerTest.addMeatIsClicked = false;
        }
    }
    DoenerTest.workerWalkCheck = workerWalkCheck;
    function drawBackground() {
        console.log("Background is drawing");
        DoenerTest.crc2.resetTransform();
        let crc2Pattern;
        let canvasPattern = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = canvasPattern.getContext("2d");
        canvasPattern.width = 50;
        canvasPattern.height = 50;
        crc2Pattern.fillStyle = "#d9d9d9";
        crc2Pattern.strokeStyle = "#c7c7c7";
        crc2Pattern.lineWidth = 3;
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.rect(0, 0, 50, 50);
        crc2Pattern.stroke();
        let pattern = DoenerTest.crc2.createPattern(canvasPattern, "repeat");
        DoenerTest.crc2.fillStyle = pattern;
        DoenerTest.crc2.fillRect(0, 0, 900, 400);
        // Counter
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(10, 10);
        DoenerTest.crc2.fillStyle = "#8f6635";
        DoenerTest.crc2.strokeStyle = "#2e2e2e";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 100);
        DoenerTest.crc2.lineTo(700, 100);
        DoenerTest.crc2.lineTo(700, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(100, 250);
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(550, 50);
        DoenerTest.crc2.lineTo(0, 50);
        DoenerTest.crc2.lineTo(0, 0);
        DoenerTest.crc2.lineTo(550, 0);
        DoenerTest.crc2.lineTo(550, 50);
        DoenerTest.crc2.lineTo(550, 0);
        DoenerTest.crc2.lineTo(550, -140);
        DoenerTest.crc2.lineTo(610, -140);
        DoenerTest.crc2.lineTo(610, 50);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        //Container
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(895, 400);
        DoenerTest.crc2.strokeStyle = "black";
        DoenerTest.crc2.lineWidth = 4;
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, -150);
        DoenerTest.crc2.moveTo(0, -150);
        DoenerTest.crc2.lineTo(-75, -200);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.stroke();
        // Container filling
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(200, 255);
        DoenerTest.crc2.strokeStyle = "black";
        DoenerTest.crc2.lineWidth = 2;
        DoenerTest.crc2.fillStyle = "red";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 40);
        DoenerTest.crc2.lineTo(40, 40);
        DoenerTest.crc2.lineTo(40, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(120, 255);
        DoenerTest.crc2.fillStyle = "orange";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 40);
        DoenerTest.crc2.lineTo(40, 40);
        DoenerTest.crc2.lineTo(40, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(280, 255);
        DoenerTest.crc2.fillStyle = "#23940f";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 40);
        DoenerTest.crc2.lineTo(40, 40);
        DoenerTest.crc2.lineTo(40, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(360, 255);
        DoenerTest.crc2.fillStyle = "purple";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 40);
        DoenerTest.crc2.lineTo(40, 40);
        DoenerTest.crc2.lineTo(40, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(440, 255);
        DoenerTest.crc2.fillStyle = "brown";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 40);
        DoenerTest.crc2.lineTo(40, 40);
        DoenerTest.crc2.lineTo(40, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(20, 20);
        DoenerTest.crc2.fillStyle = "orange";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 80);
        DoenerTest.crc2.lineTo(80, 80);
        DoenerTest.crc2.lineTo(80, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(120, 20);
        DoenerTest.crc2.fillStyle = "red";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 80);
        DoenerTest.crc2.lineTo(80, 80);
        DoenerTest.crc2.lineTo(80, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(220, 20);
        DoenerTest.crc2.fillStyle = "#23940f";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 80);
        DoenerTest.crc2.lineTo(80, 80);
        DoenerTest.crc2.lineTo(80, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(320, 20);
        DoenerTest.crc2.fillStyle = "purple";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 80);
        DoenerTest.crc2.lineTo(80, 80);
        DoenerTest.crc2.lineTo(80, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(420, 20);
        DoenerTest.crc2.fillStyle = "brown";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 80);
        DoenerTest.crc2.lineTo(80, 80);
        DoenerTest.crc2.lineTo(80, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        // Cash register
        DoenerTest.crc2.resetTransform();
        DoenerTest.crc2.save();
        DoenerTest.crc2.translate(550, 255);
        DoenerTest.crc2.fillStyle = "gold";
        DoenerTest.crc2.beginPath();
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, 40);
        DoenerTest.crc2.lineTo(80, 40);
        DoenerTest.crc2.lineTo(80, 0);
        DoenerTest.crc2.moveTo(0, 0);
        DoenerTest.crc2.lineTo(0, -15);
        DoenerTest.crc2.lineTo(30, -15);
        DoenerTest.crc2.lineTo(30, 0);
        DoenerTest.crc2.closePath();
        DoenerTest.crc2.fill();
        DoenerTest.crc2.stroke();
        DoenerTest.crc2.restore();
    }
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=main.js.map