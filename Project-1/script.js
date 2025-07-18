let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "TopWear",
            price: "30",
            image: "shirt1.jpg",
        },
        {
            productName: "Beige short Skirt",
            category: "BottomWear",
            price: "49",
            image: "shirt2.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "shirt3.avif",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "shirt4.webp",
        },
        {
            productName: "Stylish Pink Tousers",
            category: "Bottomwear",
            price: "89",
            image: "shirt5.jpg",
        },
        {
            productName: "Brown Mens Jacket",
            category: "Jacket",
            price: "189",
            image: "shirt6.webp",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "shirt7.jpg",
        },
        {
            productName: "Sporty Watch",
            category: "Watch",
            price: "499",
            image: "watch1.webp",
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src", "images/" + i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");
    card.appendChild(container);

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();

    container.appendChild(name);

    let price = document.createElement("h6");
    price.classList.add("product-price");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards;
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "All") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
};


//search Button;

document.getElementById("search").addEventListener("click",()=>{
    //get the value of input;
    let searchInput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");

     
     elements.forEach((element,index)=>{
        if(element.innerText.toUpperCase().includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }else{
            cards[index].classList.add("hide");
        };
     });



});

// inially display all products;
window.onload = () => {
    filterProduct("All");
};
