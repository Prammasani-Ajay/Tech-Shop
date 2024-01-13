let browseAllProducts = document.querySelector(".browseAllProducts");
let clear_Filter_Btn = document.querySelector("#clear_Filter_Btn");
const filter_Section = document.querySelector("#filter_Section");
clear_Filter_Btn.addEventListener("click",productsPage)


let products = JSON.parse(localStorage.getItem("API Data"))

console.log(products)

function cardItemsCreation(id) {
    //creating node and appending them
    const parentNode = document.createElement("div");
    const image = document.createElement("img");
    const productDatasection = document.createElement("div")
    const ratings = document.createElement("div");
    const productTitle = document.createElement("h4");
    const productInfo = document.createElement("p");
    const horizLine = document.createElement("hr");
    const price = document.createElement("span");
    const AddToCartBtn = document.createElement("button");

    all_Products.appendChild(parentNode)
    
    parentNode.setAttribute("class", "productDetails")
    parentNode.appendChild(image);
    image.setAttribute("src", `.${products[id - 1].images[0]}`)
    image.setAttribute("width", "200px")
    image.setAttribute("class", "topImageOfProduct")
    parentNode.appendChild(productDatasection)
    productDatasection.setAttribute("class", "dataOfproduct")
    productDatasection.appendChild(ratings);
    productDatasection.appendChild(productTitle);
    productTitle.innerHTML = `${products[id - 1].title}`
    productDatasection.appendChild(productInfo);
    productInfo.innerHTML = `${products[id - 1].info}`
    productInfo.setAttribute("style", "color:#a9a9a9")
    parentNode.appendChild(horizLine);
    parentNode.appendChild(price);
    price.setAttribute("style", "font-size:20px")
    price.innerHTML = `₹${products[id - 1].finalPrice}&nbsp&nbsp&nbsp<strike style="font-size:18px">₹${products[id - 1].originalPrice}</strike><br>`
    parentNode.appendChild(AddToCartBtn);
    AddToCartBtn.innerHTML = "Add to cart"
    AddToCartBtn.setAttribute("class", "addToCartBtn")

    let rateCount = products[id - 1].rateCount;
    starsCount = "";

    for (let count = 0; count < rateCount; count++) {
        starsCount += `<i class="fa-solid fa-star ratingStars"></i> &nbsp`;
    }

    ratings.innerHTML = starsCount
}


function arrangeLowToHigh(){
    all_Products.innerHTML="";
    clear_Filter_Btn.setAttribute("style","display:block")
    let emptyArray = [];
    products.forEach(obj =>{
        emptyArray.push(obj.finalPrice);
    })
    emptyArray.sort(function(a, b) { return a > b ? 1 : -1});
    emptyArray.forEach(value=>{
        products.forEach(obj=>{
            if(value === obj.finalPrice){
                cardItemsCreation(obj.id,false)
                console.log(obj.id)
            }
        })
    })
    for (let i = 0; i < images.length; i++) {
        let srcValue = images[i].getAttribute("src").split("/");
        let iName = srcValue[srcValue.length - 1]
        images[i].addEventListener("click", () => {
            console.log(images)
            representationOfItem(iName)
            // console.log(products[1].images)
        })
    }
}

products.forEach(item =>{
    productsPage(item.id)
})

function productsPage(itemId){
    // all_Products.innerHTML="";
    cardItemsCreation(itemId)
    filter_Section.setAttribute("style","display:block")
    clear_Filter_Btn.setAttribute("style","display:none")
    window.scrollTo(0, 0)
    for (let i = 0; i < images.length; i++) {
        let srcValue = images[i].getAttribute("src").split("/");
        let iName = srcValue[srcValue.length - 1]
        images[i].addEventListener("click", () => {
            console.log(images)
            representationOfItem(iName)
            // console.log(products[1].images)
        })
    }
    let lowestPrice_List = document.getElementById("lowestPrice_List");
    let highestPrice_List = document.getElementById("highestPrice_List");
    lowestPrice_List.addEventListener("click",arrangeLowToHigh)
    highestPrice_List.addEventListener("click",highestPrice_List)
}