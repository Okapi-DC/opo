<template>
  <div class="container text-center">
    <h2>Inscription</h2>
    <div class="row justify-content-center align-items-center ">

      <b-form @submit.stop.prevent="onSubmit" class="espace">
        <b-form-group>

          <b-form-input
              v-model="name"
              type="texte"
              placeholder="Prénom">

          </b-form-input>
        </b-form-group>


        <b-form-group>
          <b-form-input
              v-model="$v.form.age.$model"
              :state="validateState('age')"
              type="number"
              placeholder="Age"
          ></b-form-input>

          <b-form-invalid-feedback v-if="!$v.form.age.between">
            Vous devez avoir plus de 18 ans
          </b-form-invalid-feedback>
        </b-form-group>


        <b-form-group>

          <b-form-input
              v-model="$v.form.email.$model"
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


        <b-form-group>
          <b-form-input
              v-model.trim="$v.form.repeatPassword.$model"
              :state="validateState('repeatPassword')"
              type="password"
              placeholder="Confirmation"
          ></b-form-input>

          <b-form-invalid-feedback v-if="!$v.form.repeatPassword.sameAs">
            Il ne sont pas identique
          </b-form-invalid-feedback>



        </b-form-group>


        <b-button type="submit">S'inscrire</b-button>
        <b-button class="ml-2" @click="resetForm()">Recommancer </b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
import { validationMixin, } from "vuelidate";
import { required, minLength, sameAs, between } from "vuelidate/lib/validators";


export default {
  data() {
    return {
      form: {
        name: '',
        age: null,
        email: null,
        password: '',
        repeatPassword: '',
      }
    };
  },
  mounted() {
    if (localStorage.name) this.name = localStorage.name;
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  },

  computed: {
    name: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },

  validations: {
    form: {
      age: {
        required,
        between: between(18,1200)
      },
      email: {
        required,
        minLength: minLength(3)
      },
      password :{
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password')
      },
    },
  },
  methods: {

    updateMessage(e) {
      this.$store.commit('updateMessage', e.target.value)
    },

    validateState (form) {
      const {$dirty, $error} = this.$v.form[form];
      return $dirty ? !$error : null;
    },

    resetForm() {
      this.form = {
        form: null,
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

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.Connexion));
    },
  },
  mixins: [validationMixin],
}
</script>

<style scoped>

</style>

