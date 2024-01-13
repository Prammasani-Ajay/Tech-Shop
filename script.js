
const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "Keep the noise out, or in. You choose.",
        heroImage: "/images/products/jbl660nc-1.png",
        images: [
            "/images/products/jbl660nc-1.png",
            "/images/products/jbl660nc-2.png",
            "/images/products/jbl660nc-3.png",
            "/images/products/jbl660nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 660NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "/images/products/boat518-1.png",
            "/images/products/boat518-2.png",
            "/images/products/boat518-3.png",
            "/images/products/boat518-4.png"
        ],
        brand: "boAt",
        title: "boAt Rockerz 518",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "/images/products/boat131-3.png",
        images: [
            "/images/products/boat131-3.png",
            "/images/products/boat131-1.png",
            "/images/products/boat131-2.png",
            "/images/products/boat131-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 131",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "/images/products/boat110-1.png",
            "/images/products/boat110-2.png",
            "/images/products/boat110-3.png",
            "/images/products/boat110-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 110",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "/images/products/boat410-1.png",
            "/images/products/boat410-2.png",
            "/images/products/boat410-3.png",
            "/images/products/boat410-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 410",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "/images/products/jbl200bt-1.png",
            "/images/products/jbl200bt-2.png",
            "/images/products/jbl200bt-3.png",
            "/images/products/jbl200bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 200BT",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Give your favourite music a boost.",
        heroImage: "/images/products/sonyxb910n-1.png",
        images: [
            "/images/products/sonyxb910n-1.png",
            "/images/products/sonyxb910n-2.png",
            "/images/products/sonyxb910n-3.png",
            "/images/products/sonyxb910n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-XB910N",
        info: "Wireless Over-Ear Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "/images/products/jbl760nc-1.png",
            "/images/products/jbl760nc-2.png",
            "/images/products/jbl760nc-3.png",
            "/images/products/jbl760nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 760NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "/images/products/boat255r-1.png",
            "/images/products/boat255r-2.png",
            "/images/products/boat255r-3.png",
            "/images/products/boat255r-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 255",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "/images/products/jbl100-1.png",
            "/images/products/jbl100-2.png",
            "/images/products/jbl100-3.png",
            "/images/products/jbl100-4.png",
        ],
        brand: "JBL",
        title: "JBL Wave 100",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "/images/products/sony1000xm4-1.png",
            "/images/products/sony1000xm4-2.png",
            "/images/products/sony1000xm4-3.png",
            "/images/products/sony1000xm4-4.png"
        ],
        brand: "Sony",
        title: "Sony WF-1000XM4",
        info: "Wireless In-Ear NC Headphones",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "/images/products/boat228-1.png",
            "/images/products/boat228-2.png",
            "/images/products/boat228-3.png",
            "/images/products/boat228-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 228",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "/images/products/jbl-endu-1.png",
            "/images/products/jbl-endu-2.png",
            "/images/products/jbl-endu-3.png",
            "/images/products/jbl-endu-4.png",
        ],
        brand: "JBL",
        title: "JBL Endurance Run Sports",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "/images/products/boat203-1.png",
            "/images/products/boat203-2.png",
            "/images/products/boat203-3.png",
            "/images/products/boat203-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 203",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "/images/products/sonych710n-1.png",
            "/images/products/sonych710n-2.png",
            "/images/products/sonych710n-3.png",
            "/images/products/sonych710n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-CH710N",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "/images/products/jbl500bt-1.png",
            "/images/products/jbl500bt-2.png",
            "/images/products/jbl500bt-3.png",
            "/images/products/jbl500bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 500BT",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "/images/products/boat381-1.png",
            "/images/products/boat381-2.png",
            "/images/products/boat381-3.png",
            "/images/products/boat381-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 381",
        info: "In-Ear Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "/images/products/sony-ex14ap-1.png",
            "/images/products/sony-ex14ap-2.png",
            "/images/products/sony-ex14ap-3.png",
            "/images/products/sony-ex14ap-4.png"
        ],
        brand: "Sony",
        title: "Sony MDR-EX14AP",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "/images/products/sonyxb400-1.png",
            "/images/products/sonyxb400-2.png",
            "/images/products/sonyxb400-3.png",
            "/images/products/sonyxb400-4.png",
        ],
        brand: "Sony",
        title: "Sony WI-XB400",
        info: "Wireless Extra Bass In-Ear Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
];


const reviewsData = [
    {
        id: 1,
        name: "Atharva Kumar",
        date: "4 Aug 2022",
        review: "Sound is awesome and as I expected, love it.",
        rateCount: 5,
    },
    {
        id: 2,
        name: "Ritika Sen",
        date: "15 July 2022",
        review: "Very good and awesome product",
        rateCount: 5,
    },
    {
        id: 3,
        name: "Bhavesh Joshi",
        date: "10 June 2022",
        review: "Super amazing product !!!",
        rateCount: 4,
    },
    {
        id: 4,
        name: "Anandi Gupta",
        date: "6 May 2022",
        review: "Great NC, sound is a bit flat",
        rateCount: 4,
    },
    {
        id: 5,
        name: "Arif Khan",
        date: "27 April 2022",
        review: "Very good but still has flaws!",
        rateCount: 3,
    },
]

