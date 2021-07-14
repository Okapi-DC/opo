<template>
  <b-container class="padding_top_260 ">

  <div class="newsletter">
    <div class="row">
      <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/book.png')" alt="null" />
      </div>

      <div class="col-md-8">
        <h2>Aidez vos collaborateurs à maitriser leurs nouveaux pouvoirs !</h2>
        <p>Téléchargez notre livre blanc "5 étapes pour une expérience collaborateur fantastique."</p>
        <b-form
            @submit="submit"
            method="POST"
            action="https://4c98ad42.sibforms.com/serve/MUIEAMxkHcXTImu6EKH09UITJ76sutdneQnjS-LfNnnJeAIQETjr5wLKMFQsjXlXYAUs0j3SNoXM08bgmCwDjbSTdheqP0WKIwNCSzdpMd_xbGbAqxGPaiioiNtN6-WLa0y_ycU58dv6zdu0hMA_lV0CoWLhwA9U5p-lx2kpS8T55NCwnAJEge2EFqz_EfhZHa6mSRmdedHA-kGm">
          <div class="d-inline-flex">
          <b-form-group>
            <b-form-input
                v-model="$v.form.prenom.$model"
                :state="validateState('prenom')"
                type="text"
                placeholder="Prénom"
                name="PRENOM"
                class="input"
                id="PRENOM">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.prenom.minLength"
            >Il te faut au moins 3 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.prenom.required">
              Prénom requis !
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group>
            <b-form-input
                v-model="$v.form.nom.$model"
                :state="validateState('nom')"
                type="text"
                placeholder="Nom"
                name="NOM"
                class="input"
                id="NOM">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.nom.minLength"
            >Il te faut au moins 3 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.nom.required">
              Nom requis !
            </b-form-invalid-feedback>
          </b-form-group>

          </div>
          <div class="d-inline-flex">
          <b-form-group>
            <b-form-input
                v-model="$v.form.email.$model"
                :state="validateState('email')"
                type="email"
                placeholder="Inscrivez votre adresse e-mail"
                name="EMAIL"
                class="input"
                id="EMAIL">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.minLength"
            >Il te faut au moins 3 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.email"
            >Il faut entrer une adresse mail valide !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.required">
              Adresse email requis !
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-button
                class="btn_01"
                type="submit"
                value="submit"
            >Je télécharge
            </b-button>
          </b-form-group>
          </div>
            <b-form-checkbox
                v-model="$v.form.check.$model"
                :state="validateState('check')"
                switch
                type="checkbox"
                class=""
                value="accepted"
                id="OPT_IN"
                name="OPT_IN">
              J'accepte de recevoir vos e-mails et confirme avoir pris connaissance
              de votre <router-link to="./Politique">politique de confidentialité</router-link> et <router-link to="./Mentions">mentions légales</router-link>.
            </b-form-checkbox>
        </b-form>

      </div>
    </div>
   </div>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {required, minLength, email} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: null,
        prenom: '',
        nom: '',
        check: null
      }
    };
  },
  validations: {
    form: {
      check: {
        required,
      },
      email: {
        email,
        required,
        minLength: minLength(3)
      },
      prenom: {
        required,
        minLength: minLength(3)
      },
      nom: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {

    validateState (form) {
      const {$dirty, $error} = this.$v.form[form];
      return $dirty ? !$error : null;
    },

    submit(e) {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        e.preventDefault();
        return;
      }
     //this.$router.replace({ name: "Contact" });
    },

  },
  mixins: [validationMixin],
}
</script>

<style scoped>
.newsletter {

}

h2, p {
  color: white !important;
}
.form-control {
  border-bottom: none!important;
  border-radius: 15px!important;
}
#EMAIL{
  width: 192%;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
padding-right: 0px;
}


.btn_01 {
  margin-left: 58px;
}
.custom-switch {
  margin-bottom: 10px;
}

.col-md-8:last-child {
  background-color: #433373;
  border-radius: 20px;
  padding-top: 35px;
  padding-left: 140px;
  padding-right: 80px;
  padding-bottom: 20px;
}

img {
  margin-top: -120px;
  z-index: 100;
  vertical-align: middle;
  border-style: none;
  position: absolute;
}

@media screen and (max-width: 980px) {

  img{
display: none;
  }
  .col-md-8:last-child {
    margin: 20px;
    background-color: #3B0E67;
    border-radius: 20px;
    padding-top: 0px;
    padding-left: 0px;
    text-align: center;
    padding: 20px;
  }
  h2,p {
    width: 100%;
  }
  input{
    margin: auto;
  }
}

</style>


