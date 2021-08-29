<template>
  <div class="row">
    <div class="col-12 header-logo">
      <router-link to="/"><img src="@/assets/images/logo/wcd-logo.png"></router-link>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <nav class="nav flex-column">
        <router-link to="/" class="nav-link active">Dashboard</router-link>
        <router-link to="/search" class="nav-link">Suche</router-link>
        <router-link to="/offers" class="nav-link" >Meine Angebote</router-link>
        <router-link to="/messages" class="nav-link" href="#">Nachrichten</router-link>
        <router-link to="/settings" class="nav-link" href="#">Einstellungen</router-link>
        <router-link to="/" class="nav-link" href="#">Logout</router-link>
      </nav>
    </div>
  </div>

</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
 .header-logo {
   display: flex;
   background-color: #1F0322;
   justify-content: center;
 }
 .header-logo img {
   min-height: 165px;
   max-height: 165px;
   width:auto;
 }
 .nav-link {
   font-size: 26px;
   text-align: left;
   color: #1F0322;
   /*transition: background-color 500ms ease-in; */
   transition: .5s ease-out;
   padding-top: 20px;
 }
 .nav-link:focus {
   color: #1F0322;
 }
 .nav-link:hover {
   background-color: #DA4167;
   color: #1F0322;

 }
 .row {
   padding-right:0px;
   margin-right: 0px;
 }
 .col-12 {
   padding-right:0px;
   margin-right: 0px;
 }
 nav {
   margin-top: 30px;
 }
</style>