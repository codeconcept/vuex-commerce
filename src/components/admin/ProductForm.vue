<template>
  <div>
    <form @submit.prevent="create">
      <div class="form-group">
        <label for="id">ID</label>
        <input
          type="text"
          class="form-control"
          id="id"
          placeholder="Enter id (ISBN)"
          v-model="book.id"
        />
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter title"
          v-model="book.title"
        />
      </div>
      <div class="form-group">
        <label for="firstName">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Author first name"
          v-model="book.author.firstName"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Author last name"
          v-model="book.author.lastName"
        />
      </div>
      <div class="form-group">
        <label for="publisher">Publisher</label>
        <input
          type="text"
          class="form-control"
          id="publisher"
          placeholder="Publisher"
          v-model="book.publisher"
        />
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input
          type="number"
          class="form-control"
          id="year"
          placeholder="Publication year"
          v-model="book.year"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="text"
          class="form-control"
          id="price"
          placeholder="Price"
          v-model="book.price"
        />
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="Image"
          v-model="book.image"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: "",
        author: {
          firstName: "",
          lastName: ""
        },
        publisher: "",
        year: "",
        price: "",
        image: ""
      }
    };
  },
  methods: {
    create() {
      console.log(this.book);
      this.$store.dispatch("createProduct", this.book);
    }
  }
};
</script>

<style lang="scss" scoped></style>
