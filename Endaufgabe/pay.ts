namespace DoenerTest {
    export let payIsClicked: boolean = false;

    export function cashUpOrder(): void {
        payIsClicked = true;
        ordersMade.push(currentOrder);

        if (ordersMade[0].bread == orders[0].bread && ordersMade[0].lettuce == orders[0].lettuce && ordersMade[0].meat == orders[0].meat
            && ordersMade[0].onion == orders[0].onion && ordersMade[0].tomato == orders[0].tomato) {
            
            orderCorrect = true;

            ordersMade.shift();
            orders.shift();
            displayOrders.shift();

            happyScore++;
            earnings += 3.5;
            let displayEarnings: any = document.getElementById("earnings");
            displayEarnings.innerText = earnings.toString() + " €";

            setTimeout(function (): void {
                drawOrders = [];
                breadIsDrawn = tomatoIsDrawn = lettuceIsDrawn = onionIsDrawn = meatIsDrawn = false;
                customers.shift();
                currentCustomerAmount--;
            }, 2000);

            info.innerHTML = "";
            info.innerHTML += displayOrders;
            currentOrder.bread = 0;
            currentOrder.tomato = 0;
            currentOrder.lettuce = 0;
            currentOrder.onion = 0;
            currentOrder.meat = 0;

        } else {
            orderCorrect = false;
            ordersMade.shift();
            orders.shift();
            displayOrders.shift();
            
            earnings += 3.5;
            let displayEarnings: any = document.getElementById("earnings");
            displayEarnings.innerText = earnings.toString() + " €";

            setTimeout(function (): void {
                drawOrders = [];
                breadIsDrawn = tomatoIsDrawn = lettuceIsDrawn = onionIsDrawn = meatIsDrawn = false;
                customers.shift();
                currentCustomerAmount--;
                orderCorrect = true;
            }, 2000);
            
            info.innerHTML = "";
            info.innerHTML += displayOrders;
            currentOrder.bread = 0;
            currentOrder.tomato = 0;
            currentOrder.lettuce = 0;
            currentOrder.onion = 0;
            currentOrder.meat = 0;
        }
    }
}