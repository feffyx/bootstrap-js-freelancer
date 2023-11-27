document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        // DATI FORM
        let hours = parseFloat(document.getElementById('hours').value);
        let workType = document.getElementById('work').value;
        let discountCodeInput = document.getElementById('discount');
        let discountCode = discountCodeInput.value.toUpperCase();

        // PREZZO ORARIO IN BASE AL LAVORO SELEZIONATO
        let hourlyPrices = {
            'st1': 20.50,
            'wt2': 15.30,
            'wt3': 33.60
        };

        if (!(workType in hourlyPrices)) {
            alert('Working type not valid');
            return;
        }

        let hourlyPrice = hourlyPrices[workType];
        let total = hours * hourlyPrice;

        // CODICI SCONTO
        let validCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

        // SE IL CODICE È VALIDO, SI APPLICA UNO SCONTO DEL 25%
        if (validCodes.includes(discountCode)) {
            let discount = total * 0.25;
            total -= discount;



        } else if (discountCode !== '') {
            alert('Discount code invalid');

            discountCodeInput.style.color = 'red'; // Da il colore rosso al codice non valido
        }

        // MOSTRA PREZZO SOTTO AL FORM
        let resultElement = document.createElement('p');
        resultElement.innerHTML = 'Final price: ' + total.toFixed(2) + '€';
        document.querySelector('form').appendChild(resultElement);

    });
});
