class TemperatureConversion {

    constructor() {
        this.conversionValue = document.getElementById("conversionValue").innerHTML;
        this.startingTemp = document.getElementById("startingTemp").value;
        let button = document.getElementById("calButton");
    }

    calculate() {
        this.startingTemp = document.getElementById("startingTemp").value;

        if (this.startingTemp === "fahrenheit") {
            this.fahrenheitConversion();
        } else if (this.startingTemp === "celsius") {
            this.celsiusConversion();
        } else if (this.startingTemp === "kelvin") {
            this.kelvinConversion();
        } else if (this.startingTemp === "rankine") {
            this.rankineConversion();
        }
    };

    fahrenheitConversion() {
        document.getElementById("fahrenheit").innerHTML = this.conversionValue;

        let fahrenheitToCelsius = ((this.conversionValue / 1.8) - 32);
        document.getElementById("celsius").innerHTML = parseFloat(fahrenheitToCelsius).toFixed(2);

        let fahrenheitToKelvin = ((this.conversionValue + 459.67) * (5 / 9));
        document.getElementById("kelvin").innerHTML = parseFloat(fahrenheitToKelvin).toFixed(2);

        let fahrenheitToRankine = this.conversionValue + 459.67;
        document.getElementById("rankine").innerHTML = parseFloat(fahrenheitToRankine).toFixed(2);
        console.log(document.getElementById("conversionValue").innerText);

    }

    celsiusConversion() {
        parseFloat(this.conversionValue).toFixed(2) = document.getElementById("celsius").innerHTML;

        let celsiusToFahrenheit = ((this.conversionValue * 1.8) + 32);
        document.getElementById("fahrenheit").innerHTML = parseFloat(celsiusToFahrenheit).toFixed(2);

        let celsiusToKelvin = this.conversionValue + 273.15;
        document.getElementById("kelvin").innerHTML = parseFloat(celsiusToKelvin).toFixed(2);

        let celsiusToRankine = ((this.conversionValue * 1.8) + 491.67);
        document.getElementById("rankine").innerHTML = parseFloat(celsiusToRankine).toFixed(2);
    }

    kelvinConversion() {
        parseFloat(this.conversionValue).toFixed(2) = document.getElementById("kelvin").innerHTML;

        let kelvinToFahrenheit = ((this.conversionValue * 1.8) - 459.67);
        parseFloat(kelvinToFahrenheit).toFixed(2) = document.getElementById("fahrenheit").innerHTML;

        let kelvinToCelsius = this.conversionValue - 273.15;
        parseFloat(kelvinToCelsius).toFixed(2) = document.getElementById("celsius").innerHTML;

        let kelvinToRankine = this.conversionValue * 1.8;
        parseFloat(kelvinToRankine).toFixed(2) = document.getElementById("rankine").innerHTML;
    }

    rankineConversion() {
        parseFloat(this.conversionValue).toFixed(2) = document.getElementById("rankine").innerHTML;

        let rankineToFahrenheit = this.conversionValue - 459.67;
        parseFloat(rankineToFahrenheit).toFixed(2) = document.getElementById("fahrenheit").innerHTML;

        let rankineToCelsius = ((this.conversionValue * (5 / 9)) - 273.15);
        parseFloat(rankineToCelsius).toFixed(2) = document.getElementById("celsius").innerHTML;

        let rankineToKelvin = this.conversionValue * (5 / 9);
        parseFloat(rankineToKelvin).toFixed(2) = document.getElementById("kelvin").innerHTML;
    }
}

const temperatureConversion = new TemperatureConversion();