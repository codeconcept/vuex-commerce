<template>
  <div>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <label for="firstName">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Author first name"
        />
      </div>
      <div class="form-group">
        <label for="publisher">Publisher</label>
        <input
          type="text"
          class="form-control"
          id="publisher"
          placeholder="Publisher"
        />
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input
          type="number"
          class="form-control"
          id="year"
          placeholder="Publication year"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="text"
          class="form-control"
          id="price"
          placeholder="Price"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Author last name"
        />
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="Image"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
