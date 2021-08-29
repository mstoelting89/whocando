<template>
  <div class="row">
    <div class="col-4">
      <Sidebar></Sidebar>
    </div>
    <div class="col-8">
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss">
body {
  background-color: #FBFBFB;
}
#app {
  font-family: "Rachana", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-wrapper {
  max-height: 165px;
  min-height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

</style>
<script>
import Sidebar from "./views/Sidebar";
export default {
  components: {Sidebar}
}
</script>