
function uptadeProduct(product) {
    
    const title = document.querySelectorAll('.title-product');
    title.forEach(item => {
        item.innerHTML = product.nome
    })
    document.querySelector('.current').innerHTML = `R$ ${product.preco_venda.toFixed(2)}`;
    document.querySelector('.normal').innerHTML = `R$ ${product.preco_normal.toFixed(2)}`;
    const imageProduct = document.querySelector('.image-show a img');
    imageProduct.setAttribute('src', product.imagem);

    const imageLightBox = document.getElementById('image-light-box');
    imageLightBox.setAttribute('href', product.imagem);

    document.getElementById('marca-description').innerHTML = product.marca;

    let valueDiscount = (100 - (product.preco_venda*100/product.preco_normal));
    document.querySelector('.discount').innerHTML = `${parseInt(valueDiscount)}%<br>OFF`

}

function productDetails() {
    const urlParametros = new URLSearchParams(window.location.search);
    const productId = urlParametros.get('id');

    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const product = data.find(item => item.id == parseInt(productId));
            uptadeProduct(product)

        })

        .catch(error => console.error("Erro ao carregar detalhes do produto:", error))
}

function loadTrendingProductBig() {
    fetch('products.json')
    .then(response => response.json())
    .then(products => {

        const product = products[0];
        const percentDesconto = (100 - (product.preco_venda*100/product.preco_normal));
        const trendingProductBig = document.querySelector('.trending .big')
        trendingProductBig.innerHTML = `<div class="item">
        <div class="offer">
            <p>Oferta termina em</p>
            <ul class="flexcenter">
                <li>1</li>
                <li>15</li>
                <li>27</li>
                <li>60</li>
            </ul>
        </div>
        <div class="media">
            <div class="thumbnail">
                <a href="/page-single.html">
                    <img src= ${product.imagem} alt="">
                </a>
            </div>
            <div class="hoverable">
                <ul>
                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                </ul>
            </div>
            <div class="discount circle flexcenter"><span>${parseInt(percentDesconto)}%</span></div>
        </div>
        <div class="content">
            <div class="rating">
                <div class="stars"></div>
                <span class="mini-text">(2,548)</span>
            </div>
            <h3 class="main-links"><a href="/page-single.html?id=${product.id}" class="btn-link">${product.nome}</a></h3>
            <div class="price">
                <span class="current">R$ ${product.preco_venda.toFixed(2)}</span>
                <span class="normal mini-text">R$ ${product.preco_normal.toFixed(2)}</span>
            </div>
            <div class="stock mini-text" data-stock= "1000">
                <div class="qty">
                    <span>Vendidos: <strong class="qty-sold">200</strong></span>
                    <span>Estoque: <strong class="qty-available">800</strong></span>
                </div>
                <div class="bar">
                    <div class="available"></div>
                </div>
            </div>
        </div>
    </div>`
        
    })
}

function loadTrendingProductsMini() {
    fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const firstRow = document.getElementById('first-row-trending')
        const secondRow = document.getElementById('second-row-trending')
        
        products.slice(1,5).map(product => {

            const percentDesconto = (100 - (product.preco_venda*100/product.preco_normal));
            firstRow.innerHTML += `<div class="item">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a href="#">
                        <img src=${product.imagem} alt="">
                    </a>
                </div>
                <div class="hoverable">
                    <ul>
                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                    </ul>
                </div>
                <div class="discount circle flexcenter"><span>${parseInt(percentDesconto)}%</span></div>
            </div>
            <div class="content">
                <h3 class="main-links"><a href="/page-single.html?id=${product.id}">${product.nome}</a></h3>
                <div class="rating">
                    <div class="stars"></div>
                    <div class="mini-text">(2.548)</div>
                </div>
                <div class="price">
                    <span class="current">R$ ${product.preco_venda.toFixed(2)}</span>
                    <span class="normal mini-text">R$ ${product.preco_normal.toFixed(2)}</span>
                </div>
                <div class="mini-text">
                    <p>2975 vendidos</p>
                    <p>Frete Grátis</p>
                </div>
            </div>
        </div>`
        })

        products.slice(5,9).map(product => {

            const percentDesconto = (100 - (product.preco_venda*100/product.preco_normal));
            secondRow.innerHTML += `<div class="item">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a href="#">
                        <img src=${product.imagem} alt="">
                    </a>
                </div>
                <div class="hoverable">
                    <ul>
                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                    </ul>
                </div>
                <div class="discount circle flexcenter"><span>${parseInt(percentDesconto)}%</span></div>
            </div>
            <div class="content">
                <h3 class="main-links"><a href="/page-single.html?id=${product.id}">${product.nome}</a></h3>
                <div class="rating">
                    <div class="stars"></div>
                    <div class="mini-text">(2.548)</div>
                </div>
                <div class="price">
                    <span class="current">R$ ${product.preco_venda.toFixed(2)}</span>
                    <span class="normal mini-text">R$ ${product.preco_normal.toFixed(2)}</span>
                </div>
                <div class="mini-text">
                    <p>2975 vendidos</p>
                    <p>Frete Grátis</p>
                </div>
            </div>
        </div>`
        })


    })
}


