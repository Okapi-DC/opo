<template>
  <div class="text-center">
    <b-container>
    <h2 class="title-border">Contact</h2>
    <div class="row container">
      <b-form class="form" @submit.stop.prevent="onSubmit">
        <b-form-group>
          <p>Nom</p>
          <b-form-input
              v-model="$v.form.name.$model"
              :state="validateState('name')"
              type="text"
              placeholder="DUPONT"
              name="user_name"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.name.required"
          >Nom requis !
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.name.minLength"
          >Il te faut au moins 2 caractères !
          </b-form-invalid-feedback>

        </b-form-group>
        <b-form-group>
          <p>Adresse email</p>
          <b-form-input
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              type=""
              placeholder="margot@monentreprise.fr"
              name="from_email"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.email.minLength"
          >Il te faut au moins 3 caractères !</b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.email.email"
          >Il faut entrer une adresse mail valide !</b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.email.required">
            Adresse email requis !
          </b-form-invalid-feedback>
        </b-form-group>

        <p>Sujet</p>
        <b-form-group>
          <b-form-select
              id="input-3"
              name="example-input-2"
              v-model="$v.form.food.$model"
              :options="foods"
              :state="validateState('food')"
              aria-describedby="input-2-live-feedback"
          ></b-form-select>

          <b-form-invalid-feedback id="input-2-live-feedback">Choissisez un sujet</b-form-invalid-feedback>
        </b-form-group>


        <b-form-group>
          <p>Message</p>
          <b-form-textarea
              v-model="$v.form.msg.$model"
              :state="validateState('msg')"
              placeholder="Votre message"
              name="from_message"
              rows="3"
              max-rows="6"
          ></b-form-textarea>
          <b-form-invalid-feedback v-if="!$v.form.msg.required">
            Message requis !
          </b-form-invalid-feedback>
        </b-form-group>
        <b-button class="btn_02" type="submit" value="Send">Envoyer<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57953 11.515L12.1429 17.2961C12.2988 17.5494 12.5424 17.5465 12.6408 17.5329C12.7392 17.5192 12.976 17.4588 13.0618 17.1714L17.5177 2.12178C17.5956 1.85577 17.4524 1.67453 17.3881 1.61022C17.3257 1.54591 17.1474 1.40852 16.8892 1.4816L1.82889 5.89173C1.54339 5.97553 1.48103 6.21523 1.46739 6.31365C1.45375 6.41401 1.44985 6.66248 1.70222 6.82131L7.54959 10.4782L12.7159 5.2574C12.9994 4.97092 13.4622 4.968 13.7497 5.25155C14.0371 5.5351 14.0391 5.99891 13.7555 6.28539L8.57953 11.515ZM12.5648 19.0003C11.8866 19.0003 11.265 18.6554 10.8986 18.0629L7.12085 11.933L0.927574 8.05977C0.260111 7.64175 -0.0887239 6.89731 0.0194344 6.11487C0.126618 5.33243 0.663512 4.71076 1.4177 4.48957L16.478 0.0794403C17.1708 -0.123235 17.9133 0.0687219 18.4239 0.577358C18.9345 1.09087 19.1245 1.84115 18.9179 2.53687L14.462 17.5855C14.2388 18.3426 13.6152 18.8775 12.8347 18.9818C12.7431 18.9935 12.6545 19.0003 12.5648 19.0003Z" fill="white"/>
        </svg>
        </b-button>
      </b-form>
    </div>
    </b-container>


  <div class="fond_01 margin_top_160">
    <b-container>
    <div class="row padding_top_30 padding_bottom_90">
      <div class="col-md-6">
        <img v-bind:src="require('@/assets/contact.svg')" class="contact_img" alt="Contactez-nous !">
      </div>
      <div class="col-md-6">
        <h2 class="text-left title_02">Contactez<span class="text-white">-nous !</span></h2>
        <p class="text_white padding_top_30"><a href="mailto:contact@hellotilt.fr"></a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>contact@hellotilt.fr</p>
        <p class="text_white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>8 bis rue de la fontaine au Roi <br> 75011 Paris <br>
          <small>Arrêt République - Métro ligne 9, 8, 3, 11, 5</small></p>
      </div>
    </div>
    </b-container>
  </div>
  </div>
</template>

<script>
import { validationMixin, } from "vuelidate";
import { required, minLength,maxLength,email } from "vuelidate/lib/validators";
import emailjs from 'emailjs-com';


export default {
  components: {

  },
  data() {
    return {
      foods: [
        { value: null, text: "-- Sélectionnez votre choix --" },
        { value: "Démonstration", text: "Démonstration" },
        { value: "Essai gratuit", text: "Essai gratuit" },
        { value: "Candidature spontanée", text: "Candidature spontanée" },
        { value: "Je veux métamorphoser ma start-up", text: "Je veux métamorphoser ma start-up" },
      ],
      form: {
        name: '',
        email: null,
        msg: '',
        food:''
      },
      dismissSecs: '3',
      dismissCountDown: '0'
    };
  },
  validations: {
    form: {
      name:{
        required,
        minLength:minLength(2),
      },
      email: {
        email,
        required,
        minLength: minLength(3)
      },
      number: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      msg: {
        required,
      },
      food: {
        required
      },
    },
  },
  methods: {

    validateState (form) {
      const {$dirty, $error} = this.$v.form[form];
      return $dirty ? !$error : null;
    },

    onSubmit(e) {
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }
      emailjs.sendForm('service_dmc2wwq', 'template_x06f0fo', e.target, 'user_87Oyvju6EmrBIntSgveRM')
      //alert('merci')
      this.$router.replace({name: "/Home"});

      this.dismissCountDown = e.dismissCountDown,
          this.dismissCountDown = this.dismissSecs
    },



  },
  mixins: [validationMixin],
}
</script>
<style scoped>
.contact_img {
  width: 110%;
  position: absolute;
  left: -170px;
  top: -260px;
}
p{
  text-align: left;
  margin-bottom: 4px;
  font-weight: bold;
}
.form{
width: 90%;
margin: auto;
}

.form-control{
  padding-left: 20px;
  border: none;
  background-color: #ECEBF1;
  border-radius: 20px;
  width: 100%;
  height: 45px;
  margin-bottom: 15px;
}

#input-3{
  padding-left: 20px;
  border: none;
  background-color: #ECEBF1;
  border-radius: 20px;
  width: 100%;
  height: 45px;
}
@media screen and (max-width: 980px) {
  .contact_img{
    display: none;
  }
}
</style>

