<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
body *{
  box-sizing: border-box;
  position: relative;
}
a{
  text-decoration: none;
}
#app {
  @include box(100%, 100%, fixed, 0, 0, null, null);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111111;
}
</style>
