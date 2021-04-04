let taskDOM = document.querySelector("#task")
let addDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let liDOM = document.querySelectorAll("#list > li")
let closeBtnDOM = document.querySelectorAll("span.close") // span olup class degeri close olanlar bulundu


showList()

//listeye yeni eleman ekleme
function newElement(e) {
    // e.preventDefault()
    if (taskDOM.value.trim(" ")) {  //trim islemi sonucu sifirsa hata verir degilse listeye ekler
        let getLocalStorageData = localStorage.getItem("todo");
        getLocalStorageData ? todolist = JSON.parse(getLocalStorageData) : todolist = []; //localstorage degeri varsa al yoksa bos array
        todolist.push(taskDOM.value)
        localStorage.setItem("todo", JSON.stringify(todolist)) // eleman eklenmis halini localstoge a kaydet

        let liDOM = document.createElement("li")
        liDOM.innerHTML = taskDOM.value // li icerisine inputtan alinan deger eklendi
        let span = document.createElement("span") // kapatmak icin span tanimlandi
        span.className = "close"
        span.innerHTML = "x" // kapatma simgesi olarak x ekledim
        liDOM.append(span) // li icerisine span eklendi
        listDOM.append(liDOM) // list icerisine li eklendi
        taskDOM.value = "" // input sifirlandi
        closeBtnDOM = document.querySelectorAll("span.close") //yeni eklenen degeri de gormesi icin close classlari listelendi
        close()
        $(".success").toast("show")
    }
    else {
        $(".error").toast("show") // input bos ya da bosluklardan olusuyorsa hata doner
        taskDOM.value = ""
    }
}

//listeden eleman silme fonksiyonnu
function close() {
    for (i = 0; i < closeBtnDOM.length; i++) {

        closeBtnDOM[i].onclick = function () {
            todolist = JSON.parse(localStorage.getItem("todo"));
            let index = $(this).parent().index()  // elemanin index degeri bulundu
            console.log(index)
            todolist.splice(index, 1) //splice ile tiklanan eleman listeden silindi
            localStorage.setItem("todo", JSON.stringify(todolist))
            this.parentElement.remove()
        }
    }
}


// yapildi olarak isaretleme
let list = document.querySelector("#list")
list.addEventListener("click", checked)
function checked(event) {
    event.target.classList.toggle("checked")

}

function showList() {

    let getLocalStorageData = localStorage.getItem("todo");
    getLocalStorageData ? todolist = JSON.parse(getLocalStorageData) : todolist = [];
    todolist.map((item, index) => {

        let liDOM = document.createElement("li")
        liDOM.innerHTML = item // li icerisine inputtan alinan deger eklendi
        let span = document.createElement("span") // kapatmak icin span tanimlandi
        span.className = "close"
        span.innerHTML = "x"
        liDOM.append(span) // li icerisine span eklendi
        listDOM.append(liDOM) // list icerisine li eklendi
        closeBtnDOM = document.querySelectorAll("span.close") //yeni eklenen degeri de gormesi icin close classlari listelendi
        close()
    })
}