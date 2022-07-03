let productNodeText = ""

let product = [
    {
        speed : "10",
        price : "100.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "20",
        price : "200.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "40",
        price : "400.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "80",
        price : "800.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "100",
        price : "1.000.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "120",
        price : "1.200.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "150",
        price : "1.500.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "200",
        price : "2.000.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        speed : "300",
        price : "3.000.000",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]

product.forEach((item, index) => {
    let active = ""
    if(index == 0) active = "active"

    productNodeText =
        "<div class=\"carousel-item " + active + "\">" +
            "<div class=\"card\">" +
                "<div class=\"card-body p-5\" style=\"display: flex; flex-direction: column\">" +
                    "<div class=\"product-detail\">" +
                        "<div class=\"product-detail-left\">" +
                            "<p>Up to</p>" +
                            "<p class=\"fw-bold fs-2\">" + item.speed + " Mbps</p>" +
                            "<p>Dual Play</p>" +
                        "</div>" +
                        "<div class=\"product-detail-right\">" +
                            "<b>Tersedia Layanan</b>" +
                            "<div>🌐 Internet</div>" +
                            "<div>📞 Telepon</div>" +
                            "<div class=\"fs-4 mt-3\">Rp " + item.price + "/bulan</div>" +
                        "</div>" +
                    "</div>" +
                    "<hr>" +
                    "<p>" +
                        item.desc +
                    "</p>" +
                    "<button type=\"button\" class=\"btn btn-secondary py-3 px-5 button-center\">Pesan Sekarang</button>" +
                "</div>" +
            "</div>" +
        "</div>"

    document.querySelector("#product-detail").innerHTML += productNodeText
})

