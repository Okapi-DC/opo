<template>
  <div>
  <b-container>
  <div class="row padding_top_30 text-center">
    <div class="block_01 col-md-3">
      <h2 class="title_02">SOLO  💼</h2>
      <h4 class="margin_top_20">8€</h4>
      <small>Par collaborateur / mois</small>
      <p class="margin_top_20 border"><span>30 jours gratuits</span><br>sans engagement</p>
      <p class="margin_top_20">Inclus :</p>
      <p>+ Outil de développement des soft skills</p>
      <b-button class="btn_01" type="submit">Essai gratuit</b-button>
    </div>
    <div class="block_02 col-md-4">
      <h2 class="title">STANDARD 🖇</h2>
      <h4 class="margin_top_20">6€</h4>
      <small>Par collaborateur / mois</small>
      <p class="margin_top_20 border"><span>30 jours gratuits</span><br>sans engagement</p>
      <p>SANS ENGAGEMENT</p>
      <p class="margin_top_20">Inclus :</p>
      <p>+ Outil de suivi du bien-être</p>
      <p>+ Outil de développement des soft skills</p>
      <b-button class="btn_03" type="submit">Essai gratuit</b-button>
    </div>
    <div class="block_01 col-md-3">
      <h2 class="title_02">PREMIUM 🏆</h2>
      <h4 class="margin_top_20">Offre personnalisée</h4>
      <p class="margin_top_20 border"><span>30 jours gratuits</span><br>sans engagement</p>
      <p class="margin_top_20">Inclus :</p>
      <p>Liste de fonctionnalités
        adaptable selon vos usages</p>
      <b-button class="btn_01" type="submit">Essai gratuit</b-button>
    </div>
  </div>
  </b-container>
  <div class="fond"></div>
    <faq></faq>
  </div>
</template>

<script>
import faq from "@/components/faq"

export default {
  name: "Price",
  components: {
    faq,
  }
}
</script>

<style scoped>
.col-sm{
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(59, 14, 103, 0.2);
  margin: 20px
}

span {
  color: #5ECFC4;
}

.fond {
  background-color: #5ECFC4;
  height: 450px;
  margin-top: -400px;
}
.title_02 {
  color: #5ECFC4;
}

h4{
  font-size: 30px;
}

.row {
  display: flex;
  justify-content: center;
  background-image: url("/assets/moodbord1.png");
}

h2, p {
width: 100%;
}

.block_02 {
  color: white;
  background-color: #433373;

  padding: 35px;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(59, 14, 103, 0.2);
  margin: 25px
}

.block_02 .border {
  border: 1px solid white;
  border-radius: 20px!important;
  padding: 5px;
}
.block_01 .border {
  border: 2px solid #3B0E67;
  color: #3B0E67;
  border-radius: 20px!important;
  padding: 5px;
}

.block_02 p,h2 {
  color: white;
}

.margin_top_20 {
  margin-top: 20px;
}

.block_01 {
  color: #3B0E67;

  text-align: center;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(59, 14, 103, 0.2);
  margin: 20px;
  margin-top: 70px;
  background-color: white;
}


</style>
