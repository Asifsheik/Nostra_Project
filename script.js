var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)

var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

    function () {
        slidermargin = slidermargin + 100

        if (slidermargin > 200) {
            slidermargin = 0
            sliderimage.style.marginLeft = 0;
        }
        else {
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }



    }
)

sliderleftbutton.addEventListener("click",

    function () {

        if (slidermargin == 0) {

            slidermargin = 200
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }
        else {

            slidermargin = slidermargin - 100
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }


    }
)





// Auto-advance the slider every 10 seconds. Clicking the right arrow runs the
// same handler a user click would, so the wrap-around back to the first image
// is handled in one place and the loop never stops.
setInterval(function () {
    sliderrightbutton.click()
}, 10000)

// "Shop Now" in the slider opens the Collections page.
document.getElementById("shop-now-button").addEventListener("click", function () {
    window.location.href = "collections.html"
})

var likebuttons = document.querySelectorAll(".like-button")

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {


        if (e.target.src.indexOf("blackheart") > 0) {
            console.log("jkjk");
            e.target.src = "img/icons/redheart.png"
        }
        else {
            e.target.src = "img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll", function () {
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el) => {
        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()


        console.log(windowHeight)
        console.log(elbound.top)
        if (windowHeight > elbound.top - 100) {
            console.log("Hi")
            el.classList.remove("reveal-scroll-animate")

        }

    })

})


//Collections

// ---- Search by product name ----
var searchInput = document.querySelector(".navbar-search input")
var searchText = ""

searchInput.addEventListener("input", function (e) {
    searchText = e.target.value.trim().toLowerCase()
    update()
})

// Hide the product if its name doesn't match the search text
var productName = product.querySelector("h1").innerText.toLowerCase()
if (!productName.includes(searchText)) {
    product.style.display = "none"
}