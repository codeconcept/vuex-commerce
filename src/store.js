import Vue from "vue";
import Vuex from "vuex";
import productService from "./services/productService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    errors: [],
    cart: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    CREATE_PRODUCT(state, product) {
      state.products = [product, ...state.products];
    },
    CREATE_ERROR(state, error) {
      state.errors = [error, ...state.errors];
    },
    UPDATE_CART(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getProducts({ commit }) {
      productService
        .getProducts()
        .then(res => {
          commit("GET_PRODUCTS", res.data);
        })
        .catch(err => {
          const error = {
            date: new Date(),
            message: `Failed to retrieve products: ${err.message}`
          };
          commit("CREATE_ERROR", error);
        });
    },
    createProduct({ commit }, product) {
      productService.createProduct(product).then(() => {
        commit("CREATE_PRODUCT", product);
      });
    },
    updateCart({ commit }, product) {
      return productService
        .addToCart(product)
        .then(() => {
          console.log(
            "cart",
            JSON.parse(localStorage.getItem("vuex-commerce-cart"))
          );
          commit(
            "UPDATE_CART",
            JSON.parse(localStorage.getItem("vuex-commerce-cart"))
          );
        })
        .catch(err => console.error(err));
    }
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getNumberArticlesInCart(state) {
      if (!state.cart.products) return 0;
      const numberArticles = state.cart.products.reduce((acc, curr) => {
        console.log({ acc, curr });
        return acc + curr.quantity;
      }, 0);
      return numberArticles;
    }
  }
});
