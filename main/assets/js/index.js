let promoNodeText = ""
let promoIndicatorNode = ""

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

let carouselProduct = document.querySelector("#carousel-product")
let carouselInner = document.querySelectorAll('.carousel-inner-product')[0]

if (window.matchMedia("(min-width: 768px)").matches) {
    let carouselWidth = document.querySelectorAll(".carousel-inner-product")[0].scrollWidth
    let cardWidth = document.querySelectorAll(".product-item")[0].clientWidth
    let scrollPosition = 0

    document.getElementById("next-btn").addEventListener("click", () => {
        console.log("haha")
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth
            carouselInner.scroll({
                left: scrollPosition,
                top: 0,
                behavior: "smooth",
            })
        }
    })

    document.getElementById("prev-btn").addEventListener("click", () => {
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