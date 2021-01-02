class TemperatureConversion {

    calculate() {
        {
            document.getElementById("calButton").addEventListener("click", this.clickCalculate.bind(this));
        };
        clickCalculate() {
            let startingTemp = document.getElementById("startingTemp").value;
            if (startingTemp === "fahrenheit") {
                fahrenheitConversion();
            } else if (startingTemp === "celsius") {
                celsiusConversion();
            } else if (startingTemp === "kelvin") {
                kelvinConversion();
            } else if (startingTemp === "rankine") {
                rankineConversion();
            }
        };
    }

    farenheitConversion(fahrenheit) {
        document.getElementById("fahrenheit").innerHTML = parseFloat(fahrenheit).toFixed(2);

        let fahrenheitToCelsius = ((fahrenheit / 1.8) - 32);
        document.getElementById("celsius").innerHTML = parseFloat(fahrenheitToCelsius).toFixed(2);

        let fahrenheitToKelvin = ((fahrenheit + 459.67) * (5 / 9));
        document.getElementById("kelvin").innerHTML = parseFloat(fahrenheitToKelvin).toFixed(2);

        let fahrenheitToRankine = fahrenheit + 459.67;
        document.getElementById("rankine").innerHTML = parseFloat(fahrenheitToRankine).toFixed(2);
    }

    celsiusConversion(celsius) {
        document.getElementById("celsius").innerHTML = parseFloat(celsius).toFixed(2);

        let celsiusToFahrenheit = ((celsius * 1.8) + 32);
        document.getElementById("fahrenheit").innerHTML = parseFloat(celsiusToFahrenheit).toFixed(2);

        let celsiusToKelvin = celsius + 273.15;
        document.getElementById("kelvin").innerHTML = parseFloat(celsiusToKelvin).toFixed(2);

        let celsiusToRankine = ((celsius * 1.8) + 491.67);
        document.getElementById("rankine").innerHTML = parseFloat(celsiusToRankine).toFixed(2);
    }

    kelvinConversion(kelvin) {
        document.getElementById("kelvin").innerHTML = parseFloat(kelvin).toFixed(2);

        let kelvinToFahrenheit = ((kelvin * 1.8) - 459.67);
        document.getElementById("fahrenheit").innerHTML = parseFloat(kelvinToFahrenheit).toFixed(2);

        let kelvinToCelsius = kelvin - 273.15;
        document.getElementById("celsius").innerHTML = parseFloat(kelvinToCelsius).toFixed(2);

        let kelvinToRankine = kelvin * 1.8;
        document.getElementById("rankine").innerHTML = parseFloat(kelvinToRankine).toFixed(2);
    }

    rankineConversion(rankine) {
        document.getElementById("rankine").innerHTML = parseFloat(rankine).toFixed(2);

        let rankineToFahrenheit = rankine - 459.67;
        document.getElementById("fahrenheit").innerHTML = parseFloat(rankineToFahrenheit).toFixed(2);

        let rankineToCelsius = ((rankine * (5 / 9)) - 273.15);
        document.getElementById("celsius").innerHTML = parseFloat(rankineToCelsius).toFixed(2);

        let rankineToKelvin = rankine * (5 / 9);
        document.getElementById("kelvin").innerHTML = parseFloat(rankineToKelvin).toFixed(2);
    }
}