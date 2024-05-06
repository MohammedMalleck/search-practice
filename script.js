import { products,loadProducts } from "./data.js";

async function loadPage(){
  await loadProducts();
  const searchedProducts =loadSearchedProdcuts();
  const productsArgument = searchedProducts ? searchedProducts : products;
  renderHTML(productsArgument);
}
loadPage();
function renderHTML(products){
  let html = '';
  products.forEach((product)=>{
    html +=
    `
      <div>
        <div>ProductName : ${product.name}</div>
      </div>
    `;
  });

  document.querySelector('.container').innerHTML = html;
}
//add event listener to header
document.querySelector('button')
  .addEventListener('click',()=>{
    const inputEl = document.querySelector('input');
    const searchedText = inputEl.value;
    window.location.href = `index.html?search=${searchedText}`;
  });

function loadSearchedProdcuts(){
  const url = new URL(window.location);
  const searchParam = url.searchParams.get('search');
  let searchedProducts;
  if(searchParam){
    searchedProducts = [];
    products.find((product)=>{
      if(product.name.includes(searchParam)){
        searchedProducts.push(product);
      }
    });
  }
  return searchedProducts;
}