// export default productsData;
//////////////////////////////////////////////////////////////////////////////////////

const body = document.querySelector("body");
const searchIcon = document.querySelector(".searchIcon");
const searchBar = document.querySelector(".searchBar");
const cartContent = document.querySelector(".cartSection")
const cartIcon = document.querySelector(".cartIcon")
const carouselsMain = document.querySelector("#carouselExampleAutoplaying");
const featuredProducts = document.querySelector("#featuredProducts");
const productSets = document.querySelector("#productSets");
const userDetails = document.querySelector(".userDetails");
const userAcc_Icon = document.querySelector(".userAcc_Icon");
const login_Signup = document.querySelector(".loginbtn");
const loginDialog = document.querySelector(".loginDialog")
const signupDialog = document.querySelector(".signupDialog")
const checkAccOccuring = document.getElementById("checkAccOccuring")
const createAccount_tab = document.querySelector("#createAcctab");
const login_tab = document.querySelector("#logintab");
const closeButton1 = document.querySelector(".closebtn1")
const closeButton2 = document.querySelector(".closebtn2")
const carouselImageSlides = document.querySelector(".carouselImageSlides")
const cardsWithData = document.getElementById("cardsWithData")
let images = document.getElementsByTagName("img")
let addToCartBtnOfAllProducts = document.getElementsByClassName("addToCartBtn");
const countOfProducts = document.getElementById("countOfProducts")


//SELECTING ALL CLASS LIST OF TOP PRODUCTS TITLES.
let topProductsTitles = document.getElementsByClassName("itemsTitleName");

//Event function for Search icon.
function search() {
    searchBar.setAttribute("style", "display:block")
}
function searchDisplayNone() {
    searchBar.setAttribute("style", "display:none")
    // carouselsMain.setAttribute("style", "display:block")
}
//Event function for cart icon.
function cartIconToDiplay() {
    cartContent.setAttribute("style", "display:block");
}
function cartIconToDiplayNone() {
    cartContent.setAttribute("style", "display:none")
}

searchIcon.addEventListener("click", search)

body.addEventListener("dblclick", searchDisplayNone)

//Event for user icon.
userAcc_Icon.addEventListener("mouseenter", () => {
    userDetails.setAttribute("style", "display:block")
})
userDetails.addEventListener("mouseleave", () => {
    userDetails.setAttribute("style", "display:none")
})

//Event for login & signup option.
login_Signup.addEventListener("click", () => {
    loginDialog.showModal()
})
// let name = "@userName"
// checkAccOccuring.innerHTML=`New to ${name} ? <a>Create an account</a>`;

// Event for create or login tabs
createAccount_tab.addEventListener("click", () => {
    signupDialog.showModal()
    loginDialog.close()
})
login_tab.addEventListener("click", () => {
    loginDialog.showModal()
    signupDialog.close()
})
//Adding event for close button of a forms.
closeButton1.addEventListener("click", () => {
    loginDialog.close()
})

closeButton2.addEventListener("click", () => {
    signupDialog.close()
})


function carouselsDataCreation(identity) {
    let carouselsCreate = document.createElement("div")
    let titleCarousel = document.createElement("div")
    let imageCarousel = document.createElement("img")
    let priceCarousel = titleCarousel.cloneNode()

    carouselImageSlides.appendChild(carouselsCreate);
    carouselsCreate.setAttribute("class", "carouselsData")
    carouselsCreate.appendChild(titleCarousel);
    titleCarousel.innerHTML = `${productsData[identity - 1].title}`
    carouselsCreate.appendChild(imageCarousel);
    imageCarousel.setAttribute("src", `.${productsData[identity - 1].images[0]}`)
    imageCarousel.setAttribute("width", "200px")
    carouselsCreate.appendChild(priceCarousel);
    priceCarousel.innerHTML = (`<span style="font-size:16px;color:white">₹${productsData[identity - 1].finalPrice}</span>&nbsp&nbsp&nbsp<strike style="font-size:16px">₹${productsData[identity - 1].originalPrice}</strike>`)
}


//List of items to display as a section. ( id = identity )

let listOfItemsToDisplay = [13, 14, 2, 8, 9]    //based on id value respective product needs to display.

listOfItemsToDisplay.forEach(element => {
    carouselsDataCreation(element);
});

//products in home page,

