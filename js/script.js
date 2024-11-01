// // JS for Single product detail




//         var ProductImg = document.getElementById("product-img");//larger image
//         var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

//         SmallImg[0].onclick = function()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
//         {
//             ProductImg.src = SmallImg[0].src;   
//         }

//         SmallImg[1].onclick = function()
//         {
//             ProductImg.src = SmallImg[1].src;   
//         }

//         SmallImg[2].onclick = function()
//         {
//             ProductImg.src = SmallImg[2].src;   
//         }

//         SmallImg[3].onclick = function()
//         {
//             ProductImg.src = SmallImg[3].src;   
//         }


        
 

              
 
    const categorySelect = document.getElementById('categorySelect');
    categorySelect.addEventListener('change', filterProducts);

    function filterProducts() {
        const selectedCategory = categorySelect.value;

        document.querySelectorAll('.col-4').forEach((product) => {
            const productCategory = product.getAttribute('data-category');
            if (selectedCategory === 'all' || productCategory === selectedCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
;


function updatepricevalue(value){
    document.getElementById('value-display').textContent = value;
}

const slider = document.getElementById("pricerange");
slider.addEventListener("input", filterByPrice);

function filterByPrice() {
    const maxPrice = parseFloat(slider.value);
    document.querySelectorAll(".col-4").forEach((product) => {
        const priceElement = product.querySelector("p");
        const price = parseFloat(priceElement.textContent.replace("$", ""));
        if (price <= maxPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}



let totlaprice = 0;
let totalproducts = 0;
 function addprice(price){
    totlaprice += price;
    totalproducts += 1;
    document.getElementById('cart-count').textContent = totlaprice.toFixed(2);
    document.getElementById('product-n').textContent =  totalproducts;
 }