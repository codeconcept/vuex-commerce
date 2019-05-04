<template>
  <div>
    <table class="table" v-if="products">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Publisher</th>
          <th scope="col">Year</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.author.firstName }} {{ product.author.lastName }}</td>
          <td>{{ product.publisher }}</td>
          <td>{{ product.year }}</td>
          <td>{{ product.image }}</td>
          <td>edit</td>
          <td>delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style lang="scss" scoped></style>
