const list_Data = document.querySelector("#list_Data");
const summary_Part = document.querySelector("#summary_Part");
const entireCart = document.querySelector(".entireCart");
const wholeItemsInCart = document.querySelector(".wholeItemsInCart");
let countOfProducts = document.querySelector("#countOfProducts");

// Retrieve data from local storage
const allProducts = JSON.parse(localStorage.getItem("Data"));

// Removing duplicate objects from the array
const uniqueArray = allProducts.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === allProducts.findIndex(obj => {
        return JSON.stringify(obj) === _value;
    });
});
countOfProducts.innerHTML = `${uniqueArray.length}`
function displayCart(){
    let listOfItems = "";
    let orderSummary = "";
    let total_Orginal_Price = 0;
    let total_discount = 0;
    let total_final_Price = 0;
    let total_quantity = 0
    uniqueArray.map((currentObj) => {
        entireCart.setAttribute("style","display:none")
        wholeItemsInCart.setAttribute("style","display:flex")
        listOfItems += `<section class="details_AddedItem">
                        <img src=".${currentObj.name_Item}" alt="error" width="120px">
                        <div class="titles_Prices">
                            <p>${currentObj.title} ${currentObj.info}</p>
                            <span style="font-size:20px; font-weight:650">${currentObj.finalPrice}&nbsp<strike style="font-size:15px">${currentObj.originalPrice} </strike></span>
                            <div class="counter">
                                <button class="decrementBtn">-</button>
                                <span>${currentObj.quantity}</span>
                                <button class="incrementBtn">+</button>
                            </div>
                        </div>
                        <div class="deleteIcon">
                            <i class="fa-solid fa-trash-can" style="color:black"></i>
                        </div>
                        </section>
                        <hr size="4" class="hrTaginAddCart">`   
                        
        total_Orginal_Price += currentObj.originalPrice*currentObj.quantity;
        total_discount += currentObj.discount*currentObj.quantity;
        total_final_Price += currentObj.finalPrice*currentObj.quantity;
        total_quantity += currentObj.quantity
        countOfProducts.innerHTML = `${total_quantity}`
        orderSummary = `    <div class="itemsCount">
                                <h4>Order Summary (${total_quantity} item)</h4>
                            </div>
                            <div class="prices">
                                <div>
                                    <p>Original Price</p>
                                    <b> ₹${total_Orginal_Price}</b>
                                </div>
                                <div>
                                    <p>Discount </p>
                                    <p> ₹${total_discount}</p>
                                </div>
                                <div>
                                    <p>Delivery </p>
                                    <p> Free </p>
                                </div>
                            </div>
                        <hr size="4" class="hrTaginSummay">
                        <div class="total Price">
                            <b>Total Price </b>
                            <b> ₹${total_final_Price}</b>
                        </div>
                        <button class="checkoutBtn">Check Out</button>`
    })
    
    list_Data.innerHTML = listOfItems
    summary_Part.innerHTML = orderSummary

    let incrementButton = document.getElementsByClassName("incrementBtn");
    let decrementButton = document.getElementsByClassName("decrementBtn");
    let deleteIcon = document.getElementsByClassName("deleteIcon");
    for(let x=0,y=0,z=0;x<incrementButton.length,y<decrementButton.length,z<deleteIcon.length;x++,y++,z++){
        incrementButton[x].addEventListener("click",()=>{
            uniqueArray[x].quantity++
            localStorage.setItem("Data",JSON.stringify(uniqueArray))
            displayCart()
         })
         decrementButton[y].addEventListener("click",()=>{
            uniqueArray[y].quantity > 1 && uniqueArray[y].quantity--
            localStorage.setItem("Data",JSON.stringify(uniqueArray))
            displayCart()
        })
        deleteIcon[z].addEventListener("click",()=>{
            uniqueArray.splice(z,1)
            localStorage.setItem("Data",JSON.stringify(uniqueArray))
            displayCart()
            // countOfProducts.innerHTML = `${uniqueArray.length}`
            location.reload()
        })
    }
}
displayCart()

const current_year = document.getElementById("current_year")
let current_Year_ = new Date();
current_year.innerHTML = `${current_Year_.getFullYear()}`