<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/contact">Contact</router-link>|
      <router-link to="/admin">Admin</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
