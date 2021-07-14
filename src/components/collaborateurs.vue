<template>
  <div>
  <b-container class="padding_bottom_90">
    <div class="row padding_top_130">
      <div class="col-md-6">
          <h2 class="padding_top_30 title_02">Suivez le <span class="title">bien-être</span> de vos collaborateurs.</h2>
          <p class="padding_top_30">Pensez au bien-être au sein de votre start-up, c’est aussi améliorer la productivité et voir l’évolution dans le temps.</p>
          <b-button class="btn_02 margin_top_30" @click="$router.push('Fonctionnalites')">En savoir plus</b-button>
      </div>
      <div class="col-md-6 text-right">
          <kinesis-container event="scroll">
            <kinesis-element
                :strength="80">
              <img class="element" v-bind:src="require('@/assets/element.svg')" alt="Bulle flotante" />
            </kinesis-element>
          </kinesis-container>
          <img v-bind:src="require('@/assets/epingles.jpg')" alt="Collaborer ensemble" />
      </div>
    </div>
  </b-container>
    <div class="fond_01 margin_top_160 padding_bottom_90">
      <b-container class="margin_top_90">
        <div class="row">
          <div class="col-md-6">
            <kinesis-container event="scroll">
              <kinesis-element :strength="100">
                <img class="element" v-bind:src="require('@/assets/element2.svg')" alt="Bulle flotante" />
              </kinesis-element>
            </kinesis-container>
            <h2 class="padding_top_30 title-border">Feedback</h2>
            <p class="text_white">Lancez des sondages et partez en quête de résultats ! Vos collaborateurs se sentiront entendus et une écoute leur permettra d’être davantage fantastique dans leur travail !</p>
            <b-button class="btn_06 margin_top_30" @click="$router.push('Fonctionnalites')"> En savoir plus</b-button>
          </div>
      <div class="col_feedback col-md-6">
          <img v-bind:src="require('@/assets/feedback.svg')" class="img_feedback" alt="Feedback" />
      </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.element {
  padding-right: 130px;
  margin: -25%;
  width: 50%;
}
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
  padding-right: 0px;
}
.img_feedback {
  position: absolute;
  top: -130px;
  right: 0;
}
.col_feedback{
position: absolute;
right: 0px;
}

@media screen and (max-width: 980px) {
  img {
    width: 100%;
    padding-top: 25px;
  }
  .padding_top_130{
    padding-top: 30px;
  }
  .img_feedback{
    display: none;
  }
  .container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    padding-right: 15px;
  }
  .col-md-6:first-child{
    padding-top: -30px;
  }
}
</style>
