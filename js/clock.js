let nameinfo = prompt("Adiniz Nedir?")
let info = document.querySelector("#myName")
info.innerHTML = nameinfo.toUpperCase()
let time = document.querySelector("#myClock")
let body = document.querySelector("#body")
function showTime() {
    let date = new Date()
    let day = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    hour < 10 ? hour = "0" + hour : ""
    sec < 10 ? sec = "0" + sec : ""
    switch (day) {
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Sali"
            break;
        case 3:
            day = "Carsamba"
            break;
        case 4:
            day = "Persembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        case 7:
            day = "Pazar"
            break;
        default:
            console.log("Oops!")
            break;
    }
    // (sec % 2) ? console.log("tek") : console.log("cift")
    (sec % 2) ? time.classList.replace("bg-dark", "bg-light") : time.classList.replace("bg-light", "bg-dark")
    time.innerHTML = `${hour}:${min}:${sec} ${day}`

    setTimeout(showTime, 1000)

}
showTime()


