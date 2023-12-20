<!-- src/App.vue -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@font-face {
  font-family: 'MyCustomFont';
  src: url('../fonts/groplet/Gropled-Bold.otf') format('truetype'),

}

h1 h2 p a {
  font-family: 'MyCustomFont', sans-serif;
  color:#fff;
}


body {
  background: linear-gradient(to bottom right, #000, #999999);
  margin:0px;
}
header nav ul li a {
  text-decoration: none;
}
</style>