function cardItemsCreation(id,Boolean) {
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

    if (Boolean) {
        cardsWithData.appendChild(parentNode);
    }else{
        all_Products.appendChild(parentNode)
    }
    parentNode.setAttribute("class", "productDetails")
    parentNode.appendChild(image);
    image.setAttribute("src", `.${productsData[id - 1].images[0]}`)
    image.setAttribute("width", "200px")
    image.setAttribute("class", "topImageOfProduct")
    parentNode.appendChild(productDatasection)
    productDatasection.setAttribute("class", "dataOfproduct")
    productDatasection.appendChild(ratings);
    productDatasection.appendChild(productTitle);
    productTitle.innerHTML = `${productsData[id - 1].title}`
    productDatasection.appendChild(productInfo);
    productInfo.innerHTML = `${productsData[id - 1].info}`
    productInfo.setAttribute("style", "color:#a9a9a9")
    parentNode.appendChild(horizLine);
    parentNode.appendChild(price);
    price.setAttribute("style", "font-size:20px")
    price.innerHTML = `₹${productsData[id - 1].finalPrice}&nbsp&nbsp&nbsp<strike style="font-size:18px">₹${productsData[id - 1].originalPrice}</strike><br>`
    parentNode.appendChild(AddToCartBtn);
    AddToCartBtn.innerHTML = "Add to cart"
    AddToCartBtn.setAttribute("class", "addToCartBtn")

    let rateCount = productsData[id - 1].rateCount;
    starsCount = "";

    for (let count = 0; count < rateCount; count++) {
        starsCount += `<i class="fa-solid fa-star ratingStars"></i> &nbsp`;
    }

    ratings.innerHTML = starsCount
}

//Function to create Card Browse All Products Card to Explore (Link)

function browseAllProsuctsCard(params) {
    const browseCard = document.createElement("div");
    browseCard.setAttribute("class", "productDetails")
    const text = document.createElement("p")
    text.setAttribute("class", "browseAllProducts")
    text.innerHTML = `Browse All <br> Products <i class="fa-solid fa-arrow-right"></i>`
    cardsWithData.appendChild(browseCard)
    browseCard.appendChild(text)
}

//Adding deatails of product  to cart section.
const cartItems = JSON.parse(localStorage.getItem("Data")) || []

//Removing Duplicates of an array and Adding into Cart.
const uniqueArray = cartItems.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === cartItems.findIndex(obj => {
        return JSON.stringify(obj) === _value;
    });
});
countOfProducts.innerHTML = `${cartItems.length}`

function creatingArrayObj(title,info,quantity,originalPrice,finalPrice,path){
    let emptyObj = {};
    this.title = title;
    this.info = info;
    this.quantity = quantity;
    this.originalPrice = originalPrice;
    this.finalPrice = finalPrice;
    this.discount = originalPrice - finalPrice;
    this.filepath = path;

    emptyObj.title = this.title;
    emptyObj.info = this.info;
    emptyObj.quantity = this.quantity;
    emptyObj.originalPrice = this.originalPrice;
    emptyObj.finalPrice = this.finalPrice;
    emptyObj.discount = this.discount;
    emptyObj.name_Item = this.filepath;

    cartItems.push(emptyObj)
    
}
creatingArrayObj.prototype.length = function(){
    return cartItems.length
}
// console.log(localStorage.getItem("Data"))

function extractProductDetails(verify){
    productsData.forEach((element,index)=>{
        element.images.forEach(img=>{
            let singleArr = img.split("/")
            let fileName = singleArr[singleArr.length-1]
            if(fileName === verify){
                // console.log(productsData[index].id)
                let newData = new creatingArrayObj(productsData[index].title,productsData[index].info,1,productsData[index].originalPrice,productsData[index].finalPrice,productsData[index].images[0])
                // console.log(emptyArr)
                localStorage.setItem("Data",JSON.stringify(cartItems))
                countOfProducts.innerHTML = `${newData.length()}`
            }
        })      
    })
}

var typesOfProducts = function (innerElement) {

    if (innerElement === "All") {
        cardsWithData.innerHTML = " ";
        productsData.forEach(product => {
            if (product.id <= 11) {
                cardItemsCreation(product.id,true)
            }
        });
        //At last of all products appending the browse card.
        browseAllProsuctsCard()
    } else if (innerElement === "Headphones") {
        cardsWithData.innerHTML = " ";
        productsData.forEach(product => {
            if (product.category == "Headphones") {

                cardItemsCreation(product.id,true)
            }
        });
    } else if (innerElement === "Earbuds") {
        cardsWithData.innerHTML = " ";
        productsData.forEach(product => {
            if (product.category == "Earbuds") {

                cardItemsCreation(product.id,true)
            }
        });
    } else if (innerElement === "Earphones") {
        cardsWithData.innerHTML = " ";
        productsData.forEach(product => {
            if (product.category == "Earphones") {

                cardItemsCreation(product.id,true)
            }
        });
    } else if (innerElement === "Neckbands") {
        cardsWithData.innerHTML = " ";
        productsData.forEach(product => {
            if (product.category == "Neckbands") {

                cardItemsCreation(product.id,true)
            }
        });
    } else {
        cardsWithData.innerHTML = "";
        productsData.forEach(product => {
            cardItemsCreation(product.id, false)
            let productSets_titles = document.querySelector(".productSets_titles");
            let heading_Products = document.querySelector("#heading_Products")
            productSets_titles.setAttribute("style", "display:none")
            heading_Products.setAttribute("style", "display:none")
        });
    }
    addToCart_ImageFunctionalities()
}

