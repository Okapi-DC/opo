<template>
  <div>
    <b-container class="margin_top_30">
      <div class="row">
        <div class="col-sm">
          <h2 class="title-border padding_top_30">FAQ</h2>
        </div>`
        <div class="col-sm">
          <img v-bind:src="require('@/assets/faq.svg')" class="" alt="Int">
        </div>`
      </div>
    <b-button
        class="btn_faq"
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
    >
      Comment fonctionne l'essai gratuit de 30 jours ?
    </b-button>
      <div class="border-bottom"></div>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>Pour commencer votre essai gratuit (sans engagement), inscrivez-vous simplement sur Tilt et confirmez votre compte. Une fois votre essai commencé, vous pouvez tester notre solution, sans limite, pendant 30 jours.</b-card>
    </b-collapse>

      <b-button
          class="btn_faq"
          :class="visible0 ? null : 'collapsed'"
          :aria-expanded="visible0 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible0 = !visible0"
      >
        Ai-je besoin d'une carte de crédit pour commencer mon essai gratuit ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible0" class="mt-2">
        <b-card>Non, vous pouvez commencer votre essai gratuit sans ajout d’information de paiement.</b-card>
      </b-collapse>

      <b-button
          class="btn_faq"
          :class="visible1 ? null : 'collapsed'"
          :aria-expanded="visible1 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible1 = !visible1"
      >
        Quelles sont mes options de paiement ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible1" class="mt-2">
        <b-card>Vous pouvez payer par cate bancaire : Mastercard, Visa, et Paypal.
          Vous avez également la possibilité de payer par virement bancaire en contactant un commercial.
          <b-button class="btn_01 margin_top_30 flex-fill" @click="$router.push('Contact')">Nous contacter</b-button>
        </b-card>
      </b-collapse>


      <b-button
          class="btn_faq"
          :class="visible2 ? null : 'collapsed'"
          :aria-expanded="visible2 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible2 = !visible2"
      >
        Que se passe-t-il lorsque mon essai se termine ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible2" class="mt-2">
        <b-card>Une fois votre essai gratuit terminé, vous devrez actualiser votre plan de paiement pour continuer à utiliser Tilt.
        </b-card>
      </b-collapse>


      <b-button
          class="btn_faq"
          :class="visible3 ? null : 'collapsed'"
          :aria-expanded="visible3 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible3 = !visible3"
      >
        Puis-je annuler mon abonnement à tout moment ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible3" class="mt-2">
        <b-card>Oui, vous pouvez annuler à tout moment. Une fois annulé, votre abonnement ne sera pas renouvelé, mais vous pourrez toujours utiliser Tilt jusqu'à la fin de votre abonnement.
        </b-card>
      </b-collapse>



      <b-button
          class="btn_faq"
          :class="visible4 ? null : 'collapsed'"
          :aria-expanded="visible4 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible4 = !visible4"
      >
        Mes données seront-elles en sécurité ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible4" class="mt-2">
        <b-card>Chez tilt, la protection de vos données est une priorité ! Nous prenons des précautions supplémentaires lors de la sauvegarde de vos données. Aussi, l’accès est sécurisé pour les employés grâce à un accès unique.
        </b-card>
      </b-collapse>



      <b-button
          class="btn_faq"
          :class="visible5 ? null : 'collapsed'"
          :aria-expanded="visible5 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible5 = !visible5"
      >
        Comment changer mon abonnement ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible5" class="mt-2">
        <b-card>Rien de simple ! Il suffit a l’administrateur d’aller dans les paramètres afin de changer de forfait. Votre nouvel abonnement sera effectif au mois suivant.
        </b-card>
      </b-collapse>


      <b-button
          class="btn_faq"
          :class="visible6 ? null : 'collapsed'"
          :aria-expanded="visible6 ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible6 = !visible6"
      >
        D’autres questions ?
      </b-button>
      <div class="border-bottom"></div>
      <b-collapse id="collapse-4" v-model="visible6" class="mt-2">
        <b-card>Si vous avez d’autres question n’hésitez pas a nous contactez ! Nous serons ravi de vous aider !
          <b-button class="btn_01 margin_top_30 flex-fill" @click="$router.push('Contact')">Nous contacter</b-button>
        </b-card>
      </b-collapse>
    </b-container>



  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible0: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
    }
  }
}
</script>
<style scoped>
.card {
  border: 0px;
}
.card-body{
  padding-top: 20px;
}
.btn_faq{
  border-top: 2px solid #3B0E67;
  background: none;
  border: none;
  color: #3B0E67;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  margin: 20px;
}
.btn_faq:hover {
  color: #3B0E67;
  background-color: transparent;
}
.btn_faq:focus {
  outline: white!important;
  box-shadow: none!important;
}

.btn_faq:active{
  color: #3B0E67!important;
  background-color: white!important;
}

.btn_01{
  display: flex;
}
.border-bottom{
  margin: 20px;
}

</style>
