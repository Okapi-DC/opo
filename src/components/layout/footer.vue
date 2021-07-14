<template>
  <div>
  <newsletter></newsletter>
  <footer class="container padding_top_150">
    <div class="row">
      <div class="col-md-3">
        <h5>Produit</h5>
          <ul class="list-unstyled text-small">
            <li><b-link :to="{ path: './' }">Accueil</b-link></li>
            <li><b-link href="https://app.hellotilt.fr">Connexion</b-link></li>
            <li><b-link href="https://app.hellotilt.fr/inscription">Inscription</b-link></li>
          </ul>
      </div>
      <div class="col-md-3">
        <h5>Service</h5>
          <ul class="list-unstyled text-small">
            <li><b-link :to="{ path: 'Contact' }">Contactez-nous</b-link></li>
            <li><b-link :to="{ path: './Fonctionnalites' }">Fonctionnalités</b-link></li>
            <li><b-link href="https://blog.hellotilt.fr">Notre blog</b-link></li>
            <li><b-link :to="{ path: './Price' }">Tarif</b-link></li>
          </ul>
      </div>
      <div class="col-md-3">
          <h5>Ressources</h5>
          <ul class="list-unstyled text-small">
            <li><b-link :to="{ path: './Mentions' }">Mentions légales</b-link></li>
            <li><b-link :to="{ path: './Politique' }">Politique de confidentialité</b-link></li>
            <li><b-link :to="{ path: './' }">Presse et Media kit</b-link></li>
          </ul>
      </div>
      <div class="col-md-3">
          <h5>Nous suivre</h5>
            <ul class="list-unstyled text-small">
              <a href="https://www.linkedin.com/company/hellotilt/" id="linkedin"><b-icon icon="linkedin" aria-hidden="true"></b-icon></a>
              <a href="https://www.instagram.com/hellotilt_/" id="instagram"><b-icon icon="instagram" aria-hidden="true"></b-icon></a>
              <a href="https://twitter.com/hellotilt_" id="twitter"><b-icon icon="twitter" aria-hidden="true"></b-icon></a>
            </ul>
              <a href="mailto:contact@hellotilt.fr">contact@hellotilt.fr</a>
      </div>
    </div>

    <div class="text-center padding_top_130">
      <img alt="Logo Alcoolo" src="@/assets/logo.png" width="60">
      <p class="padding_top_30">Tous droits réservés©</p>
    </div>
    <cookie-law theme="white-transparent">
      <div class="cookie text-left" slot-scope="props">
        <p>🍪 Nous utilisons des cookies et d'autres technologies pour analyser l'utilisation de ce site.<br>
          Par conséquent, certaines données seront stockées et récupérées sur votre appareil.<br>
          Veuillez consulter notre <router-link to="Politique">politique de confidentialité</router-link> pour plus de détails.
        </p>
        <b-button class="btn_01" @click="props.accept">D'accord</b-button>
      </div>
    </cookie-law>
  </footer>
  </div>
</template>

<script>
import newsletter from '@/components/newsletter'
import CookieLaw from 'vue-cookie-law'

export default {
  components: {
    newsletter,
    CookieLaw,
  },
}
</script>

<style scoped>
.b-icon {
  margin: 7px;
  font-size: 18px;
}
.Cookie--bottom {
  background-color: #ffffff;
  padding: 20px;
  padding-left: 35px;
  width: 95%;
  margin: auto;
  border-radius: 6px;
  margin-bottom: 35px;
  box-shadow: 0px 0px 9px #c7c7c7;
}

@media screen and (max-width: 980px) {}
footer{
  text-align: center;
}


</style>


