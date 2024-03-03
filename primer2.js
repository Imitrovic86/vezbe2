 function konvertuj() {
    const inputVrednost=document.getElementById("vrednost")
    const rbRSD_EUR =document.getElementById("rsd_eur")

    const vrednost= Number (inputVrednost.value)

    if (rbRSD_EUR.checked) {
        const vrednost_eur=vrednost/117.3221
        alert("Vrednost u evrima je:" + vrednost_eur)
    }else {
       const vrednost_rsd= vrednost * 117.3221
        alert("Vrednost u dinarima je:" + vrednost_rsd)
    }
 }



 const buttonKonvertuj=document.getElementById("konvertuj")
 buttonKonvertuj.onclick=konvertuj