function loadRelatedProducts() {
    fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const featuresProducts = document.querySelectorAll('.features .products');
    
        products.slice(0,10).map(product => {
            const percentDesconto = (100 - (product.preco_venda*100/product.preco_normal));

            featuresProducts.forEach(item => {
                item.innerHTML += `<div class="item">
                <div class="media">
                    <div class="thumbnail object-cover">
                        <a href="#">
                            <img src= ${product.imagem}>
                        </a>
                    </div>
                    <div class="hoverable">
                        <ul>
                            <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                            <li><a href="#"><i class="ri-eye-line"></i></a></li>
                            <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                        </ul>
                    </div>
                    <div class="discount circle flexcenter"><span>${parseInt(percentDesconto)}%</span></div>
                </div>
                <div class="content">
                    <div class="rating">
                        <div class="stars"></div>
                        <span class="mini-text">(1.955)</span>
                    </div>
                    <h3 class="main-links"><a href="/page-single.html?id=${product.id}">${product.nome}</a></h3>
                    <div class="price">
                        <span class="current">${product.preco_venda.toFixed(2)}</span>
                        <span class="normal mini-text">${product.preco_normal.toFixed(2)}</span>
                    </div>
                </div>
            </div>`
            })

        })

        
    })
    
}

function loadAllProducts() {
    fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const featuresAllProducts = document.querySelector('.section .all-products');
    
        products.map(product => {
            const percentDesconto = (100 - (product.preco_venda*100/product.preco_normal));

            featuresAllProducts.innerHTML += `<div class="item">
                <div class="media">
                    <div class="thumbnail object-cover">
                        <a href="#">
                            <img src= ${product.imagem}>
                        </a>
                    </div>
                    <div class="hoverable">
                        <ul>
                            <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                            <li><a href="#"><i class="ri-eye-line"></i></a></li>
                            <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                        </ul>
                    </div>
                    <div class="discount circle flexcenter"><span>${parseInt(percentDesconto)}%</span></div>
                </div>
                <div class="content">
                    <div class="rating">
                        <div class="stars"></div>
                        <span class="mini-text">(1.955)</span>
                    </div>
                    <h3 class="main-links"><a href="/page-single.html?id=${product.id}">${product.nome}</a></h3>
                    <div class="price">
                        <span class="current">${product.preco_venda.toFixed(2)}</span>
                        <span class="normal mini-text">${product.preco_normal.toFixed(2)}</span>
                    </div>
                </div>
            </div>`
            })

            .catch(error => console.error(error))

        
    })
    
}

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

function removeProductOnMiniCart() {
     
    const removeProductButtons = document.querySelectorAll('#remove-item-list');
    for (let i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove()
            const nameProduct = e.target.parentElement.parentElement.querySelector('.item .item-content p a').innerText
            for (let i = 0; i < cart.length; i++){
                if (cart[i].product.nome == nameProduct){
                    cart.splice(i, 1);
                    sessionStorage.setItem('cart', JSON.stringify(cart))   
                    setTimeout(function() {
                        location.reload();
                    }, 3000)
                    break;     
                }
            }
        })
    }
}

