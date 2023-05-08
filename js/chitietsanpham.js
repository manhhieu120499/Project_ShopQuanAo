const products_item = document.querySelectorAll('.product_list_iterm');
const wrap = document.querySelector('.wrapper');


for(let i = 0 ; i < products_item.length ; i++) {
    products_item[i].addEventListener('click', ()=> {
        var name = products_item[i].querySelector('.name');
        console.log(name.innerText);
        getInfomationProduct(name.innerText);
        wrap.classList.add('open');  
    });
}

function getInfomationProduct(value) {
    fetch('../data/data.json')
     .then((response)=> {
        return response.json()
     }).then((json) => {
        getProduct(json, value)
     }).then(data => {
        const btn_close = document.querySelector('.close');
        btn_close.addEventListener('click', ()=> {
            wrap.classList.remove('open');
        })
     })
}


function getProduct(json, value) {
    var con = document.querySelector('.container');
    var temp = json.product.map((item) => {
        if(item.name === value) {
           return `
           <div class="left_image">
           <img src="${item.picture}" alt="">
      </div>

      <div class="right_des">
           <h2>${item.name}</h2>
           <div class="rating">
              <ul>
                  <li>
                      <ul class="sub_star">
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" id="img" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                               </svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                               </svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                               </svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                               </svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                               </svg>
                          </li>
                      </ul>
                  </li>
                  <li><b>210 Đánh giá</b></li>
                  <li><b>1.5k Đã bán</b></li>
              </ul>
             
           </div>
           <p class="money">${item.price}</p>
           <div class="size">
              <p>Size: </p>
               <ul>
                   <li>XXL</li>
                   <li>XL</li>
                   <li>L</li>
                   <li>M</li>
                   <li>S</li>
               </ul>
           </div>

            <div class="amount">
              <p>Số lượng: </p>
               <ul>
                   <li>-</li>
                   <li>${item.quantity}</li>
                   <li>+</li>
               </ul>
            </div>

            <div class="btn">
              <a href="#">Thêm vào giỏ hàng</a>
              <a href="#">Mua hàng</a>
            </div>
      </div>

      <div class="close">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M10 10l4 4m0 -4l-4 4"></path>
           </svg>
      </div>
  </div>
   `
}
    });
    con.innerHTML = temp.join('');
}

// const btn_close = document.querySelector('.close');
//         btn_close.addEventListener('click', ()=> {
//             wrap.classList.remove('open');
//         })
