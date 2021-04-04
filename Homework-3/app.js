const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];
showlist() // sayfa acildiginda showlist calistir

let categorybuttons = document.querySelector(".menu > .btn-container")
const categories = ["All", "Korea", "Japan", "China"]

categories.map((item, index) => {
    let categorybtn = document.createElement("button") //her kategori icin buton olusturuldu
    categorybtn.innerHTML = item
    categorybtn.className = "btn btn-outline-dark btn-item"
    categorybuttons.appendChild(categorybtn)
    categorybuttons.addEventListener("click", showlist) // butona tiklandiginda showlist fonksiyonunu cagir
})

function showlist(event) {
    let category
    event ? category = event.target.innerHTML : category = "all"  //tiklanan kategori ismi alindi 
    let selecteditem = menu.filter(item => item.category == category) //kategorilere gore filtre yapildi sonuc selected item icerisine alindi
    selecteditem.length > 0 ? "" : selecteditem = menu  // filtre sonucu bos array ise menunun tamamini gosterecek
    let section = document.querySelector(".section-center")
    section.innerHTML = ""          //her tiklamada ici bosaltilmis oldu
    selecteditem.map((item, index) => {  //filtrelenen yemeklerin bilgileri map ile alindi
        // her yemek icin col > img info > menu-text menu-title> title price elementleri olusturuldu
        // innerHTML ile daha anlasilir olabilirdi
        let col = document.createElement("div")
        col.className = "menu-items col-lg-6 col-sm-12"

        let img = document.createElement("img")
        img.src = item.img
        img.className = "photo"

        let info = document.createElement("div")
        info.className = "menu-info"

        let menutitle = document.createElement("div")
        menutitle.className = "menu-title"

        let title = document.createElement("h4")
        title.innerHTML = item.title

        let price = document.createElement("h4")
        price.className = "price"
        price.innerHTML = item.price

        let menutext = document.createElement("div")
        menutext.className = "menu-text"
        menutext.innerHTML = item.desc

        menutitle.appendChild(title)
        menutitle.appendChild(price)

        info.appendChild(menutitle)
        info.appendChild(menutext)

        col.appendChild(img)
        col.appendChild(info)

        section.appendChild(col)
    })
}