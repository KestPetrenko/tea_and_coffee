let sm = 0;
function addOrder2(sectionOrder, element) {
    if (element == null) {
        return
    }

    let divOrder = document.createElement("div");
    divOrder.classList.add("divOrder");
    sectionOrder.append(divOrder);

    let textOrder = document.createElement("p");
    textOrder.classList.add("textOrder");
    divOrder.append(textOrder);

    let amountOrder = document.createElement("input");
    amountOrder.classList.add("amountOrder");
    amountOrder.setAttribute("type", "number");
    amountOrder.setAttribute("value", "1");
    amountOrder.setAttribute("min", "0");
    divOrder.append(amountOrder);


    let priceOrder = document.createElement("p");
    priceOrder.classList.add("priceOrder");
    divOrder.append(priceOrder);

    let sumPriceAmount = document.createElement("p");
    sumPriceAmount.classList.add("sumPriceAmount");
    divOrder.append(sumPriceAmount);

    textOrder.textContent = element[0];
    priceOrder.textContent = element[1];
    sm = Number(priceOrder.textContent);
    sumPriceAmount.textContent = amountOrder.value * priceOrder.textContent;


    if (amountOrder) {
        amountOrder.addEventListener("change", function () {
            sumPriceAmount.textContent = amountOrder.value * priceOrder.textContent;
            console.log(sumPriceAmount.textContent);
            let sum = 0;
            for (let i of summaPriceAmount) {
                sum += Number(i.textContent);
                console.log(i.textContent);
                sumPrice.textContent = sum;
                console.log(sum);
            }
        });
    }

        let sum = 0;
        let summaPriceAmount = document.querySelectorAll(".sumPriceAmount");
        for (let i of summaPriceAmount) {
            sum += Number(i.textContent);
            console.log(i.textContent);
            sumPrice.textContent = sum;
            console.log(sum);
        }
    }
    


