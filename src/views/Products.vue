<template>
  <div class="d-flex flex-wrap" v-if="products">
    <div
      class="product-single d-flex flex-column justify-content-between"
      v-for="product in products"
      :key="product.id"
    >
      <div>{{ product.title }}</div>
      <div>
        <img alt="book image" :src="product.image" class="product-image" />
        <div class="product-price">{{ product.price }} €</div>
      </div>
      <button @click="updateCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCartFromStorage");
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    updateCart(product) {
      this.$store.dispatch("updateCart", product).then(() => {
        console.log(this.$store.state.cart);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product-single {
  padding: 5px;
  margin: 5px;
  width: 350px;
  height: 268px;
  border: 2px solid #666;
}

.product-image {
  margin: 5px;
  width: 30%;
}

.product-price {
  padding-left: 5px;
}
</style>
