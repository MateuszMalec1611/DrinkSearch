const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const err = document.querySelector('.error');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');

let $price;
let $tipAmount;
let $numberOfPeople;
let $toPay;

const showBill = () => {
    $price = parseFloat(price.value);
    $tipAmount = parseFloat(tip.value);
    $numberOfPeople = parseInt(people.value);

    if ($price != 0 && $numberOfPeople != 0 && $tipAmount != 0) {
        countBill();
        err.innerText = '';
    } else if ($price != 0 && $numberOfPeople != 0 && $tipAmount === 0) {
        err.innerText = 'Wybierz odpowiedni napiwek!';
        costInfo.style.display = 'none';
    } else {
        err.innerText = 'Uzupełnij wszytskie pola!';
        costInfo.style.display = 'none';
    }
}

const countBill = () => {
    $toPay = ($price + ($price * $tipAmount)) / $numberOfPeople;
    costInfo.style.display = 'block';
    cost.innerText = $toPay.toFixed(2);
}

btn.addEventListener('click', showBill);