//To open and display product details.

const detailsOfItem = document.getElementById("productDetails")
const allImages = document.querySelector(".allImages")
const displayImage = document.querySelector(".displayImage")
const imageDetails = document.querySelector(".imageDetails")

const headerPartOfDetails = document.querySelector(".headerPartOfDetails")
const pricePartOfDetails = document.querySelector(".pricePartOfDetails")
const offersPartOfDetails = document.querySelector(".offersPartOfDetails")
const btnInDetails = document.querySelector(".btnInDetails")

const aboutTitles = document.getElementsByClassName("aboutTitles")
const specifications = document.getElementById("specifications")

function representationOfItem(imageFileName) {
    window.scrollTo(0, 0)
    detailsOfItem.setAttribute("style", "display:block")
    carouselsMain.setAttribute("style", "display:none")
    featuredProducts.setAttribute("style", "display:none")
    productSets.setAttribute("style", "display:none")

    allImages.innerHTML = "";
    displayImage.innerHTML = "";
    headerPartOfDetails.innerHTML = "";
    pricePartOfDetails.innerHTML = "";
    specifications.innerHTML = "";

    //Creating images in Product Details Section.
    const image_1 = document.createElement("img");
    const image_2 = image_1.cloneNode();
    const image_3 = image_1.cloneNode();
    const image_4 = image_1.cloneNode();
    allImages.appendChild(image_1);
    allImages.appendChild(image_2);
    allImages.appendChild(image_3);
    allImages.appendChild(image_4);

    const sideImagesInDetails = document.getElementsByClassName("side_Images");
    const showImage = document.createElement("img");
    showImage.setAttribute("width", "500rem");
    displayImage.appendChild(showImage);
    showImage.innerHTML = "";

    for (let l = 0; l < productsData.length; l++) {
        let filesVerify = productsData[l].images[0].split("/");
        let filePathName = filesVerify[filesVerify.length - 1]
        if (filePathName === imageFileName) {
            // console.log(`.${productsData[l].images[imgs]}`)
            showImage.setAttribute("src", `.${productsData[l].images[0]}`);
            for (let imgs = 0; imgs < productsData[l].images.length; imgs++) {
                if (imgs == 0) {
                    image_1.setAttribute("src", `.${productsData[l].images[imgs]}`)
                    image_1.setAttribute("atl", "img Error")
                    image_1.setAttribute("class", "side_Images")
                } else if (imgs == 1) {
                    image_2.setAttribute("src", `.${productsData[l].images[imgs]}`)
                    image_2.setAttribute("atl", "img Error")
                    image_2.setAttribute("class", "side_Images")
                } else if (imgs == 2) {
                    image_3.setAttribute("src", `.${productsData[l].images[imgs]}`)
                    image_3.setAttribute("atl", "img Error")
                    image_3.setAttribute("class", "side_Images")
                } else {
                    image_4.setAttribute("src", `.${productsData[l].images[imgs]}`)
                    image_4.setAttribute("atl", "img Error")
                    image_4.setAttribute("class", "side_Images")
                }
            }

            //Details header part
            const titleOfItem = document.createElement("h4");
            titleOfItem.innerHTML = `${productsData[l].title}`;
            titleOfItem.setAttribute("style", "color:white")
            const aboutItem = document.createElement("p");
            aboutItem.innerHTML = `${productsData[l].info}`
            const starsCounting = document.createElement("span")
            starsCounting.setAttribute("style", "color:#c10000;font-size:10px;padding-right:5px")
            let totalStars = productsData[l].rateCount;
            let stars = "";
            for (let count = 0; count < totalStars; count++) {
                stars += `<i class="fa-solid fa-star ratingStars"></i> &nbsp`;
            }
            starsCounting.innerHTML = stars;
            let totalRatings = document.createElement("span");
            totalRatings.setAttribute("style", "color:#a09f9f;font-size:15px;padding-left:10px;border:2px solid #a09f9f;border-top:none;border-right:none;border-bottom:none")
            totalRatings.innerHTML = `${productsData[l].ratings} Ratings`

            headerPartOfDetails.appendChild(titleOfItem)
            headerPartOfDetails.appendChild(aboutItem)
            headerPartOfDetails.appendChild(starsCounting)
            headerPartOfDetails.appendChild(totalRatings)

            //Details Middle part 
            const parentOfpriceSec = document.createElement("div")
            parentOfpriceSec.setAttribute("style", "display:flex;")
            const fpHolder = document.createElement("p");
            fpHolder.innerHTML = `₹${productsData[l].finalPrice}`
            console.log(fpHolder)
            console.log(productsData[l].finalPrice)
            fpHolder.setAttribute("style", "font-size:32px;color:white;padding-right:15px;font-weight:bold")

            const opHolder = document.createElement("strike");
            opHolder.innerHTML = `₹${productsData[l].originalPrice} `
            opHolder.setAttribute("style", "font-size:20px;padding-top:15px;font-weight:bold")

            const instock = document.createElement("span");
            instock.innerHTML = `<i class="fa-solid fa-check"></i> &nbsp In Stock`;
            instock.setAttribute("style", "transform:translate(100px,30px);background-color:green;color:white;height:35px;padding:5px 10px;border-radius:5px")

            let totalSaveINR = productsData[l].originalPrice - productsData[l].finalPrice;
            let totalSavePercent = Math.ceil(totalSaveINR / productsData[l].originalPrice * 100)

            const savingsDisplay = document.createElement("p")
            savingsDisplay.innerHTML = `You save : ₹${totalSaveINR} &nbsp (${totalSavePercent}%)`
            savingsDisplay.setAttribute("style", "color:green")

            pricePartOfDetails.appendChild(parentOfpriceSec)
            parentOfpriceSec.appendChild(fpHolder)
            parentOfpriceSec.appendChild(opHolder)
            parentOfpriceSec.appendChild(instock)
            pricePartOfDetails.appendChild(savingsDisplay)

            const taxesLine = document.createElement("p")
            taxesLine.innerHTML = `(Inclusive of all taxes)`

            pricePartOfDetails.appendChild(taxesLine)

            offersPartOfDetails.setAttribute("style", "display:block")
            btnInDetails.setAttribute("style", "display:block")

            for (let i = 0; i < sideImagesInDetails.length; i++) {

                sideImagesInDetails[i].addEventListener("click", () => {
                    if (i == 0) {
                        showImage.setAttribute("src", `${image_1.getAttribute("src")}`);
                    } else if (i == 1) {
                        showImage.setAttribute("src", `${image_2.getAttribute("src")}`);
                    } else if (i == 2) {
                        showImage.setAttribute("src", `${image_3.getAttribute("src")}`);
                    } else if (i == 3) {
                        showImage.setAttribute("src", `${image_4.getAttribute("src")}`);
                    }
                })
            }
            let allSpecifications = "";
            if (filePathName === imageFileName) {
                function specificationAll() {
                    // console.log(productsData[l].brand)
                    allSpecifications = `<div class="arrangeAlign"><p>Brand</p><p><b>${productsData[l].brand}</b></p></div>
                                        <div class="arrangeAlign"><p>Model</p><p><b>${productsData[l].title}</b></p></div>
                                        <div class="arrangeAlign"><p>Generic Name </p><p><b>${productsData[l].category}</b></p></div>
                                        <div class="arrangeAlign"><p>Headphone Type</p><p><b> ${productsData[l].type}</b></p></div>
                                        <div class="arrangeAlign"><p>Connectivity</p><p><b> ${productsData[l].connectivity}</b></p></div>
                                        <div class="arrangeAlign"><p>Microphone</p><p><b> Yes</p></div>`

                    specifications.innerHTML = allSpecifications;
                }

                function overview() {
                    // console.log(productsData[l].brand)
                    allSpecifications = `<div class="overviewOfItem">The <span>${productsData[l].title}</span> <span>${productsData[l].info} provides with fabulous sound quality</span>
                    <ul>
                        <li>Sound Tuned to Perfection</li>
                        <li>Comfortable to Wear</li>
                        <li>Long Hours Playback Time</li>
                    </ul>
                    Buy the <span>${productsData[l].title} ${productsData[l].info}</span> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Headphones giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.<div>`

                    specifications.innerHTML = allSpecifications;
                }

                function reviews() {
                    allSpecifications = ""
                    for (let i = 0; i < reviewsData.length; i++) {
                        let rc = reviewsData[i].rateCount;
                        let strs = "";
                        for (let count = 0; count < rc; count++) {
                            strs += `<i class="fa-solid fa-star ratingStars"></i> &nbsp`;
                        }
                        allSpecifications += `<div class="profileInfo"><i class="fa-solid fa-user"></i>
                                                <div class="profileInfoText">
                                                    <h6>${reviewsData[i].name}</h6>
                                                    <div class="reviewData">
                                                    <p>${strs}</p>
                                                    <p>${reviewsData[i].date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p style="padding:5px 10px">${reviewsData[i].review}</p>
                                            <hr style="width: 25rem;color: #d6d6d6;">`
                    }

                    specifications.innerHTML = allSpecifications;
                    console.log(allSpecifications)
                }
            }


            let aboutValue;
            aboutTitles[0].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;");
            aboutValue = aboutTitles[0].textContent;
            // console.log(aboutValue)
            specificationAll()
            for (let a = 0; a < aboutTitles.length; a++) {
                switch (a) {
                    case 0:
                        aboutTitles[0].addEventListener("click", () => {
                            specificationAll()
                            aboutTitles[0].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;");
                            aboutTitles[1].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                            aboutTitles[2].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                        })
                    case 1:
                        aboutTitles[1].addEventListener("click", () => {
                            overview()
                            aboutTitles[1].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;");
                            aboutTitles[0].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                            aboutTitles[2].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                        })
                    case 2:
                        aboutTitles[2].addEventListener("click", () => {
                            reviews()
                            aboutTitles[2].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;");
                            aboutTitles[1].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                            aboutTitles[0].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                        })
                }
            }
            const relatedProducts = document.createElement("section")
            relatedProducts.setAttribute("class","relatedProducts")
            let relatedProductsSection = document.querySelector(".relatedProducts")
            if (filePathName === imageFileName){
               productsData.forEach(item=>{
                if(item.category === productsData[l].category){
                    cardItemsCreation(item.id,2)
                }
               })
            }

            detailsOfItem.appendChild(relatedProducts)
        }
    }

    //Add to Cart Funtionalities 
    btnInDetails.addEventListener("click",()=>{
        let imgPath = btnInDetails.closest(".imageDetails").previousSibling.previousSibling.firstChild.getAttribute("src").split("/")
        let finalAdress = imgPath[imgPath.length-1]
        // console.log(finalAdress)
        extractProductDetails(finalAdress)
        
    })
}

