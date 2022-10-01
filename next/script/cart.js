
//show last products
let lsatProduct = document.querySelector('.LASTPRODUCTS');
function showAllProduct() {
  for (let i = 0; i < 3; i++) {
    lsatProduct.innerHTML += `
    <div class="col-lg-4 col-md-4 col-sm-10 mt-3" id="p0001">
    <div class="card shadow ">
      <div class="heart" onclick="likeproducts(event, 'p0001')">
        <i class="fa fa-heart"></i>
      </div>
      <div class="top-div">
        <div class="border">
          <img src="`+ wallpapers[i].img + `">
        </div>
        <span
          class="bg-success d-flex justify-content-center position-absolute p-2 rounded-pill text-light">`+ wallpapers[i].price + `
          تومان</span>
      </div>
      <div class="bottom-div d-flex flex-column p-4 ">
        <h3 class="h6">`+ wallpapers[i].titleProduct + `</h3>

      </div>
      <div class="last-section d-flex justify-content-between align-item-center ps-4 pe-4">
        <div class="last-div">
          <i class="fa-solid fa-cart-shopping text-success h4"></i>
        </div>
        <div class="buttons">
          <button type="button" class="btn btn-outline-success  btn-sm  btnCart " onclick="addToCart(`+ wallpapers[i].id + `)">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
}
showAllProduct();



let cartItems = document.querySelector('.ulCart');


// cart array
let cart = [];

// add to cart function
function addToCart(id){

    let itemId = cart.some(function (item) {
     
      return item.id == id;
        
    });
    alert('در سبد خرید شما ثبت شد'); 
    
    if (itemId) {
      changeNumberOfUnits('plus', id);
  } else {

      let item = wallpapers.find(function (p) {
          return p.id == id;
      });

      item.numberOfUnits = 1;
      cart.push(item);
  }
    renderCartItems(); 
    renderTotal();
}



// render cart items
function renderCartItems(){
    cartItems.innerHTML = '';
    for(let i = 0 ; i < cart.length ; i++){
        cartItems.innerHTML += `
        <li>
            <div class="proCart d-flex position-relative p-3 border-bottom  mb-2">
              <div class="  d-flex flex-column ms-4 align-items-center ">
                <img src="`+cart[i].img+`" class="mb-2 border border-secondary" style="width: 114px; height: 114px;" alt="">
                <span class="text-danger ">فروش ویژه</span>
                <span class="text-muted mt-3">تعداد رول</span>
                <div class="d-flex border p-2 m-2 rounded mt">
                  <div class="plus ms-2"  onclick="changeNumberOfUnits('plus', ` + cart[i].id + `)"><i class="fa-solid fa-plus" style="cursor: pointer;"></i></div>
                  <div class="p-unic">` + cart[i].numberOfUnits + `</div>
                  <div class="minus me-2"  onclick="changeNumberOfUnits('minus', ` + cart[i].id + `)"><i class="fa-solid fa-minus" style="cursor: pointer;"></i></div>
                </div>
              </div>
    
              <div class="  d-flex flex-column justify-content-around p-3">
                <h6 class="h6">`+cart[i].titleProduct+`</h6>
                <div style="font-size: 12px;">کد : `+cart[i].id+`</div>
                <a href="#" class="text-muted" style="font-size: 14px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp"
                    viewBox="0 0 16 16">
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  سوال دارید؟</a>
                <span class="text-danger" style="font-size: 12px;">50.000 تخفیف</span>
                <div>
                  <span class="h6">`+commafy(cart[i].price)+`</span>
                  تومان
                </div>
              </div>
              <div>
                <a href="#" class="position-absolute bottom-0 start-0 p-3 text-danger" onclick="deleteFromCart(`+cart[i].id+`)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3"
                    viewBox="0 0 16 16">
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                  حذف این کالا
                </a>
              </div>
            </div>
          </li>
      `;
    }
}

// change number of units
function changeNumberOfUnits(action, id) {

  cart = cart.map(function (item) {
      let oldNumberOfUnits = item.numberOfUnits; //1

      if (item.id == id) {

          if (action == 'plus' && oldNumberOfUnits < 20 ) {
              oldNumberOfUnits++;
          } else if (action == 'minus' && oldNumberOfUnits > 1) {
              oldNumberOfUnits--;
          }else if(action == 'plus' && oldNumberOfUnits == 20){
            alert('سلام،لطفا برای خرید بالای 20 رول تماس بگیرید ');
          }

      }

      item.numberOfUnits = oldNumberOfUnits;
      return item;
  });

  renderCartItems();
  renderTotal()
}


// render total
let totalPriceEl = document.querySelector('.total-price');
let totalItemsEl = document.querySelector('.total-items');
let totalItemsElCart = document.querySelector('#total-item')

function renderTotal(){
  let totalPrice = 0;
  let totalItems = 0;

  for (let i = 0; i < cart.length ; i++){
      totalItems += cart[i].numberOfUnits;
      totalPrice += cart[i].price * cart[i].numberOfUnits; ; 
  }

  totalPriceEl.innerHTML = commafy(totalPrice);
  totalItemsEl.innerHTML = totalItems;
  totalItemsElCart.innerHTML = totalItems;


}


// delete from cart
function deleteFromCart(id){
  cart = cart.filter(function(item){
      return item.id != id;
  });
  renderCartItems();
  renderTotal();

}


function commafy(num) {
  var str = num.toString().split('.');
  if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  }
  if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}