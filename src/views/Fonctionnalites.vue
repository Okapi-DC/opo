<template>
<div class="padding_top_150">
    <div class="background_01">
      <b-container>
        <div class="row">
           <div class="col-md-6">
              <h2 class="title-border padding_top_30">Défis</h2>
              <p>Permettez à vos collaborateurs de développer leurs soft skills en relevant des défis quotidiens afin de vous amélirorez un peu plus chaque jour.</p>
              <b-button class="btn_06" @click="$router.push('Contact')">Demandez une démo</b-button>
            </div>
            <div class="col_defis col-md-6">
              <img v-bind:src="require('@/assets/defis.svg')" class="defis_img" alt="Défis">
            </div>
       </div>
      </b-container>
    </div>

  <div class="padding_top_80">
    <b-container>
      <div class="row">
        <div class="col-md-6">
          <h2 class="title_02 padding_top_30">Challengez <span>vos soft skills,</span><br>Transformez <span>vos collaborateurs !</span></h2>
        </div>
        <div class="col-md-6 col_tilt">
          <img v-bind:src="require('@/assets/tilt.svg')" class="tilt_img" alt="service-image">
        </div>
      </div>
    </b-container>
  </div>

  <div class="fond_02 padding_top_80">
    <b-container>
      <div class="row">
        <div class="col-md-6">
          <img v-bind:src="require('@/assets/test.svg')" class="test_img" alt="service-image">
        </div>
        <div class="col-md-6">
          <h2 class="title-border">Test</h2>
          <p>Découvrez vos soft skills à travers un test de personnalité pour savoir quel type de super héros vous seriez pour votre start-up.</p>
          <b-button class="btn_03" href="#">Passer le test (1 min)</b-button>
        </div>
      </div>
    </b-container>
  </div>

</div>
</template>

<script>
export default {
name: "Fonctionnalites"
}
</script>

<style scoped>
p { color: white;
}
.col_defis {
  position: absolute;
  right: 0px;
}
.defis_img {
  position: absolute;
  top: -130px;
  right: 0;
  margin-top: -70px;
}

.col_tilt{
  position: absolute;
  right: 0px;
}
.tilt_img {
  position: absolute;
  top: -150px;
  right: 0;
  z-index: -2;
}
.row {
  height: 400px!important;
}
.test_img {
  width: 180%;
  position: absolute;
  left: -480px;
  top: -190px;
}

.background_01 {
  background-color: #5ECFC4;
}
.background_02 {
  background-color:$secondary;
}

span{
  color: #5ECFC4;
}

@media screen and (max-width: 980px) {
  .defis_img{
  display: none;
}
  .padding_top_150:first-child{
    padding-top: 0px;
  }
  .tilt_img{
    display: none;
  }
  .test_img{
    margin-top: -140px;
  }
}
</style>