//Hover on Top Products Titles.
let val;
topProductsTitles[0].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;")
val = topProductsTitles[0].textContent;
typesOfProducts(val);
for (let a = 0; a < topProductsTitles.length; a++) {
    switch (a) {
        case 0:

            // typesOfProducts(val);
            topProductsTitles[0].addEventListener("click", () => {
                val = topProductsTitles[0].textContent;
                console.log(val)
                typesOfProducts(val);
                let browseAllProducts = document.querySelector(".browseAllProducts");
                browseAllProducts.addEventListener("click", productsPage)
                topProductsTitles[0].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;")
                topProductsTitles[1].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[2].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[3].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[4].setAttribute("style", "background-color:none;border-radius:none;color: none;")
            })
            break;
        case 1:

            // typesOfProducts(val);
            topProductsTitles[1].addEventListener("click", () => {
                val = topProductsTitles[1].textContent;
                typesOfProducts(val);
                topProductsTitles[1].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;")
                topProductsTitles[0].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[2].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[3].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[4].setAttribute("style", "background-color:none;border-radius:none;color: none;")
            })
            break;
        case 2:

            // typesOfProducts(val);
            topProductsTitles[2].addEventListener("click", () => {
                val = topProductsTitles[2].textContent;
                typesOfProducts(val);
                topProductsTitles[2].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;")
                topProductsTitles[1].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[0].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[3].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[4].setAttribute("style", "background-color:none;border-radius:none;color: none;")
            })
            break;
        case 3:

            // typesOfProducts(val);
            topProductsTitles[3].addEventListener("click", () => {
                val = topProductsTitles[3].textContent;
                typesOfProducts(val);
                topProductsTitles[3].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;")
                topProductsTitles[1].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[2].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[0].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[4].setAttribute("style", "background-color:none;border-radius:none;color: none;")
            })
            break;
        case 4:
            val = topProductsTitles[4].textContent;
            // typesOfProducts(val);
            topProductsTitles[4].addEventListener("click", () => {
                val = topProductsTitles[4].textContent;
                typesOfProducts(val);
                topProductsTitles[4].setAttribute("style", "background-color: #e40000;border-radius: 7px;cursor: pointer;color: #ffffff;")
                topProductsTitles[1].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[2].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[3].setAttribute("style", "background-color:none;border-radius:none;color: none;")
                topProductsTitles[0].setAttribute("style", "background-color:none;border-radius:none;color: none;")
            })
            break;
    }
}