function updateMiniCart() {
    
    const qtyItemsCart = document.querySelector('.mini-cart .cart-head');
    const qtyNumberIcon = document.querySelectorAll('.icon-large .item-number, .cart-trigger .fly-item span.item-number');
    const cartBody = document.querySelector('.mini-cart .cart-body');
    const cartFooter = document.querySelector('.mini-cart .cart-footer');
    const ListCartProducts = document.querySelector('.mini-cart .products');
    
    ListCartProducts.innerHTML = '';
    for (let i = 0; i < cart.length; i++){    
        ListCartProducts.innerHTML += 
            `
            <li class="item" data-product-id="${cart[i].product.id}">
                <div class="thumbnail object-cover">
                    <a href="#"><img src=${cart[i].product.imagem} alt=""></a>
                </div>
                <div class="item-content">
                    <p><a href="#">${cart[i].product.nome}</a></p>
                    <span class="price flexitem">
                        <span>R$ ${cart[i].product.preco_venda.toFixed(2)}</span>
                        <div class="qty-item flexitem">
                            <input type="text" value="${cart[i].quantity}">
                            <div class="control-buttons">
                                <button><i class="ri-arrow-up-s-line"></i></button>
                                <button><i class="ri-arrow-down-s-line"></i></button>
                            </div>
                        </div>
                    </span>
                </div>
                <a href="#" class="item-remove"><i class="ri-close-line" id="remove-item-list"></i></a>
            </li>
            `
        }  
        if (cart.length > 0){
            calculateSubtotal();
            removeProductOnMiniCart();
            qtyControlMiniCart();
            if (cart.length == 1){
                qtyItemsCart.innerHTML = `${cart.length} item no carrinho`;
            }else{
                qtyItemsCart.innerHTML = `${cart.length} itens no carrinho`;
            }
            qtyNumberIcon.forEach(element => {
                element.innerHTML = `${cart.length}`
            });
            cartBody.classList.remove('hidden');
            cartFooter.classList.remove('hidden');
        }else{
            qtyItemsCart.innerHTML = 'Nenhum produto no carrinho';
            qtyNumberIcon.innerHTML = '0';
            cartBody.classList.add('hidden');
            cartFooter.classList.add('hidden');
        }  
    
}

function addProductToCart(){
    const urlParametros = new URLSearchParams(window.location.search);
    const idProduct = urlParametros.get('id');
    
    fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productSelected  = products.find(product => product.id == parseInt(idProduct))
        const existingProductIndex = cart.findIndex(item => item.product.id === parseInt(productSelected.id))
        if (existingProductIndex === -1){
            const newItem = {
                product: productSelected,
                quantity: 1
            };
            cart.push(newItem);
            
        }
        else{
            cart[existingProductIndex].quantity++;
        }
        sessionStorage.setItem('cart', JSON.stringify(cart))
        updateMiniCart();
    })
}

function qtyControlMiniCart(){
    const btnUp = document.querySelectorAll('.mini-cart .control-buttons .ri-arrow-up-s-line');
    const btnDown = document.querySelectorAll('.mini-cart .control-buttons .ri-arrow-down-s-line');

    btnUp.forEach(element => {
        element.addEventListener('click', (e) => {
            const valueInput = e.target.parentElement.parentElement.parentElement.querySelector('input');
            valueInput.value = parseInt(valueInput.value) + 1;
            const productId = e.target.closest('.item').dataset.productId;
            const qty = cart.find(item => item.product.id === parseInt(productId));
            qty.quantity++;
            sessionStorage.setItem('cart', JSON.stringify(cart));
            updateMiniCart();     
            updateCart();
            
        })
    })

    btnDown.forEach(element => {
        element.addEventListener('click', (e) =>{
            const valueInput = e.target.parentElement.parentElement.parentElement.querySelector('input')
            if (parseInt(valueInput.value) > 1){
                valueInput.value = parseInt(valueInput.value) - 1;
                const productId = e.target.closest('.item').dataset.productId;
                const qty = cart.find(item => item.product.id === parseInt(productId));
                qty.quantity--;
                sessionStorage.setItem('cart', JSON.stringify(cart));
                updateMiniCart(); 
                updateCart();
            }
        })
    })
}

function removeProductOnPageCart(){
    const removeProductsButton = document.querySelectorAll('#remove-item-table');
    removeProductsButton.forEach(element => {
        element.addEventListener('click', (e) =>{
            e.target.closest('tr').remove()
            e.preventDefault()
            const idProduct = e.target.closest('tr').dataset.productId;
            for (let i = 0; i < cart.length; i++){
                if (cart[i].product.id == idProduct){
                    cart.splice(i, 1);
                    sessionStorage.setItem('cart',JSON.stringify(cart))
                    setTimeout(function() {
                        location.reload();
                    }, 1000)
                    break; 
                }
            }
        })
    })
}

