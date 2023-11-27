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
            alert('Tipo di lavoro non valido');
            return;
        }

        let hourlyPrice = hourlyPrices[workType];
        let total = hours * hourlyPrice;


    });
});
