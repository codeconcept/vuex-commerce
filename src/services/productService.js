import axios from "axios";

let baseUrl = "http://localhost:3000";

export default {
  getProducts() {
    return axios.get(`${baseUrl}/products`);
  },
  createProduct(book) {
    return axios.post(`${baseUrl}/products`, book);
  },
  addToCart(product) {
    return new Promise(resolve => {
      let cartInLocalstorage = localStorage.getItem("vuex-commerce-cart");
      let cart = {};
      if (!cartInLocalstorage) {
        product.quantity = 1;
        cart = { products: [product] };
        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      } else {
        const products = JSON.parse(localStorage.getItem("vuex-commerce-cart"))
          .products;
        // is same product already in cart?
        const index = products.findIndex(p => p.id === product.id);
        if (index === -1) {
          product.quantity = 1;
          cart = { products: [...products, product] };
        } else {
          products[index].quantity += 1;
          cart = {
            products: [...products]
          };
        }
        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      }
    });
  },
  removeOneFromCart(product) {
    return new Promise(resolve => {
      const products = JSON.parse(localStorage.getItem("vuex-commerce-cart"))
        .products;
      const index = products.findIndex(p => p.id === product.id);
      products[index].quantity -= 1;

      // remove this product from cart if it's new quantity is zero
      if (products[index].quantity === 0) {
        products.splice(index, 1);
      }

      const cart = {
        products: [...products]
      };
      localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
      resolve(cart);
    });
  }
};