function updateCart(){
    if (cart.length > 0){
        const productItemTable = document.querySelector('.single-cart #cart-table tbody');
        productItemTable.innerHTML ='';
        cart.forEach(element => {
            const subtotalItem = element.product.preco_venda*element.quantity;
            productItemTable.innerHTML += `<tr data-product-id="${element.product.id}">
                                                <td class="flexitem"> 
                                                    <div class="thumbnail object-cover">
                                                        <a href="#"><img src= ${element.product.imagem}></a>
                                                    </div>
                                                    <div class="content">
                                                        <strong><a href="#">${element.product.nome}</a></strong>
                                                        <p>Marca: ${element.product.marca}</p>
                                                    </div>
                                                </td>
                                                <td>R$ ${element.product.preco_venda.toFixed(2)}</td>
                                                <td>
                                                    <div class="qty-item flexitem">
                                                        <input type="text" value="${element.quantity}">
                                                        <div class="control-buttons">
                                                            <button><i class="ri-arrow-up-s-line" id="btncarttable"></i></button>
                                                            <button><i class="ri-arrow-down-s-line"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="subtotal">R$ ${subtotalItem.toFixed(2)}</td>
                                                <td><a href="#" class="item-remove"><i class="ri-close-line" id="remove-item-table"></i></a></td>
                                            </tr>`
        })
        qtyControlPageCart();
        removeProductOnPageCart();
    }else {
        const noProductsInCart = document.querySelector('.single-cart .products');
        noProductsInCart.innerHTML = `<div><h3>Nenhum produto no carrinho</h3></div>
                                      <div class="primary-checkout">
                                      <a href="../page-category.html"><button class="primary-button" style= "margin-bottom: 40px;">Voltar para loja</button></a>
                                      </div>
        `
    }
}

function qtyControlPageCart(){
    const btnUp = document.querySelectorAll('.single-cart #cart-table .control-buttons .ri-arrow-up-s-line');
    const btnDown = document.querySelectorAll('.single-cart #cart-table .control-buttons .ri-arrow-down-s-line');

    btnUp.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            const valueInput = e.target.parentElement.parentElement.parentElement.querySelector('input');
            valueInput.value = parseInt(valueInput.value) + 1;
            const productId = e.target.closest('tr').dataset.productId;
            const qty = cart.find(item => item.product.id === parseInt(productId));
            qty.quantity++;
            sessionStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            updateMiniCart();
        })
    })

    btnDown.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            const valueInput = e.target.parentElement.parentElement.parentElement.querySelector('input')
            if (valueInput.value > 1){
                valueInput.value = parseInt(valueInput.value) - 1;
                const productId = e.target.closest('tr').dataset.productId;
                const qty = cart.find(item => item.product.id === parseInt(productId));
                qty.quantity--;
                sessionStorage.setItem('cart', JSON.stringify(cart))
                updateCart();
                updateMiniCart();
            }
        })
    })
    
}

function calculateSubtotal() {
    let subtotal = 0;
    cart.forEach(element => {
        const subtotalValue = element.product.preco_venda*element.quantity;
        subtotal += subtotalValue;
    });
    const subTotal = document.querySelectorAll('li.iscart .icon-text .cart-total, .mini-cart .cart-footer .subtotal p > strong, .cart-summary .cart-total tbody > tr > td.subtotal, tr.grand-total td strong,.single-checkout .item.right ul li span.subtotal,.single-checkout .item.right ul li strong.total');
    subTotal.forEach(element => {
        element.innerHTML = `R$ ${subtotal.toFixed(2)}`;
    }) 
}

function updatePageCheckout() {
    const listProductsCheckout = document.querySelector('.single-checkout .item.right ul.products.mini')
    listProductsCheckout.innerHTML = '';
    cart.forEach(element => {
        listProductsCheckout.innerHTML += `<li class="item">
        <div class="thumbnail object-cover">
            <img src=${element.product.imagem} alt="">
        </div>
        <div class="item-content">
            <p>${element.product.nome}</p>
            <span class="price">
                <span>R$ ${element.product.preco_venda.toFixed(2)}</span>
                <span>x ${element.quantity}</span>
            </span>
        </div>
    </li>`;
    })
}





loadAllProducts()
loadTrendingProductBig()
loadTrendingProductsMini()
productDetails()
loadRelatedProducts()
updateMiniCart()
updateCart()

