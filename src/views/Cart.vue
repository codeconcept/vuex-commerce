<template>
  <div>
    <h1>Cart</h1>
    <div v-if="cart">
      <div v-for="product in cart.products" :key="product.id">
        {{ product.title }} - {{ product.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.getCart;
    }
  }
};
</script>

<style lang="scss" scoped></style>
