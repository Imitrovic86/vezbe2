function konvertuj() {
    const inputVrednost=document.getElementById("vrednost")
    const inputValutaIz=document.getElementById("valuta_iz")
    const inputValutaU=document.getElementById("valuta_u")

    const valuta_iz=inputValutaIz.value
    const valuta_u=inputValutaU.value
    const vrednost= Number(inputVrednost.value)

    if(valuta_iz=="eur" && valuta_u=="rsd") {
        const vrednost_rsd = vrednost *117.3221
        alert("Vrednost u dinarima je:" + vrednost_rsd)

    }else if(valuta_iz=="rsd" && valuta_u=="eur") {
       const vrednost_eur=vrednost/117.3221
        alert("Vrednost u evrima je:" + vrednost_eur)
    }else {
        alert("Niste uneli dobre valute. Vrednosti : rsd, eur.")
    }
}



const buttonKonvertuj=document.getElementById("konvertuj")
buttonKonvertuj.onclick=konvertuj