const carouselsShopButton = document.getElementsByClassName("startShopingbtn")
carouselsShopButton[0].addEventListener("click", () => {
    representationOfItem("jbl660nc-1.png")
})
carouselsShopButton[1].addEventListener("click", () => {
    representationOfItem("boat131-3.png")
})
carouselsShopButton[2].addEventListener("click", () => {
    representationOfItem("sonyXb910n-1.png")
})

//To come back from any page and page reloading.
const reloadHomepage = document.getElementById("homePage")
reloadHomepage.addEventListener('click', function () { location.reload() });


function addToCart_ImageFunctionalities(){
    addToCartBtnOfAllProducts = document.getElementsByClassName("addToCartBtn");
    // console.log(addToCartBtnOfAllProducts)

    for (let k = 0; k < addToCartBtnOfAllProducts.length; k++) {
        addToCartBtnOfAllProducts[k].addEventListener("click", () => {
            let imgPath = addToCartBtnOfAllProducts[k].previousSibling.previousSibling.previousSibling.previousSibling.getAttribute("src").split("/")
            let finalAdress = imgPath[imgPath.length-1]
            // console.log(finalAdress)
            extractProductDetails(finalAdress)
        })
    }

    images = document.getElementsByTagName("img");
    
    for (let i = 0; i < images.length; i++) {
        let srcValue = images[i].getAttribute("src").split("/");
        let iName = srcValue[srcValue.length - 1]
        images[i].addEventListener("click", () => {
            console.log(images)
            representationOfItem(iName)
            // console.log(productsData[1].images)
        })
    }
}

