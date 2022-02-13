"use strict";
var DoenerTest;
(function (DoenerTest) {
    DoenerTest.payIsClicked = false;
    function cashUpOrder() {
        DoenerTest.payIsClicked = true;
        DoenerTest.ordersMade.push(DoenerTest.currentOrder);
        // debugger;
        console.log(DoenerTest.currentOrder);
        console.log(DoenerTest.ordersMade[0]);
        if (DoenerTest.ordersMade[0].bread == DoenerTest.orders[0].bread && DoenerTest.ordersMade[0].lettuce == DoenerTest.orders[0].lettuce && DoenerTest.ordersMade[0].meat == DoenerTest.orders[0].meat
            && DoenerTest.ordersMade[0].onion == DoenerTest.orders[0].onion && DoenerTest.ordersMade[0].tomato == DoenerTest.orders[0].tomato) {
            // if (currentOrder == orders[0]) {
            // debugger;
            // customers[0].feel("happy");
            DoenerTest.orderCorrect = true;
            console.log("order was right");
            console.log("länge davor: " + DoenerTest.customers.length + " " + DoenerTest.ordersMade.length + " " + DoenerTest.orders.length);
            DoenerTest.ordersMade.shift();
            DoenerTest.orders.shift();
            DoenerTest.displayOrders.shift();
            DoenerTest.happyScore++;
            DoenerTest.earnings += 3.5;
            let displayEarnings = document.getElementById("earnings");
            console.log("Kasse: " + DoenerTest.earnings.toString());
            displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
            setTimeout(function () {
                DoenerTest.breadIsDrawn = DoenerTest.tomatoIsDrawn = DoenerTest.lettuceIsDrawn = DoenerTest.onionIsDrawn = DoenerTest.meatIsDrawn = false;
                DoenerTest.customers.shift();
                DoenerTest.currentCustomerAmount--;
                console.log("Thank you! Bye.");
            }, 3000);
            DoenerTest.info.innerHTML = "";
            DoenerTest.info.innerHTML += DoenerTest.displayOrders;
            console.log("länge danach: " + DoenerTest.customers.length + " " + DoenerTest.ordersMade.length + " " + DoenerTest.orders.length);
            DoenerTest.currentOrder.bread = 0;
            DoenerTest.currentOrder.tomato = 0;
            DoenerTest.currentOrder.lettuce = 0;
            DoenerTest.currentOrder.onion = 0;
            DoenerTest.currentOrder.meat = 0;
        }
        else {
            // debugger;
            //customers[0].draw();
            // customers[0].feel(moodCustomer);
            console.log("order was wrong");
            console.log(DoenerTest.ordersMade[0]);
            console.log("länge davor: " + DoenerTest.customers.length + " " + DoenerTest.ordersMade.length + " " + DoenerTest.orders.length);
            DoenerTest.orderCorrect = false;
            DoenerTest.ordersMade.shift();
            DoenerTest.orders.shift();
            DoenerTest.displayOrders.shift();
            DoenerTest.earnings += 3.5;
            let displayEarnings = document.getElementById("earnings");
            console.log("Kasse: " + DoenerTest.earnings.toString());
            displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
            setTimeout(function () {
                DoenerTest.breadIsDrawn = DoenerTest.tomatoIsDrawn = DoenerTest.lettuceIsDrawn = DoenerTest.onionIsDrawn = DoenerTest.meatIsDrawn = false;
                DoenerTest.customers.shift();
                DoenerTest.currentCustomerAmount--;
                console.log("That was not what I've ordered! I'm leaving.");
                DoenerTest.orderCorrect = true;
            }, 3000);
            // let info: any = document.querySelector("#info");
            DoenerTest.info.innerHTML = "";
            DoenerTest.info.innerHTML += DoenerTest.displayOrders;
            console.log("länge danach: " + DoenerTest.customers.length + " " + DoenerTest.ordersMade.length + " " + DoenerTest.orders.length);
            DoenerTest.currentOrder.bread = 0;
            DoenerTest.currentOrder.tomato = 0;
            DoenerTest.currentOrder.lettuce = 0;
            DoenerTest.currentOrder.onion = 0;
            DoenerTest.currentOrder.meat = 0;
        }
    }
    DoenerTest.cashUpOrder = cashUpOrder;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=pay.js.map