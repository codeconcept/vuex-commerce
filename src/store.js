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
    ADD_TO_CART(state, product) {
      state.cart = [product, ...state.cart];
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
    addToCart({ commit }, product) {
      return productService
        .addToCart(product)
        .then(() => {
          commit("ADD_TO_CART", product);
        })
        .catch(err => console.error(err));
    }
  }
});
