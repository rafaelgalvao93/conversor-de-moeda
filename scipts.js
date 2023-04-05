const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    // realValueText.innerHTML = inputReais

    //    currencyValueText.innerHTML = (inputReais / dolar)

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)

    }


}

changeCurrency = () => {
    const CurrencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        CurrencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }


    if (select.value === '€ Euro') {
        CurrencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.jpg"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)