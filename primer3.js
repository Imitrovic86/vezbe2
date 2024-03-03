function konvertuj() {
    const selectValutaIz = document.getElementById("valuta_iz")
    const selectValutaU = document.getElementById("valuta_u")

    const valuta_iz = selectValutaIz.value
    const valuta_u = selectValutaU.value

    if (valuta_iz == "" || valuta_u == "") {
        alert("Morate izabrati valute za konverziju!")
    } else if (valuta_iz == valuta_u) {
        alert("Valute moraju biti razlicite!")
    } else {
        const inputVrednost = document.getElementById("vrednost")
        const vrednost = Number(inputVrednost.value)
        const odnos_dinar = {
            "eur": 117.1504,
            "usd": 105.4364,
            "gbr": 135.0126

        }

        if (valuta_iz == "rsd") {
            const konvertovano = vrednost / odnos_dinar[valuta_u]
            alert("Konverzija iz RSD u " + valuta_u.toUpperCase() + ": " + konvertovano)
        } else if (valuta_u == "rsd") {
            const konvertovano = vrednost * odnos_dinar[valuta_iz]
            alert("Konverzija iz " + valuta_iz.toUpperCase() + " u RSD: " + konvertovano)
        }
        else {
            const dinari = vrednost * odnos_dinar[valuta_iz]
            const konvertovano = dinari / odnos_dinar[valuta_u]
            alert("Konverzija iz " + valuta_iz.toUpperCase() + " u " + valuta_u.toUpperCase() + ": " + konvertovano)
        }
    }

}


const buttonKonvertuj = document.getElementById("konvertuj")
buttonKonvertuj.onclick = konvertuj