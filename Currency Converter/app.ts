window.onload = () => {
    var fromCurrency;
    var toCurrency;
    var toAmount;
    var bttnConvert;
    var labelResult;
    var selectedFromCurrency;
    var selectedtoCurrency;
    var url;
    var result;
    var response;

    fromCurrency = document.getElementById("FromCurrency");
    toCurrency = document.getElementById("ToCurrency");
    labelResult = document.getElementById("LabelResult");
    bttnConvert = document.getElementById("Convert");

    bttnConvert.onclick = function () {
        var xmlhttp = new XMLHttpRequest();
        var selectedToCurrencyRate: number;
        var fromAmountValue: number;
        var convertedCurrency: number;
        var fromAmount = (<HTMLInputElement>document.getElementById("Amount")).value
        var numberFromAmount: number;

        numberFromAmount = parseInt(fromAmount);

        if (fromAmount.length == 0) {
            window.alert("Amount is Required!");
        }
        else {
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    response = this.responseText;
                }
            }
            selectedFromCurrency = fromCurrency.options[fromCurrency.selectedIndex].text;
            selectedtoCurrency = toCurrency.options[toCurrency.selectedIndex].text;
            url = "http://api.fixer.io/latest?base=" + selectedFromCurrency;
            xmlhttp.open("GET", url);
            xmlhttp.send();
            result = JSON.parse(response);

            fromAmountValue = parseInt(fromAmount);
            selectedToCurrencyRate = result.rates[selectedtoCurrency];

            convertedCurrency = fromAmountValue * selectedToCurrencyRate;

            window.alert("That would be: " + convertedCurrency + " " + selectedtoCurrency);
        }

    }
}