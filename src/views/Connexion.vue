<template>
  <div class="container text-center">
    <h2>Connexion</h2>
    <div class="row justify-content-center align-items-center ">

        <b-form @submit.stop.prevent="onSubmit" class="espace">
          <b-form-group>
            <b-form-input
                v-model="$v.form.email.$model "
                :state="validateState('email')"
                type="email"
                placeholder="Adresse email"
            ></b-form-input>

            <b-form-invalid-feedback v-if="!$v.form.email.minLength"
            >Il te faut au moins 3 caractères !</b-form-invalid-feedback>

            <b-form-invalid-feedback v-if="!$v.form.email.required">
              Adresse email requis !
            </b-form-invalid-feedback>
          </b-form-group>


          <b-form-group>
            <b-form-input
                v-model="$v.form.password.$model"
                :state="validateState('password')"
                type="password"
                placeholder="Mot de passe"
            ></b-form-input>

            <b-form-invalid-feedback v-if="!$v.form.password.minLength"
            >Il te faut au moins 8 caractères !</b-form-invalid-feedback>

            <b-form-invalid-feedback v-if="!$v.form.password.required">
              Mot de passe requis !
            </b-form-invalid-feedback>

          </b-form-group>


          <b-button type="submit">Se connecter</b-button>

        </b-form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";


export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      }
    };
  },

  validations: {
    form: {
      email: {
        required,
        minLength: minLength(3)
      },
      password :{
        required,
        minLength: minLength(8)
      }
    },
  },
  methods: {

    validateState(email) {
      const {$dirty, $error} = this.$v.form[email];
      return $dirty ? !$error : null;
    },


    resetForm() {
      this.form = {
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },

    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
  mixins: [validationMixin],
}
</script>

<style scoped>
</style>


