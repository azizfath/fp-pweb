let promoNodeText = ""
let promoIndicatorNode = ""
let productNodeText = ""

let promo = [{
    filename: "promo_1.png"
}, {
    filename: "promo_2.png"
}]

promo.forEach((item, index) => {
    promoNodeText =
        "<div class=\"carousel-item\">" +
        "<img src=\"./assets/images/promo/" + item.filename + "\" class=\"d-block w-100\">" +
        "</div>"

    promoIndicatorNode =
        "<button " +
        "type=\"button\" " +
        "data-bs-target=\"#carousel-promo\" " +
        "data-bs-slide-to=\"" + (index + 1) + "\" " +
        "aria-label=\"Slide " + (index + 2) + "\" " +
        "></button>"

    document.querySelector("#promo-indicators").innerHTML += promoIndicatorNode
    document.querySelector("#promo-inner").innerHTML += promoNodeText
})

let product = [{
    speed: "10",
    price: "100.000"
}, {
    speed: "20",
    price: "200.000"
}, {
    speed: "40",
    price: "400.000"
}, {
    speed: "80",
    price: "800.000"
}, {
    speed: "100",
    price: "1.000.000"
}, {
    speed: "120",
    price: "1.200.000"
}, {
    speed: "150",
    price: "1.500.000"
}, {
    speed: "200",
    price: "2.000.000"
}, {
    speed: "300",
    price: "3.000.000"
}]

product.forEach((item, index) => {
    let active = ""
    if (index == 0) active = "active"

    productNodeText =
        "<div class=\"carousel-item " + active + " product-item\">" +
        "<div class=\"card border-0 rounded-4 mx-2\">" +
        "<div class=\"card-body text-center py-4\">" +
        "<p>Up to</p>" +
        "<p class=\"fw-bold fs-2\">" + item.speed + " Mbps</p>" +
        "<p>Dual Play</p>" +
        "<b>Tersedia Layanan</b>" +
        "<div>🌐 Internet</div>" +
        "<div>📞 Telepon</div>" +
        "<div class=\"fs-5 mt-3\">Rp " + item.price + "/bulan</div>" +
        "</div>" +
        "</div>" +
        "</div>"

    document.querySelector("#product-list").innerHTML += productNodeText
})

let carouselProduct = document.querySelector("#carousel-product")
let carouselInner = document.querySelectorAll('.carousel-inner')[0]

if (window.matchMedia("(min-width: 768px)").matches) {
    let carouselWidth = document.querySelectorAll(".carousel-inner")[0].scrollWidth
    let cardWidth = document.querySelectorAll(".carousel-item")[0].clientWidth
    let scrollPosition = 0

    document.querySelectorAll(".carousel-control-next")[0].addEventListener("click", () => {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth
            carouselInner.scroll({
                left: scrollPosition,
                top: 0,
                behavior: "smooth",
            })
        }
    })

    document.querySelectorAll(".carousel-control-prev")[0].addEventListener("click", () => {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth
            carouselInner.scroll({
                left: scrollPosition,
                top: 0,
                behavior: "smooth",
            })
        }
    })
}