let browseAllProducts = document.querySelector(".browseAllProducts");
let clear_Filter_Btn = document.querySelector("#clear_Filter_Btn");
const filter_Section = document.querySelector("#filter_Section");
browseAllProducts.addEventListener("click", productsPage)
clear_Filter_Btn.addEventListener("click", productsPage)

// Arranging Items based on the Filter selection , Funtion for LOW TO HIGH Price.
function arrangeLowToHigh() {
    all_Products.innerHTML = ""
    let emptyArray = [];
    productsData.forEach(obj => {
        emptyArray.push(obj.finalPrice);
    })
    emptyArray.sort(function (a, b) { return a > b ? 1 : -1 });
    emptyArray.forEach(value => {
        productsData.forEach(obj => {
            if (value === obj.finalPrice) {
                cardItemsCreation(obj.id, false)
                console.log(obj.id)
            }
        })
    })
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}
//Funtion for HIGH TO LOW Price.

function arrangeHighToLow() {
    all_Products.innerHTML = ""
    let emptyArray = [];
    productsData.forEach(obj => {
        emptyArray.push(obj.finalPrice);
    })
    emptyArray.sort(function (a, b) { return a < b ? 1 : -1 });
    emptyArray.forEach(value => {
        productsData.forEach(obj => {
            if (value === obj.finalPrice) {
                cardItemsCreation(obj.id, false)
                console.log(obj.id)
            }
        })
    })
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}

//Function of filttering the Only Headphones;
function headphones_Filtering() {
    if (filter_Headphones.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.category === "Headphones" && cardItemsCreation(obj.id, false) })
    } else {
        productsPage()
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}

//Function of filttering the Only Earphones & and also HeadPhones;
function earbuds_Filtering() {
    if (filter_Earbuds.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.category === "Earbuds" && cardItemsCreation(obj.id, false) })
    } else {
        headphones_Filtering()
    }
    if (filter_Earbuds.checked === true && filter_Headphones.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.category === "Earbuds" && cardItemsCreation(obj.id, false)) || (obj.category === "Headphones" && cardItemsCreation(obj.id, false)) })
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}

//Function of filttering the Only Earbuds & and also HeadPhones,Earbuds;
function earphones_Filtering() {
    if (filter_Earphones.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.category === "Earphones" && cardItemsCreation(obj.id, false) })
    } else {
        earbuds_Filtering()
    }
    if (filter_Earbuds.checked === true && filter_Headphones.checked === true && filter_Earphones.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.category === "Earbuds" && cardItemsCreation(obj.id, false)) || (obj.category === "Headphones" && cardItemsCreation(obj.id, false)) || (obj.category === "Earphones" && cardItemsCreation(obj.id, false)) })
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}

//Function of filttering the Only Earbuds & and also HeadPhones,Earbuds and Neckbands;

function neckbands_Filtering() {
    if (filter_Neckbands.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.category === "Neckbands" && cardItemsCreation(obj.id, false) })
    } else {
        earbuds_Filtering()
    }
    if (filter_Earphones.checked === true && filter_Neckbands.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.category === "Neckbands" && cardItemsCreation(obj.id, false)) || (obj.category === "Earphones" && cardItemsCreation(obj.id, false)) })
    } else if (filter_Earbuds.checked === true && filter_Neckbands.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.category === "Neckbands" && cardItemsCreation(obj.id, false)) || (obj.category === "Earbuds" && cardItemsCreation(obj.id, false)) })
    } else if (filter_Headphones.checked === true && filter_Neckbands.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.category === "Neckbands" && cardItemsCreation(obj.id, false)) || (obj.category === "Headphones" && cardItemsCreation(obj.id, false)) })
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}
//Filtering Based on the Brands & to display only JBL
function filter_JBL() {
    if (brand_JBL.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.brand === "JBL" && cardItemsCreation(obj.id, false) })
    } else {
        productsPage()
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}
//Filtering Based on the Brands & to display Boat and JBL
function filter_boAt() {
    console.log("ajay")
    if (brand_boAt.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.brand === "boAt" && cardItemsCreation(obj.id, false) })
    } else {
        productsPage()
    }
    if (brand_boAt.checked === true && brand_JBL.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.brand === "JBL" && cardItemsCreation(obj.id, false)) || (obj.brand === "boAt" && cardItemsCreation(obj.id, false)) })
    } else if (brand_boAt.checked === true && brand_Sony.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.brand === "Sony" && cardItemsCreation(obj.id, false)) || (obj.brand === "boAt" && cardItemsCreation(obj.id, false)) })
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}
function filter_Sony() {
    if (brand_Sony.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { obj.brand === "Sony" && cardItemsCreation(obj.id, false) })
    } else {
        productsPage()
    }
    if (brand_Sony.checked === true && brand_JBL.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.brand === "Sony" && cardItemsCreation(obj.id, false)) || (obj.brand === "JBL" && cardItemsCreation(obj.id, false)) })
    } else if (brand_JBL.checked === true && brand_Sony.checked === true && brand_boAt.checked === true) {
        all_Products.innerHTML = "";
        productsData.filter((obj) => { (obj.brand === "JBL" && cardItemsCreation(obj.id, false)) || (obj.brand === "boAt" && cardItemsCreation(obj.id, false)) })
    }
    addToCart_ImageFunctionalities()
    clear_Filter_Btn.setAttribute("style", "display:block")
}


