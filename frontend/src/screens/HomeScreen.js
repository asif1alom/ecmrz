import data from '../data.js';

export default {
  render: () => {
    const { products } = data;
    return `
      <ul class="products">
        ${products
          .map(
            (product) => `
              <li class="product">
                <div class="single-product">
                  <div class="pr-img">
                    <img src="${product.image}" alt="">
                  </div>
                  <div class="details">
                    <a class="title" href="/#/products/${product._id}">${product.name}</a>
                    <a class="Origin" href="">${product.origin}</a>
                    <a class="Price" href="">${product.price}</a>
                  </div>
                  <div class="order">
                    <a href=""> <button>Order Now</button></a>
                  </div>
                </div>
              </li>
            `
          )
          .join("\n")}
      </ul>
    `;
  },
};