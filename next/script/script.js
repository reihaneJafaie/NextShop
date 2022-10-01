//tab menu
function openWallpaper(evt, cityName) {
  var i, tabcontent, tablinks;
  var footerdivision,
    footerdivision = document.getElementById("footerdivision")
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    footerdivision.style.display = "block"

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//show weblogs
let weblogs = document.querySelector('.weblogs')
function showAllPosts() {

  for (let i = 0; i < 7; i++) {

    weblogs.innerHTML +=
      `
        <a href="#"
              class="weblog col-lg-10 col-md-4 col-sm-4 asidepost d-flex justify-content-center  flex-column align-items-center">

              <div class=" card  shadow mb-5 ">
              <div class="backgroundEffect"></div>
                <div class="pic"> <img class=""
                    src="`+ Weblog[i].img + `" alt="">
                  <div class="date d-flex flex-column align-items-center justify-content-center"> <span
                      class="day">`+ Weblog[i].dateDay + `</span> <span class="month">` + Weblog[i].datemonth + `</span> <span class="year">` + Weblog[i].dateyear + `</span>
                  </div>
                </div>
                <div class="contentt p-2">
                  <p class="h6 titleposts mt-2">`+ Weblog[i].tittle + `</p>
                  <p class="text-muted mt-3">
                  `+ Weblog[i].description + `
                  </p>
                  <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                    <div class="d-flex align-items-center justify-content-around   w-100">
                      <p class="admin text-muted">نکست</p>
                      <p class="ps-3 icon text-muted">3<span class="fas fa-comment-alt pe-1"></span></p>
                      <button type="button" class="btn btn-outline-success btn-sm">بیشتر بخوانید ...</button>
                    </div>
                  </div>
                </div>
              </div>

            </a>

        `
  }
}
showAllPosts();


//show last products
let lsatProduct = document.querySelector('.LASTPRODUCTS');
function showAllProduct() {
  for (let p = 0; p < 3; p++) {
    lsatProduct.innerHTML += `
    <div class="col-lg-4 col-md-4 col-sm-10 mt-3" id="p0001">
    <div class="card shadow ">
      <div class="heart" onclick="likeproducts(event, 'p0001')">
        <i class="fa fa-heart"></i>
      </div>
      <div class="top-div">
        <div class="border">
          <img src="`+ wallpapers[p].img + `">
        </div>
        <span
          class="bg-success d-flex justify-content-center position-absolute p-2 rounded-pill text-light">`+ wallpapers[p].price + `
          تومان</span>
      </div>
      <div class="bottom-div d-flex flex-column p-4 ">
        <h3 class="h6">`+ wallpapers[p].titleProduct + `</h3>

      </div>
      <div class="last-section d-flex justify-content-between align-item-center ps-4 pe-4">
        <div class="last-div">
          <i class="fa-solid fa-cart-shopping text-success h4"></i>
        </div>
        <div class="buttons">
          <button type="button" class="btn btn-outline-success btn-sm   " onclick="addToCart(`+ wallpapers[p].id + `)">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
}
showAllProduct()





// change number of units
function changeNumberOfUnits(action, id) {

  cart = cart.map(function (item) {
    let oldNumberOfUnits = item.numberOfUnits; //1

    if (item.id == id) {

      if (action == 'plus' && oldNumberOfUnits < item.instock) {
        oldNumberOfUnits++;
      } else if (action == 'minus' && oldNumberOfUnits > 1) {
        oldNumberOfUnits--;
      }

    }

    item.numberOfUnits = oldNumberOfUnits;
    return item;
  });

  renderCartItems();
  renderTotal();

}





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




// change number of units
function changeNumberOfUnits(action, id) {

  cart = cart.map(function (item) {
      let oldNumberOfUnits = item.numberOfUnits; //1

      if (item.id == id) {

          if (action == 'plus' && oldNumberOfUnits < 20 ) {
              oldNumberOfUnits++;
          } else if (action == 'minus' && oldNumberOfUnits > 1) {
              oldNumberOfUnits--;
          }

      }

      item.numberOfUnits = oldNumberOfUnits;
      return item;
  });

  renderCartItems();
  renderTotal()
}


// render total

let totalItemsElCart = document.querySelector('#total-item')

function renderTotal(){
  let totalItems = 0;
  for (let i = 0; i < cart.length ; i++){
      totalItems += cart[i].numberOfUnits;
  }
  totalItemsElCart.innerHTML = totalItems;


}


