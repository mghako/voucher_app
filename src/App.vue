<template>
  <div id="app" class="px-10">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/myawadi">မြဝတီ</router-link> |
      <router-link to="/denko-npt">Dendo(Npt-1)</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{

}
</script>
<style>
@import "./assets/css/mfont.css";
#app {
  font-family: Myanmar, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
