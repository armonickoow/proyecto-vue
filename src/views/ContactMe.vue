<template>
  
  <div class="about">
    <nav-bar></nav-bar>
    <v-container class="px-5">
      <h1 class="text-center">Cotiza con nosotros</h1>
      <v-row justify="center">
        <v-col col="8">
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-btn
            :disabled="!valid"
            color="teal lighten-1"
            class="mr-4 white--text"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
          Reset Validation
        </v-btn>

      </v-form>
    </v-col>
  </v-row>    
  </v-container>
  </div>
</template>

<script>
    import NavBar from '../components/NavBar'

    export default{
        components: {
            NavBar
        },

      data: () => ({
        valid: true,
        name: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Cotizar por unidad',
        'Cotizar por mayot',
        'Reclamo',
        'Otra consulta',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

