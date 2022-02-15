"use strict";
var DoenerTest;
(function (DoenerTest) {
    DoenerTest.payIsClicked = false;
    function cashUpOrder() {
        DoenerTest.payIsClicked = true;
        DoenerTest.ordersMade.push(DoenerTest.currentOrder);
        if (DoenerTest.ordersMade[0].bread == DoenerTest.orders[0].bread && DoenerTest.ordersMade[0].lettuce == DoenerTest.orders[0].lettuce && DoenerTest.ordersMade[0].meat == DoenerTest.orders[0].meat
            && DoenerTest.ordersMade[0].onion == DoenerTest.orders[0].onion && DoenerTest.ordersMade[0].tomato == DoenerTest.orders[0].tomato) {
            DoenerTest.orderCorrect = true;
            DoenerTest.ordersMade.shift();
            DoenerTest.orders.shift();
            DoenerTest.displayOrders.shift();
            DoenerTest.happyScore++;
            DoenerTest.earnings += 3.5;
            let displayEarnings = document.getElementById("earnings");
            displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
            setTimeout(function () {
                DoenerTest.drawOrders = [];
                DoenerTest.breadIsDrawn = DoenerTest.tomatoIsDrawn = DoenerTest.lettuceIsDrawn = DoenerTest.onionIsDrawn = DoenerTest.meatIsDrawn = false;
                DoenerTest.customers.shift();
                DoenerTest.currentCustomerAmount--;
            }, 2000);
            DoenerTest.info.innerHTML = "";
            DoenerTest.info.innerHTML += DoenerTest.displayOrders;
            DoenerTest.currentOrder.bread = 0;
            DoenerTest.currentOrder.tomato = 0;
            DoenerTest.currentOrder.lettuce = 0;
            DoenerTest.currentOrder.onion = 0;
            DoenerTest.currentOrder.meat = 0;
        }
        else {
            DoenerTest.orderCorrect = false;
            DoenerTest.ordersMade.shift();
            DoenerTest.orders.shift();
            DoenerTest.displayOrders.shift();
            DoenerTest.earnings += 3.5;
            let displayEarnings = document.getElementById("earnings");
            displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
            setTimeout(function () {
                DoenerTest.drawOrders = [];
                DoenerTest.breadIsDrawn = DoenerTest.tomatoIsDrawn = DoenerTest.lettuceIsDrawn = DoenerTest.onionIsDrawn = DoenerTest.meatIsDrawn = false;
                DoenerTest.customers.shift();
                DoenerTest.currentCustomerAmount--;
                DoenerTest.orderCorrect = true;
            }, 2000);
            DoenerTest.info.innerHTML = "";
            DoenerTest.info.innerHTML += DoenerTest.displayOrders;
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