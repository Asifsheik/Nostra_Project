

//-----------Offer Close-----------

var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)
//-----------Side navbar------------

var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


// ---------- Product data ----------
const products = [
    { id: 1, name: "Floral Summer Shirt", src: "products/f1.jpg", price: 220, tags: ["new", "blue", "summer"] },
    { id: 2, name: "Summer Green", src: "products/f2.jpg", price: 260, tags: ["new", "green", "beach"] },
    { id: 3, name: "Party Floral Shirt", src: "products/f3.jpg", price: 399, tags: ["old", "red", "party"] },
    { id: 4, name: "Floral Summer Shirt", src: "products/f4.jpg", price: 399, tags: ["old", "white", "beach"] },
    { id: 5, name: "Beach Shirt", src: "products/f5.jpg", price: 579, tags: ["old", "white", "beach"] },
    { id: 6, name: "Shirt Party Red", src: "products/f6.jpg", price: 579, tags: ["old", "red", "party"] },
    { id: 7, name: "Party Floral Shirt", src: "products/f3.jpg", price: 399, tags: ["old", "red", "party"] },
    { id: 8, name: "Shirt Party Red", src: "products/f6.jpg", price: 579, tags: ["old", "red", "party"] },
    { id: 9, name: "Floral Summer Shirt", src: "products/f1.jpg", price: 220, tags: ["new", "blue", "summer"] }
];

// ---------- Elements ----------
const container = document.getElementById("products");
const countLabel = document.getElementById("product-count");
const searchInput = document.getElementById("search-input");
const resetButton = document.getElementById("reset-filters");
const checkboxes = document.querySelectorAll('input[name="tags"]');

// ---------- State ----------
let selectedTags = [];   // tags checked in the sidebar
let searchText = "";   // text typed in the search box

// ---------- Build product cards once ----------
products.forEach(function (product) {
    const card = document.createElement("div");
    card.className = "product";
    card.dataset.tags = product.tags.join(",");
    card.innerHTML =
        '<img src="img/' + product.src + '" alt="' + product.name + '">' +
        '<h1>' + product.name + '</h1>' +
        '<p>₹' + product.price + '</p>';
    card._name = product.name.toLowerCase();
    container.appendChild(card);
});

// ---------- Filter + search ----------
function update() {
    const cards = container.querySelectorAll(".product");
    let visible = 0;

    cards.forEach(function (card) {
        const cardTags = card.dataset.tags.split(",");

        // Tag match: show if no tags selected, or any selected tag matches
        const tagMatch = selectedTags.length === 0 ||
            selectedTags.some(function (tag) { return cardTags.includes(tag); });

        // Search match: product name contains the search text
        const searchMatch = card._name.includes(searchText);

        const show = tagMatch && searchMatch;
        card.style.display = show ? "block" : "none";
        if (show) visible++;
    });

    // Empty state message
    let emptyMsg = container.querySelector(".no-results");
    if (visible === 0) {
        if (!emptyMsg) {
            emptyMsg = document.createElement("div");
            emptyMsg.className = "no-results";
            emptyMsg.textContent = "No products match your filters. Try resetting them.";
            container.appendChild(emptyMsg);
        }
    } else if (emptyMsg) {
        emptyMsg.remove();
    }

    countLabel.textContent = visible + (visible === 1 ? " product" : " products");
}

// ---------- Filter events ----------
checkboxes.forEach(function (box) {
    box.addEventListener("change", function () {
        selectedTags = Array.from(checkboxes)
            .filter(function (b) { return b.checked; })
            .map(function (b) { return b.value; });
        update();
    });
});

// ---------- Search events ----------
searchInput.addEventListener("input", function (e) {
    searchText = e.target.value.trim().toLowerCase();
    update();
});

// ---------- Reset ----------
resetButton.addEventListener("click", function () {
    checkboxes.forEach(function (box) { box.checked = false; });
    searchInput.value = "";
    selectedTags = [];
    searchText = "";
    update();
});

// ---------- Initial render ----------
update();