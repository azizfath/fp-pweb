let teamNodeText = ""

let team = [
    {
        job : "Job 1",
        img : "01.jpg",
        name : "AAAA",
        nim : "1111"
    },{
        job : "Job 2",
        img : "01.jpg",
        name : "BBBB",
        nim : "2222"
    },{
        job : "Job 3",
        img : "01.jpg",
        name : "AAAA",
        nim : "1111"
    },{
        job : "Job 4",
        img : "01.jpg",
        name : "AAAA",
        nim : "1111"
    },{
        job : "Job 5",
        img : "01.jpg",
        name : "AAAA",
        nim : "1111"
    },{
        job : "Job 6",
        img : "01.jpg",
        name : "AAAA",
        nim : "1111"
    },{
        job : "Job 7",
        img : "01.jpg",
        name : "AAAA",
        nim : "1111"
    }
]

team.forEach((item, index) => {
    let active = ""
    if(index == 0) active = "active"

    teamNodeText =
        "<div class=\"card\">" +
            "<div class=\"card-body text-center\">" +
                "<div class=\"fs-5\">" + item.job + "</div>" +
                "<div class=\"px-3\">" +
                    "<img src=\"./assets/images/team/" + item.img + "\" class=\"rounded-3\" width=\"100%\">" +
                "</div>" +
                "<div class=\"mt-3\">Nama : " + item.name + "</div>" +
                "<div>NIM : " + item.nim + "</div>" +
            "</div>" +
        "</div>"

    document.querySelector("#team").innerHTML += teamNodeText
})

