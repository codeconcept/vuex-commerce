<template>
  <div id="app">
    <div id="nav">
      <span class="spacer">
        <router-link to="/">Home</router-link>
      </span>
      <span class="spacer">
        <router-link to="/contact">Contact</router-link>
      </span>
      <span class="spacer">
        <router-link to="/admin">Admin</router-link>
      </span>
      <span class="float-right">
        <router-link to="/cart">cart (0)</router-link>
      </span>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  padding-right: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.spacer {
  padding: 10px;
}
</style>
