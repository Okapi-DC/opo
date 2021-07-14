<template>
  <div>
    <div class="fond_02 margin_top_160 padding_top_30 padding_bottom_90">
      <b-container>
        <div class="row">
          <div class="col-md-6">
            <img v-bind:src="require('@/assets/héros.svg')" class="img_héros" alt="héros">
          </div>
          <div class="col-md-6">
              <h2 class="title-border_02">softskills</h2>
              <p class="text_white">Développez les soft skills de vos collaborateurs, c’est éviter des situations de stress et augmenter la bonne entente au sein de vos fabuleuses équipes.</p>
            <div class="padding_top_30">
                <b-button class="btn_03" href="https://app.hellotilt.fr/" target="_blank">Essai gratuit</b-button>
                <button v-b-modal.modal-lg1 class="btn_04 ml-4">Voir la démo<b-icon class="player_02" icon="play-fill" aria-hidden="true" animation="throb"></b-icon></button>
                <b-modal id = "modal-lg2"  size = "lg" title="">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GW2QJ2GB060" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </b-modal>
            </div>
          </div>
        </div>
      </b-container>
    </div>

  <b-container>
<div class="padding_top_130 text-center">
  <h2 class="title_02">Développez les <span class="title">super-pouvoirs</span> de vos collaborateurs !</h2>
    <div class="row padding_top_30">
      <div class="col-sm-2">
        <img v-bind:src="require('@/assets/flexible.svg')" width="90"  height="130" alt="Fléxibilté" />
        <p>Fléxibilté</p>
      </div>
      <div class="col-sm-2">
        <img v-bind:src="require('@/assets/decision.svg')" width="90" height="130" alt="Décision" />
        <p>Décision</p>
      </div>
      <div class="col-sm-2">
        <img v-bind:src="require('@/assets/creativite.svg')" width="90" height="130" alt="Créativité" />
        <p>Créativité</p>
      </div>
      <div class="col-sm-2">
        <img v-bind:src="require('@/assets/negociation.svg')" width="90" height="130" alt="Négociation" />
        <p>Négociation</p>
      </div>
      <div class="col-sm-2">
        <img v-bind:src="require('@/assets/management.svg')" width="90" height="130" alt="Management" />
        <p>Management</p>
      </div>
      <div class="col-sm-2">
        <img v-bind:src="require('@/assets/adaptation.svg')" width="90" height="130" alt="Adaptation" />
        <p>Adaptation</p>
      </div>
  </div>
</div>
  </b-container>
  </div>
</template>


<script>
export default {
}
</script>

<style scoped>
.img_héros {
  position: absolute;
  left: -190px;
  top: -190px;
}

button {
  color: white;
}

@media screen and (max-width: 980px) {
  .img_héros {
display: none;
  }
}
</style>