function productsPage() {
    all_Products.innerHTML = "";
    typesOfProducts()
    detailsOfItem.setAttribute("style", "display:none")
    carouselsMain.setAttribute("style", "display:none")
    featuredProducts.setAttribute("style", "display:none")
    productSets.setAttribute("style", "display:block")
    filter_Section.setAttribute("style", "display:block")
    clear_Filter_Btn.setAttribute("style", "display:none")
    window.scrollTo(0, 0)
    let lowestPrice_List = document.getElementById("lowestPrice_List");
    let highestPrice_List = document.getElementById("highestPrice_List");
    let filter_Headphones = document.getElementById("filter_Headphones");
    let filter_Earbuds = document.getElementById("filter_Earbuds");
    let filter_Earphones = document.getElementById("filter_Earphones");
    let filter_Neckbands = document.getElementById("filter_Neckbands");
    let brand_JBL = document.getElementById("brand_JBL");
    let brand_boAt = document.getElementById("brand_boAt");
    let brand_Sony = document.getElementById("brand_Sony");
    filter_Headphones.checked = false
    filter_Earbuds.checked = false
    filter_Earbuds.checked = false
    filter_Neckbands.checked = false
    brand_JBL.checked = false
    brand_boAt.checked = false
    brand_Sony.checked = false

    lowestPrice_List.addEventListener("click", arrangeLowToHigh)
    highestPrice_List.addEventListener("click", arrangeHighToLow)

    filter_Headphones.addEventListener("click", headphones_Filtering)
    filter_Earbuds.addEventListener("click", earbuds_Filtering)
    filter_Earphones.addEventListener("click", earphones_Filtering)
    filter_Neckbands.addEventListener("click", neckbands_Filtering)
    brand_JBL.addEventListener("click", filter_JBL)
    brand_boAt.addEventListener("click", filter_boAt)
    brand_Sony.addEventListener("click", filter_Sony)

}

//Searching and Displaying Items using Search Bar.


searchBar.addEventListener("keyup", () => {
    let listOfItemNames = ""
    let val = searchBar.value
    productsData.forEach(obj => {
        let str = obj.title.split("")
        let str1 = obj.title.split(" ")
        str.forEach(dig => {
            if (val === dig) {
                listOfItemNames += `<div class="nameOfItem">${str.join("")}</div>`
                console.log(str.join(""))
            }
        })
        str1.forEach(dig => {
            if (val === dig) {
                listOfItemNames += `<div class="nameOfItem">${str.join("")}</div>`
                console.log(str.join(""))
            }
        })
    })
    searchElements.innerHTML = listOfItemNames
    searchElements.setAttribute("style", "display:block")

    let nameOfItem = document.getElementsByClassName("nameOfItem")

    for (let individualClass of nameOfItem) {
        individualClass.addEventListener("click", () => {
            productsData.forEach(obj => {
                if (obj.title === individualClass.textContent) {
                    let imageURL = obj.images[0].split("/")
                    let imagePath = imageURL[imageURL.length - 1]
                    representationOfItem(imagePath)
                    searchElements.setAttribute("style", "display:none")
                    searchBar.setAttribute("style", "display:none")
                }
            })
        })
    }

})
const current_year = document.getElementById("current_year")
let current_Year_ = new Date();
current_year.innerHTML = `${current_Year_.getFullYear()}`

//Scroll to top;
let iconToTop = document.getElementById("angletoScrollUp")
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Set a certain scroll level to trigger the display/hide logic
    const triggerScrollLevel = 750;

    // Get reference to the hidden content element

    // Check if the scroll position is beyond the trigger level
    if (scrollPosition >= triggerScrollLevel) {
      // Display the hidden content
      iconToTop.style.display = 'block';
    } else {
      // Hide the hidden content
      iconToTop.style.display = 'none';
    }
  });
  iconToTop.addEventListener("click",()=>{
    window.scrollTo(0, 0)
  })