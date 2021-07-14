<template>
  <div>
  <kinesis-container>
    <b-container>
      <div class="row padding_top_80">
        <div class="col-md-6">
          <h1 class="title_02">
            <span class="title">Métamorphosez</span> votre start-up<br>tech for good à travers une croissance individuelle et collective !
          </h1>
            <p class="padding_top_30">Nous aidons vos collaborateurs à identifier leurs <span class="bold">soft skills</span> et atteindre leurs objectifs.</p>
            <p>Vos collaborateurs sont des super-héros !</p>
              <b-button class="btn_01" href="https://app.hellotilt.fr/" target="_blank">Essai gratuit</b-button>
              <button v-b-modal.modal-lg1 class="btn_04 ml-4">Voir la démo<b-icon class="player_01" icon="play-fill" aria-hidden="true" animation="throb"></b-icon></button>
          <b-modal id = "modal-lg1"  size = "lg" title="">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GW2QJ2GB060" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-modal>
        </div>
        <div class="col-md-6 text-center">
              <kinesis-element :strength="15" type="depth">
                <img v-bind:src="require('@/assets/heroheader.jpg')" class="heroheader" alt="service-image">
              </kinesis-element>
        </div>
      </div>
    </b-container>
  </kinesis-container>
      <softskills></softskills>
      <collaborateurs></collaborateurs>
  </div>
</template>

<script>
import collaborateurs from '@/components/collaborateurs'
import softskills from "@/components/softskills";

export default {
  name: "Home",
  components: {
    softskills,
    collaborateurs,
  },
  data() {
    return {
      visible: false,
    }
  }
}
</script>

<style scoped>
button,input {
  margin-top: 30px!important;
}
h1 {
  font-weight: bold;
  font-size: 32px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 980px) {
  .padding_top_80 {
    padding-top: 0px;
  }
  .heroheader {
    padding-top: 60px;
  }
}
</style>
