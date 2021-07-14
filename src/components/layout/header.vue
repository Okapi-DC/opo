<template>
  <header>
    <b-navbar toggleable="lg" variant="white" bg-primary class="container">
      <b-navbar-brand to="/">
        <img alt="Logo" src="@/assets/logo.png" width="110">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- CENTRE -->
        <b-navbar-nav class="ml-md-auto">
          <b-nav-item to="/" exact-active-class=" active">Produit</b-nav-item>
          <b-nav-item to="/Fonctionnalites" exact-active-class=" active">Fonctionnalités</b-nav-item>
          <b-nav-item to="/Price" exact-active-class=" active">Tarif</b-nav-item>
          <b-nav-item href="https://blog.hellotilt.fr" exact-active-class=" active">Articles</b-nav-item>
        </b-navbar-nav>
        <!-- GAUCHE -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://app.hellotilt.fr" exact-active-class=" other">
            <button class="btn_02" >Connexion</button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style scoped>
.active{
  color: #3B0E67!important;
  border-bottom: 2px solid #3B0E67;
}
header {
  margin-top: 45px;
  margin-bottom: 60px;
}
</style>
